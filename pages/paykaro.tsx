import { useState } from "react";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";

const PaymentPage: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="container flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Please Sign In
        </motion.h1>
        <Button
          className="mt-8 transform bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105"
          onClick={() => signIn()}
        >
          Sign In
        </Button>
      </div>
    );
  }

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      alert("No file selected. Please choose an image file.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Invalid file type. Please upload an image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size too large. Please upload an image smaller than 5MB.");
      return;
    }

    try {
      const { data: checkResponse } = await axios.post("/api/check", {
        user_Id: session?.user._id,
        session: session,
      });

      if (checkResponse.message === "Image already uploaded") {
        alert("You have already uploaded an image.");
        return;
      }

      // Preview the image
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);

      // Upload image
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "culfest");

      const { data: uploadResponse } = await axios.post(
        `https://api.cloudinary.com/v1_1/dgyebzm4w/image/upload`,
        formData
      );

      setUploadedImage(uploadResponse.secure_url);

      const { data: uploadApiResponse } = await axios.post("/api/upload", {
        url: uploadResponse.secure_url,
        user_Id: session?.user._id,
        session: session,
      });

      if (uploadApiResponse.message !== "Image uploaded successfully") {
        alert("Image not successfully uploaded.");
        return;
      }

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleFormSubmit = () => {
    if (!uploadedImage) {
      alert("Please upload a payment proof before submitting!");
      return;
    }
    alert("Payment proof submitted successfully!");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="mb-4 text-2xl font-bold">GPay Payment</h1>
      <div className="mb-4">
        <img
          src="/gpay.jpg"
          alt="QR Code for GPay Payment"
          className="h-64 w-64 rounded border shadow-lg"
        />
        <p className="mt-2 text-sm text-gray-600">
          Scan this QR code to make the payment.
        </p>
      </div>
      <form
        className="w-full max-w-md rounded bg-white p-6 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <label
          htmlFor="upload"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Upload Payment Proof
        </label>
        <input
          type="file"
          id="upload"
          accept="image/*"
          className="mb-4 w-full rounded border px-3 py-2 focus:outline-none"
          onChange={handleImageUpload}
        />
        {uploading && (
          <p className="mb-4 text-sm text-blue-500">Uploading...</p>
        )}
        {imagePreview && (
          <div className="mb-4">
            <p className="mb-2 text-sm font-semibold text-gray-700">
              Uploaded Image Preview:
            </p>
            <img
              src={imagePreview}
              alt="Uploaded Proof"
              className="h-auto w-64 rounded border shadow"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
          disabled={uploading}
        >
          Submit Payment Proof
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;

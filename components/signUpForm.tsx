import axios from "axios";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import Image from "next/image";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Button } from "./ui/button";
const SignupForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    state: "",
    college: "",
    gender: "male",
    graduationYear: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState(false);
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(email, otp, password);
    setError("");
    setLoading(true);
    //logic
    try {
      const response = await axios.post("/api/otpverifyforregister", {
        email: formData?.email,
        otp: otp,
      });
      if (response.data.status === 400) {
        setError(response.data.message);
        setIsOpen(false);
      } else if (response.data.status === 409) {
        setError(response.data.message);
        setIsOpen(false);
      } else if (response.data.status === 202) {
        setError(response.data.message);
        setIsOpen(false);
      } else if (response.data.status === 201) {
        setIsOtpCorrect(true);
        setIsOpen(false);
      }
    } catch (error: any) {
      // console.log(error?.message);
      setError(error?.message);
      setIsOpen(false);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(email, otp, password);
    setError("");
    setLoading(true);
    //logic
    try {
      const response = await axios.post("/api/sendemailforregister", {
        email: formData?.email,
        purpose: "registration",
      });
      if (response.data.status === 400) {
        setError(response.data.message);
      } else if (response.data.status === 409) {
        setError(response.data.message);
      } else if (response.data.status === 201) {
        setSentOtp(true);
      }
    } catch (error: any) {
      // console.log(error?.message);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    formData["confirmPassword"] = formData["re-enter password"];
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/auth/signup", formData);
      setIsSubmitting(false);

      if (response.status === 201) {
        alert("Registered successfully");
        router.push("/login");
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.response.data.message);
      setTimeout(() => {
        setError("Register");
      }, 2000);
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/reg_bg5.avif')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Registration Form Container */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-[15%] lg:px-[26%]">
        <div
          className="flex w-full max-w-4xl flex-col rounded-lg border-4 bg-black/70 shadow-lg lg:flex-row"
          style={{
            borderImage:
              "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
            borderImageSlice: 1,
            animation: "borderAnimation 5s linear infinite",
          }}
        >
          {/* Logo Section */}
          <div className="flex w-full items-center justify-center p-8 lg:w-1/3">
            <motion.img
              src="/culfest_logo.png"
              alt="Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="h-40 w-auto"
              style={{
                transformStyle: "preserve-3d",
                animation: "rotateLogo 25s linear infinite",
              }}
            />
          </div>

          {/* Form Section */}
          <div className="max-h-[65vh] w-full overflow-auto p-8 lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-center"
            >
              <h1 className="mb-2 text-4xl font-extrabold text-white">
                SIGN UP
              </h1>
              <p className="text-lg text-gray-300 text-white">
                CULFEST'25 - WORLD OF MINIATURE
                <br />
              </p>
              <br />
              <br />
              <p className="text-white">
                NIT Jamshedpur students must use their official college email ID
                to register or log in.
              </p>
            </motion.div>

            {/* Form Fields */}
            <form
              className="space-y-4"
              onSubmit={
                isOtpCorrect
                  ? handleSubmit
                  : sentOtp
                  ? handleVerifyOtp
                  : handleSendOtp
              }
            >
              {[
                "Username",
                "Email",
                "Password",
                "Re-enter Password",
                "Phone",
                "City",
                "State",
                "College",
              ].map((field, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <input
                    type={
                      field.toLowerCase().includes("password")
                        ? "password"
                        : "text"
                    }
                    required
                    placeholder={field}
                    className="w-full rounded-md bg-gray-800 p-2 text-white focus:border-transparent focus:outline-none"
                    onChange={handleInputChange}
                    name={field.toLowerCase()}
                    value={formData[field.toLowerCase()]}
                    style={{
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
                      borderImageSlice: 1,
                      animation: "swirlBorderAnimation 3s linear infinite",
                    }}
                  />
                </motion.div>
              ))}

              {/* Gender Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 8 * 0.1 }}
              >
                <select
                  className="w-full rounded-md bg-gray-800 p-2 text-white focus:border-transparent focus:outline-none"
                  style={{
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
                    borderImageSlice: 1,
                    animation: "swirlBorderAnimation 3s linear infinite",
                  }}
                  onChange={handleInputChange}
                  name={"gender"}
                  value={formData["gender"]}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </motion.div>

              {/* Year of Graduation Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 9 * 0.1 }}
              >
                <select
                  className="w-full rounded-md bg-gray-800 p-2 text-white focus:border-transparent focus:outline-none"
                  style={{
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
                    borderImageSlice: 1,
                    animation: "swirlBorderAnimation 3s linear infinite",
                  }}
                  onChange={handleInputChange}
                  name={"graduationYear"}
                  value={formData["graduationYear"]}
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-full overflow-hidden rounded-md border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-2 font-semibold text-white"
                style={{
                  backgroundClip: "padding-box",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
                disabled={loading}
              >
                <div
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70 blur-lg"
                  style={{
                    zIndex: -1,
                    animation: "glowAnimation 3s linear infinite",
                  }}
                ></div>
                {loading
                  ? "Loading..."
                  : isOtpCorrect
                  ? "Register"
                  : sentOtp
                  ? "Verify Otp"
                  : "Send Otp"}

                {/* {error && <p>{error}</p>} */}
              </motion.button>

              {sentOtp && (
                <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                  <AlertDialogContent className="shad-alert-dialog">
                    <AlertDialogHeader className="relative flex justify-center">
                      <AlertDialogTitle className="h2 text-center">
                        Enter Your OTP
                        <Image
                          src="/assets/icons/close-dark.svg"
                          alt="close"
                          width={20}
                          height={20}
                          onClick={() => setIsOpen(false)}
                          className="otp-close-button"
                        />
                      </AlertDialogTitle>
                    </AlertDialogHeader>

                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                      <InputOTPGroup className="shad-otp">
                        <InputOTPSlot index={0} className="shad-otp-slot" />
                        <InputOTPSlot index={1} className="shad-otp-slot" />
                        <InputOTPSlot index={2} className="shad-otp-slot" />
                        <InputOTPSlot index={3} className="shad-otp-slot" />
                        <InputOTPSlot index={4} className="shad-otp-slot" />
                        <InputOTPSlot index={5} className="shad-otp-slot" />
                      </InputOTPGroup>
                    </InputOTP>

                    <AlertDialogFooter>
                      <div className="flex w-full flex-col gap-4">
                        <AlertDialogAction
                          onClick={handleVerifyOtp}
                          className="shad-submit-btn h-12"
                          type="button"
                        >
                          Submit
                          {loading && (
                            <Image
                              src="/assets/icons/loader.svg"
                              alt="loader"
                              width={24}
                              height={24}
                              className="ml-2 animate-spin"
                            />
                          )}
                        </AlertDialogAction>
                      </div>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}

              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  color: "#c5c6c7",
                }}
              >
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{
                    color: "#66fcf1",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Login !!
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-auto {
          scrollbar-width: none;
        }
        ::placeholder {
          color: white; /* Change placeholder text color to white */
        }
        @keyframes borderAnimation {
          0% {
            border-image-source: linear-gradient(
              45deg,
              rgb(238, 57, 255),
              rgb(119, 6, 248),
              rgb(227, 203, 225),
              rgb(8, 4, 145),
              rgb(255, 0, 123)
            );
          }
          50% {
            border-image-source: linear-gradient(
              135deg,
              rgb(119, 6, 248),
              rgb(8, 4, 145),
              rgb(255, 0, 123),
              rgb(238, 57, 255),
              rgb(227, 203, 225)
            );
          }
          100% {
            border-image-source: linear-gradient(
              45deg,
              rgb(238, 57, 255),
              rgb(119, 6, 248),
              rgb(227, 203, 225),
              rgb(8, 4, 145),
              rgb(255, 0, 123)
            );
          }
        }
        @keyframes swirlBorderAnimation {
          0% {
            border-image-source: linear-gradient(
              45deg,
              rgb(238, 57, 255),
              rgb(119, 6, 248),
              rgb(227, 203, 225),
              rgb(8, 4, 145),
              rgb(255, 0, 123)
            );
          }
          50% {
            border-image-source: linear-gradient(
              135deg,
              rgb(119, 6, 248),
              rgb(8, 4, 145),
              rgb(255, 0, 123),
              rgb(238, 57, 255),
              rgb(227, 203, 225)
            );
          }
          100% {
            border-image-source: linear-gradient(
              45deg,
              rgb(238, 57, 255),
              rgb(119, 6, 248),
              rgb(227, 203, 225),
              rgb(8, 4, 145),
              rgb(255, 0, 123)
            );
          }
        }

        @keyframes rotateLogo {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};
export default SignupForm;

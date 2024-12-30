import axios from "axios";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    isNITJSR: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
          className="flex w-full max-w-4xl flex-col lg:flex-row rounded-lg border-4 bg-black/70 shadow-lg"
          style={{
            borderImage:
              "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
            borderImageSlice: 1,
            animation: "borderAnimation 5s linear infinite",
          }}
        >
          {/* Logo Section */}
          <div className="flex w-full lg:w-1/3 items-center justify-center p-8">
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
          <div className="max-h-[65vh] w-full lg:w-2/3 overflow-auto p-8">
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
              </p>
            </motion.div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={handleSubmit}>
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

              {/* Checkbox for NIT JSR */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 10 * 0.1 }}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="nitjsr"
                    className="mr-2 rounded border-gray-600"
                    onChange={handleInputChange}
                    name="isNITJSR"
                    value={formData["isNITJSR"]}
                  />
                  <label
                    htmlFor="nitjsr"
                    className="text-sm font-medium text-white"
                  >
                    Student of NIT JSR?
                  </label>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-full overflow-hidden rounded-md border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-2 font-semibold text-white"
                style={{
                  backgroundClip: "padding-box",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70 blur-lg"
                  style={{
                    zIndex: -1,
                    animation: "glowAnimation 3s linear infinite",
                  }}
                ></div>
                {isSubmitting ? (
                  <p>Submitting</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <p>Register</p>
                )}
                {/* {error && <p>{error}</p>} */}
              </motion.button>
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

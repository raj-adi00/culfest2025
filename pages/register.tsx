import { motion } from "framer-motion";

export default function Register() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/reg_bg5.avif')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Registration Form Container */}
      <div className="relative flex items-center justify-center min-h-screen px-[26%] py-20">
        <div
          className="flex w-full max-w-4xl bg-black/70 rounded-lg shadow-lg border-4"
          style={{
            borderImage:
              "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
            borderImageSlice: 1,
            animation: "borderAnimation 5s linear infinite",
          }}
        >
          {/* Logo Section */}
          <div className="w-1/3 p-8 flex justify-center items-center">
            <motion.img
              src="/culfest_logo.png"
              alt="Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-auto h-40"
              style={{
                transformStyle: "preserve-3d", 
                animation: "rotateLogo 25s linear infinite", 
              }}
            />
          </div>

          {/* Form Section */}
          <div className="w-2/3 p-8 max-h-[65vh] overflow-auto">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl font-extrabold mb-2 text-white">SIGN UP</h1>
              <p className="text-lg text-gray-300 text-white">CULFEST'25 - ETHEREAL EUPHORIA</p>
            </motion.div>

            {/* Form Fields */}
            <form className="space-y-4">
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
                    type={field.toLowerCase().includes("password") ? "password" : "text"}
                    placeholder={field}
                    className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:border-transparent"
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
                  className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:border-transparent"
                  style={{
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
                    borderImageSlice: 1,
                    animation: "swirlBorderAnimation 3s linear infinite",
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </motion.div>

              {/* Year of Graduation Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 9 * 0.1 }}
              >
                <select
                  className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:border-transparent"
                  style={{
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(45deg, #ff006e, #7900ff, #00c9ff, #00ff96, #ff7e00)",
                    borderImageSlice: 1,
                    animation: "swirlBorderAnimation 3s linear infinite",
                  }}
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
                className="w-full relative z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-md overflow-hidden border-2 border-transparent"
                style={{
                  backgroundClip: "padding-box",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-md blur-lg opacity-70"
                  style={{
                    zIndex: -1,
                    animation: "glowAnimation 3s linear infinite",
                  }}
                ></div>
                Register
              </motion.button>
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
}







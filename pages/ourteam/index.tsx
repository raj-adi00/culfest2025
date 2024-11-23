import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";

// Team Members Data with Categories
const teamMembers = {
  convenors: [
    { name: "Ritik Kumar", post: "Cultural Secretary" },
    { name: "Samar Raghuvanshi", post: "Joint Cultural Secretary" },
  ],
  supercore: [
    { name: "Jagdeesh", post: "General Secretary" },
    { name: "Rishab", post: "Joint Secretary" },
    { name: "Isha", post: "Joint Secretary" },
  ],
  jointCore: [
    { name: "Ronit", post: "Executive Secretary" },
    { name: "Abhay", post: "Executive Secretary" },
  ],
  coordinators: [
    { name: "Aniket", post: "Planning and Development" },
    { name: "Aditya", post: "Finance Secretary" },
    { name: "Anurag", post: "Deputy Secretary" },
  ],
};

// Animation Variants
const fadeContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Staggering the child animations
      duration: 0.6,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// MenuBar Component
const MenuBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">Brand</div>

        {/* Menu Items */}
        <div className="relative lg:hidden">
          <button
            onClick={toggleMenu}
            className="rounded p-2 text-white hover:bg-gray-600"
          >
            Menu
          </button>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div className="absolute right-0 mt-2 rounded bg-gray-800 p-4 shadow-lg">
              <ul>
                <li>
                  <Link to="convenors" smooth duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="convenors" smooth duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="convenors" smooth duration={500}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="convenors" smooth duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-10 z-10 w-full items-center justify-center bg-transparent bg-opacity-60 p-4 text-white">
      <div className="flex justify-center space-x-8 text-center text-xl font-bold sm:text-2xl">
        <Link to="convenors" smooth duration={500}>
          <button className="transform transition-all duration-300 hover:scale-110 hover:text-yellow-400">
            Convenors
          </button>
        </Link>
        <Link to="supercore" smooth duration={500}>
          <button className="transform transition-all duration-300 hover:scale-110 hover:text-yellow-400">
            Supercore
          </button>
        </Link>
        <Link to="jointCore" smooth duration={500}>
          <button className="transform transition-all duration-300 hover:scale-110 hover:text-yellow-400">
            Joint Core
          </button>
        </Link>
        <Link to="coordinators" smooth duration={500}>
          <button className="transform transition-all duration-300 hover:scale-110 hover:text-yellow-400">
            Coordinators
          </button>
        </Link>
      </div>
    </nav>
  );
};

// Team Component
const Team: React.FC = () => {
  return (
    <div
      className="flex min-h-screen bg-gradient-to-b from-purple-800 via-pink-600 to-red-500 text-white"
      style={{
        backgroundImage: "url('/Background4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MenuBar />
      <Navbar />

      {/* Main Content */}
      <div className="container relative z-0 mx-auto px-4 py-32">
        <motion.h1
          className="mb-16 text-center font-AnotherFont text-3xl font-bold text-yellow-500 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.4,
          }}
        >
          Meet the Vibrant Team!
        </motion.h1>

        {/* Convenors Section */}
        <motion.div
          id="convenors"
          className="mb-16"
          variants={fadeContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="mb-8 text-center text-2xl font-bold text-yellow-300 sm:text-3xl">
            Convenors
          </motion.h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.convenors.map((member, index) => (
              <motion.div
                key={index}
                className="transform overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 shadow-lg transition-transform duration-500 hover:rotate-1 hover:shadow-2xl"
                variants={fadeItem}
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  transition: { type: "spring", stiffness: 120 },
                }}
              >
                {/* Image */}
                <div className="relative h-48 w-full bg-gradient-to-b from-white via-pink-200 to-purple-300">
                  <motion.img
                    src="/back6.png"
                    alt={member.name}
                    className="h-full w-full rounded-t-lg object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Team Member Info */}
                <div className="p-6 text-center">
                  <motion.h3
                    className="text-xl font-bold text-white drop-shadow-lg sm:text-2xl"
                    whileHover={{
                      scale: 1.2,
                      color: "#FFD700", // Gold on hover
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-200 sm:text-base"
                    whileHover={{
                      scale: 1.1,
                      color: "#fdfd96", // Light yellow
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.post}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add Supercore, Joint Core, and Coordinators sections similarly */}
      </div>
    </div>
  );
};

export default Team;

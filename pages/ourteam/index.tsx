import { motion } from "framer-motion";

// Team Members Data
const teamMembers = [
  { name: "Ritik Kumar", post: "Cultural Secretary" },
  { name: "Samar Raghuvanshi", post: "Joint Cultural Secretary" },
  { name: "Jagdeesh", post: "General Secretary" },
  { name: "Rishab", post: "Joint Secretary" },
  { name: "Isha", post: "Joint Secretary" },
  { name: "Ronit", post: "Executive Secretary" },
  { name: "Abhay", post: "Executive Secretary" },
  { name: "Aniket", post: "Planning and Development" },
  { name: "Aditya", post: "Finance Secretary" },
  { name: "Anurag", post: "Deputy Secretary" },
];

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

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-pink-600 to-red-500 text-white">
      <div className="container mx-auto py-12 px-4">
        {/* Page Heading */}
        <motion.h1
          className="text-center text-4xl md:text-5xl font-bold mb-16"
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

        {/* Team Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={fadeContainer}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:rotate-1 transition-transform duration-500"
              variants={fadeItem}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                transition: { type: "spring", stiffness: 120 },
              }}
            >
              {/* Image */}
              <div className="relative w-full h-48 bg-gradient-to-b from-white via-pink-200 to-purple-300">
                <motion.img
                  src="/back6.png"
                  alt={member.name}
                  className="w-full h-full object-cover rounded-t-lg"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Team Member Info */}
              <div className="p-6 text-center">
                <motion.h3
                  className="text-xl font-bold text-white drop-shadow-lg"
                  whileHover={{
                    scale: 1.2,
                    color: "#FFD700", // Gold on hover
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-gray-200 text-sm"
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
        </motion.div>
      </div>
    </div>
  );
};

export default Team;


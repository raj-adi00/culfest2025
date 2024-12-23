import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Head from "next/head";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  IconUsersGroup,
  IconCrown,
  IconUsers,
  IconChecklist,
  IconLayoutNavbarCollapse,
} from "@tabler/icons-react";
import { FloatingDockLink } from "@/components/ui/floating-dockLink";

// Navigation Links
const links = [
  {
    title: "Convenors",
    icon: <IconUsersGroup className="text-neutral-500 dark:text-neutral-300" />,
    href: "convenors",
  },
  {
    title: "Supercore",
    icon: <IconCrown className="text-neutral-500 dark:text-neutral-300" />,
    href: "supercore",
  },
  {
    title: "Joint Core",
    icon: <IconUsers className="text-neutral-500 dark:text-neutral-300" />,
    href: "jointCore",
  },
  {
    title: "Coordinators",
    icon: <IconChecklist className="text-neutral-500 dark:text-neutral-300" />,
    href: "coordinators",
  },
];

// Team Members Data
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
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Team Component
const Team: React.FC = () => {
  return (
    <>
      <Head>
        <title>OurTeam</title>
        <meta name="description" content="Explore OurTeam Page" />
        <link rel="icon" href="/culfest_logo.png" />
      </Head>

      <div
        className="flex min-h-screen flex-col bg-gradient-to-b from-purple-800 via-pink-600 to-red-500 text-white"
        style={{
          backgroundImage: "url('/Background4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navigation Menu */}
        <div className="py mt-16 flex w-full justify-center">
          <div className="hidden md:block">
            <FloatingDockLink
              desktopClassName="bg-transparent transition-all duration-300"
              mobileClassName="translate-y-20 bg-transparent transition-all duration-300"
              items={links}
            />
          </div>
          {/* Mobile Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-md dark:bg-neutral-800">
                  <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <FloatingDockLink
                  desktopClassName="bg-transparent transition-all duration-300"
                  mobileClassName="translate-y-20 bg-transparent transition-all duration-300"
                  items={links}
                  initial={true}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Main Content */}
        <div className="container relative z-0 mx-auto px-4 py-16">
          <motion.h1
            className="mb-16 text-center text-3xl font-bold text-yellow-500 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              type: "spring",
              bounce: 0.4,
            }}
          >
            Meet the Vibrant Team!
          </motion.h1>

          {/* Render Team Sections */}
          {Object.entries(teamMembers).map(([section, members]) => (
            <motion.div
              key={section}
              id={section}
              className="mb-16"
              variants={fadeContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="mb-8 text-center text-2xl font-bold capitalize text-yellow-300 sm:text-3xl">
                {section.replace(/([A-Z])/g, " $1").trim()}
              </motion.h2>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                {members.map((member, index) => (
                  <motion.div
                    key={index}
                    className="transform overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 shadow-lg transition-transform duration-100 hover:rotate-1 hover:shadow-2xl"
                    variants={fadeItem}
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      transition: { type: "spring", stiffness: 120 },
                    }}
                  >
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
                    <div className="p-6 text-center">
                      <motion.h3
                        className="text-xl font-bold text-white drop-shadow-lg"
                        whileHover={{
                          scale: 1.2,
                          color: "#FFD700",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-gray-200"
                        whileHover={{
                          scale: 1.1,
                          color: "#fdfd96",
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;

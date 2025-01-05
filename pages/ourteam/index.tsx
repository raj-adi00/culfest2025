import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import Head from "next/head";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  IconUsersGroup,
  IconCrown,
  IconUsers,
  IconChecklist,
  IconLayoutNavbarCollapse,
  IconDeviceLaptop,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { FloatingDockLink } from "@/components/ui/floating-dockLink";
import Link from "next/link";
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
    title: "Webteam",
    icon: (
      <IconDeviceLaptop className="text-neutral-500 dark:text-neutral-300" />
    ),
    href: "webteam",
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
  webteam: [
    {
      name: "Harshit Shrivastav",
      linkedin: "https://www.linkedin.com/in/harshit-shrivastav-8b513127a/",
      github: "https://github.com/harshitnitjsr",
      img:"/our team photos/harshitsriv.png",
    },
    {
      name: "Hitanshu Gavri",
      linkedin: "https://www.linkedin.com/in/hitanshu-gavri-ba164028a/",
      github: "https://github.com/hitanshu0729",
      img:"/our team photos/hitanshu.png",
      
    },
    {
      name: "Aditya Raj",
      linkedin: "https://www.linkedin.com/in/aditya-raj-338a8527a/",
      github: "https://github.com/raj-adi00",
      img:"/our team photos/adiraj.png",
          },
    {
      name: "Aprajita",
      linkedin: "https://www.linkedin.com/in/aprajita-thakur-1317a1223/",
      github: "https://github.com/aprajita-99",
      img:"/our team photos/aprajita.png",
    },
    {
      name: "Harsh Agarwal",
      linkedin: "https://www.linkedin.com/in/harsh-agarwal-2a9922283/",
      github: "https://github.com/harshagr0110",
      img:"/our team photos/harshag.png"
    },
    {
      name: "Sujal",
      linkedin: "https://www.linkedin.com/in/sujal-kumar-552a39237/",
      github: "https://github.com/SUJALKR18",
      img:"/our team photos/sujal.png",
    },
    {
      name: "Vishal Tiwari",
      linkedin: "https://www.linkedin.com/in/vishal-tiwari-1971-bharat01/",
      github: "https://github.com/vishal-tiwari-1971",
      img:"/our team photos/vishal.png",
    },
    {
      name: "Srijan Swapnil",
      linkedin: "https://www.linkedin.com/in/srijan-swapnil-a2910827b/",
      github: "https://github.com/srijanswapnil",
      img:"/our team photos/srijan.png",
    },
    {
      name: "Shubham Pandey",
      linkedin: "https://www.linkedin.com/in/shubham-pandey-a71951344/",
      github: "https://github.com/ShubhamPandey121",
      img:"/our team photos/shubham.png",
    },
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
        {" "}
        <Link href="/" className="absolute left-5 top-5">
          <img
            src="colorLogo.png"
            alt="CULFEST Logo"
            className="animate-bounce-slow h-auto w-20 rounded-lg bg-gray-800 bg-opacity-50 p-2 backdrop-blur-md md:w-28"
          />
        </Link>
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
            className="mb-10 text-center font-AnotherFont text-5xl text-yellow-500 sm:text-4xl md:text-7xl"
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
 
          {/* Render team Sections */}
          {Object.entries(teamMembers).map(([section, members]) => (
            <motion.div
              key={section}
              id={section}
              className="mb-18 "
              variants={fadeContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="mb-8 mt-7 text-center text-3xl font-bold capitalize text-yellow-300 sm:text-4xl">
                {section.replace(/([A-Z])/g, " $1").trim()}
              </motion.h2>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                {members.map((member: any, index) => (
                  <motion.div
                    key={index}
                    className="transform overflow-hidden w-11/12 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 shadow-lg transition-transform duration-100 hover:rotate-1 hover:shadow-2xl"
                    variants={fadeItem}
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      transition: { type: "spring", stiffness: 120 },
                    }}
                  >
                    <div className="relative h-60 w-full bg-gradient-to-b from-white via-pink-200 to-purple-300">
                      <motion.img
                        src={member.img || "/bg14.jpg"}
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
                      {section === "supercore" || section === "convenors" ? (
                        <motion.p
                          className="text-sm text-gray-200"
                          whileHover={{
                            scale: 1.1,
                            color: "#fdfd96",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {member?.post}
                        </motion.p>
                      ) : (
                        <div className="mt-2 flex items-center justify-center gap-4">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            <IconBrandLinkedin className="h-6 w-6 hover:text-blue-600" />
                          </a>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:underline"
                          >
                            <IconBrandGithub className="h-6 w-6 hover:text-gray-600" />
                          </a>
                        </div>
                      )}
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

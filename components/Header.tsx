import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconCalendarEvent,
  IconExchange,
  IconHome,
  IconInfoCircle,
  IconNewSection,
  IconTerminal2,
  IconUser, // Profile icon
  IconUserPlus, // Registration icon
} from "@tabler/icons-react";
import { BiNews } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/router";

export function FloatingDockDemo() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsAuthenticated(false);
          return;
        }

        const response = await axios.post(
          "https://serverculfest25.vercel.app/api/v1/user/verify",
          { token }
        );
        if (response.data.userId) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setIsAuthenticated(false);
      }
    };

    checkStatus();

    // Listen for localStorage changes
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const links = [
    {
      title: "Our Team",
      icon: (
        <IconTerminal2 className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/ourteam",
    },
    {
      title: isAuthenticated ? "Profile" : "Registration",
      icon: isAuthenticated ? (
        <IconUser className="text-neutral-500 dark:text-neutral-300" />
      ) : (
        <IconUserPlus className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: isAuthenticated ? "/profile" : "/register",
    },
    {
      title: "Events",
      icon: (
        <IconCalendarEvent className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Sponsors",
      icon: <IconExchange className="text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Media Coverage",
      icon: <BiNews className="text-neutral-500 dark:text-neutral-300" />,
      href: "/media",
    },
  ];

  return (
    <div className="m-4 h-[3rem] items-center justify-center">
      <FloatingDock
        desktopClassName="bg-transparent transition-all duration-300"
        mobileClassName="translate-y-20 bg-transparent transition-all duration-300"
        items={links}
      />
    </div>
  );
}

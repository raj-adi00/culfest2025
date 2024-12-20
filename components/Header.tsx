import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconCalendarEvent,
  IconExchange,
  IconInfoCircle,
  IconTerminal2,
  IconUser, // Profile icon
  IconUserPlus, // Registration icon
} from "@tabler/icons-react";
import { BiNews } from "react-icons/bi";
import { useSession } from "next-auth/react";

export function FloatingDockDemo() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

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
      href: isAuthenticated ? "/profile" : "/signup",
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

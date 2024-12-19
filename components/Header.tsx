import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconCalendarEvent,
  IconBrandFacebook,
  IconBrandInstagram,
  IconInfoCircle,
} from "@tabler/icons-react";
import { BiNews } from "react-icons/bi";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Our Team",
      icon: (
        <IconTerminal2 className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/ourteam",
    },
    {
      title: "Registration",
      icon: (
        <IconNewSection className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/register",
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
        desktopClassName="bg-transparent  transition-all duration-300"
        mobileClassName="translate-y-20 bg-transparent  transition-all duration-300"
        items={links}
      />
    </div>
  );
}

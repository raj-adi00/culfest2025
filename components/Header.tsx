import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconCalendarEvent,
  IconExchange,
  IconInfoCircle,
  IconLayoutNavbarCollapse,
  IconTerminal2,
  IconUser, // Profile icon
  IconUserPlus, // Registration icon
} from "@tabler/icons-react";
import { BiNews } from "react-icons/bi";
import { useSession } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
    <>
    <div className="m-4 h-[3rem] items-center justify-center hidden md:block">
    <FloatingDock
  desktopClassName="bg-transparent transition-all duration-300"
  mobileClassName="translate-y-20 bg-transparent transition-all duration-300"
  items={links}
    />
    </div>
    <div className="md:hidden">
    <Sheet>
  <SheetTrigger asChild>
    <button className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800 shadow-md">
      <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
    </button>
  </SheetTrigger>
  <SheetContent>
    <FloatingDock
      desktopClassName="bg-transparent transition-all duration-300"
      mobileClassName="translate-y-20 bg-transparent transition-all duration-300"
      items={links}
      initial={true}
    />
  </SheetContent>
</Sheet>
    </div>
    </>
  );
}

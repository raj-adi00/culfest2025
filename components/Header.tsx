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
  IconBrandTeams,
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
} from "@/components/ui/sheet";

export function FloatingDockDemo() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  const links = [
    {
      title: "Our Team",
      icon: (
        <IconBrandTeams className="text-neutral-500 dark:text-neutral-300" />
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
      href: "/",
      onclick: () => {
        // console.log("USR");
      },
    },
    {
      title: "Sponsors",
      icon: <IconExchange className="text-neutral-500 dark:text-neutral-300" />,
      href: "/sponsors",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/utk.nitjsr",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/culfest.nitjsr/",
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
      <div className="m-4 hidden h-[3rem] items-center justify-center md:block">
        <FloatingDock
          desktopClassName="bg-transparent transition-all duration-300"
          mobileClassName="translate-y-20 bg-transparent transition-all duration-300"
          items={links}
        />
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-md dark:bg-neutral-800">
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

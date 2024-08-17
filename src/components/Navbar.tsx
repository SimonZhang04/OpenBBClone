"use client";
// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FullLogo, Logo } from "./ui/Logo";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "OpenBB Terminal Pro",
    href: "/docs/primitives/alert-dialog",
    description: "Customize your work with your own data and AI",
  },
  {
    title: "OpenBB Terminal Pro",
    href: "/docs/primitives/alert-dialog",
    description: "Customize your work with your own data and AI",
  },
  {
    title: "OpenBB Terminal Pro",
    href: "/docs/primitives/alert-dialog",
    description: "Customize your work with your own data and AI",
  },
  {
    title: "OpenBB Terminal Pro",
    href: "/docs/primitives/alert-dialog",
    description: "Customize your work with your own data and AI",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-white shadow-md fixed w-full bg-background z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <FullLogo />
        <Logo />

        <div className="text-xl font-bold"></div>

        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="hover:bg-gray-700 px-3 py-2 rounded">Products</p>
          </Link>
          <Link href="/">
            <p className="hover:bg-gray-700 px-3 py-2 rounded">Solutions</p>
          </Link>
          <Link href="/">
            <p className="hover:bg-gray-700 px-3 py-2 rounded">Company</p>
          </Link>
          <Link href="/">
            <p className="hover:bg-gray-700 px-3 py-2 rounded">Blog</p>
          </Link>
          <Link href="/">
            <p className="hover:bg-gray-700 px-3 py-2 rounded">Pricing</p>
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800`}>
        <Link href="/">
          <p className="block px-4 py-2 text-white hover:bg-gray-700">Home</p>
        </Link>
        <Link href="/about">
          <p className="block px-4 py-2 text-white hover:bg-gray-700">About</p>
        </Link>
        <Link href="/services">
          <p className="block px-4 py-2 text-white hover:bg-gray-700">
            Services
          </p>
        </Link>
        <Link href="/contact">
          <p className="block px-4 py-2 text-white hover:bg-gray-700">
            Contact
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

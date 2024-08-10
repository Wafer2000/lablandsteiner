"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="flexBetween  padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={154} height={109} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-center text-[14px]"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={handleToggleMenu}
      />
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-white z-40 p-4"
          onClick={handleCloseMenu}
        >
          <button
            className="absolute top-0 right-0 p-4 text-gray-50 hover:text-gray-900"
            onClick={handleCloseMenu}
          >
            <button className="absolute top-0 right-0 pr-4 text-[#2e569b] text-[50px] font-bold">
              ×
            </button>
          </button>
          <ul className="flex flex-col gap-6 pt-20">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-[20px] text-[#2e569b] flexCenter cursor-pointer transition-all font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

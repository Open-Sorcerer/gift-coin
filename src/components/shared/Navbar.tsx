/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Connect from "./connect";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-20 backdrop-filter backdrop-blur-md mx-5 md:mx-16 lg:mx-20 md:px-10 my-3 border border-neutral-600 bg-[#141414]/40 rounded-[3rem]">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between px-4 py-2">
        <div className="flex">
          <Link
            href="/"
            className="flex flex-row gap-3 items-center text-2xl text-transparent bg-clip-text bg-white font-title font-semibold cursor-pointer whitespace-nowrap"
          >
            <Image src="/giftStore.png" alt="logo" width={40} height={40} className="w-6 h-6" />
            GiftWrap
          </Link>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg lg:hidden bg-gray-600/50 hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium font-primary flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 ${
                  pathname === "/"
                    ? "text-amber-400 hover:text-white"
                    : "text-gray-300 hover:text-amber-400"
                } rounded-lg hover:bg-neutral-900/40 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/create"
                className={`block py-2 px-3 ${
                  pathname === "/create"
                    ? "text-amber-400 hover:text-white"
                    : "text-gray-300 hover:text-amber-400"
                } rounded-lg hover:bg-neutral-900/40 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0`}
              >
                Gift Card
              </Link>
            </li>
            <li>
              <Link
                href="/redeem"
                className={`block py-2 px-3 ${
                  pathname === "/redeem"
                    ? "text-amber-400 hover:text-white"
                    : "text-gray-300 hover:text-amber-400"
                } rounded-lg hover:bg-neutral-900/40 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0`}
              >
                Redeem
              </Link>
            </li>
          </ul>
          <span className="flex md:hidden">
            <Connect />
          </span>
        </div>
        <span className="hidden md:flex">
          <Connect />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

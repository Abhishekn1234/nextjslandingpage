"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/Jadoo.png" alt="logo" width={90} height={30} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/destinations" className="hover:text-black">Destinations</Link>
          <Link href="/hotels" className="hover:text-black">Hotels</Link>
          <Link href="/flights" className="hover:text-black">Flights</Link>
          <Link href="/bookings" className="hover:text-black">Bookings</Link>
        </nav>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-sm text-gray-700 hover:text-black"
            >
              EN ▾
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border rounded-md shadow-md text-sm">
                <button className="block w-full px-3 py-2 hover:bg-gray-100">EN</button>
                <button className="block w-full px-3 py-2 hover:bg-gray-100">AR</button>
              </div>
            )}
          </div>

          <Link href="/login" className="text-sm text-gray-700 hover:text-black">
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-1.5 text-sm border border-gray-800 rounded-md hover:bg-black hover:text-white transition"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-700">
            <Link href="/destinations">Destinations</Link>
            <Link href="/hotels">Hotels</Link>
            <Link href="/flights">Flights</Link>
            <Link href="/bookings">Bookings</Link>

            <hr />

            <Link href="/login">Login</Link>
            <Link href="/signup" className="border px-3 py-2 rounded-md text-center">
              Sign up
            </Link>

            {/* Language */}
            <div className="flex gap-3">
              <button className="px-2 py-1 border rounded">EN</button>
              <button className="px-2 py-1 border rounded">AR</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
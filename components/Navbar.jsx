'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed w-full bg-dark z-50 px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Salik
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={`text-zinc-400 hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : ""}`}>
            Home
          </Link>
          <Link href="/about" className={`text-zinc-400 hover:text-primary transition-colors ${pathname === "/about" ? "text-primary" : ""}`}>
            About
          </Link>
          <Link href="/skills" className={`text-zinc-400 hover:text-primary transition-colors ${pathname === "/skills" ? "text-primary" : ""}`}>
            Skills
          </Link>
          <Link href="/portfolio" className={`text-zinc-400 hover:text-primary transition-colors ${pathname === "/portfolio" ? "text-primary" : ""}`}>
            Portfolio
          </Link>
          <Link href="/contact" className={`text-zinc-400 hover:text-primary transition-colors ${pathname === "/contact" ? "text-primary" : ""}`}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

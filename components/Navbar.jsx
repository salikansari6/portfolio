import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav((prevState) => !prevState);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      toggleNav();
    });
  }, []);

  return (
    <div className="flex p-3 justify-between fixed bg-white w-screen items-center">
      <div className="brand text-2xl lg:text-4xl font-bold justify-self-start">
        SALIK ANSARI
      </div>
      <button
        onClick={toggleNav}
        className="hamburger-menu-btn z-10 lg:hidden flex flex-col h-5 w-8 justify-between mr-1"
      >
        <div
          className={`h-0.5 ${
            nav
              ? "bg-white transform transition delay-300 transition-duration-500 transition-de rotate-45 translate-y-2"
              : "bg-black"
          }`}
        ></div>
        <div
          className={`h-0.5 ${
            nav
              ? "bg-white transform transition delay-300 transition-duration-500 transition-de -rotate-45"
              : "bg-black"
          }`}
        ></div>
        <div className={`h-0.5 ${nav ? "" : "bg-black"}`}></div>
      </button>
      <nav
        className={`fixed transition duration-500 inset-0 bg-opacity-90 bg-black text-white  w-screen transform ${
          nav ? "translate-x-0" : "translate-x-nav"
        }  lg:h-auto lg:translate-x-0 lg:w-1/4 lg:text-black lg:bg-transparent lg:relative`}
      >
        <ul className="flex h-1/2 items-center text-3xl flex-col lg:text-base lg:flex-row lg:h-auto justify-around">
          <li>
            <Link href="/">
              <a className={router.pathname === "/" && "active"}>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className={router.pathname === "/portfolio" && "active"}>
                PORTFOLIO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname === "/contact" && "active"}>
                CONTACT
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

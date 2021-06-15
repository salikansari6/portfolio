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
      setNav(false);
    });
  }, []);

  return (
    <div className="flex p-3 justify-between fixed bg-purple-50 shadow w-screen items-center z-10">
      <div className="brand text-2xl lg:text-4xl font-bold justify-self-start">
        SALIK ANSARI
      </div>
      <div
        onClick={toggleNav}
        className="hamburger-menu-btn z-10 lg:hidden flex flex-col h-5 w-8 justify-between mr-1"
      >
        <div
          className={`h-0.5 ${
            nav
              ? "bg-white transform transition delay-300 transition-duration-500  rotate-45 translate-y-2"
              : "bg-purple-800"
          }`}
        ></div>
        <div
          className={`h-0.5 ${
            nav
              ? "bg-white transform transition delay-300 transition-duration-500  -rotate-45"
              : "bg-purple-800"
          }`}
        ></div>
        <div className={`h-0.5 ${nav ? "" : "bg-purple-800"}`}></div>
      </div>
      <nav
        className={`fixed transition duration-500 inset-0 bg-opacity-90 bg-purple-800 text-white  w-screen transform ${
          nav ? "translate-x-0" : "translate-x-nav"
        }  lg:h-auto lg:translate-x-0 lg:w-1/4 lg:text-purple-800 lg:bg-transparent lg:relative`}
      >
        <ul className="flex h-1/2 items-center text-3xl flex-col lg:text-base lg:flex-row lg:h-auto justify-around">
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : undefined}>
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a
                className={
                  router.pathname === "/portfolio" ? "active" : undefined
                }
              >
                PORTFOLIO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={
                  router.pathname === "/contact" ? "active" : undefined
                }
              >
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

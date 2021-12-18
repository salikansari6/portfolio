import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
    <div className="flex justify-between fixed bg-purple-700 shadow w-screen items-center z-10 lg:font-bold">
      <Link href="/">
        <a>
          <div className="brand ml-5  relative h-16 w-36 lg:h-20 lg:w-52 justify-self-start lg:ml-10 ">
            <Image src="/images/Logo.svg" layout="fill" />
          </div>
        </a>
      </Link>
      <div
        onClick={toggleNav}
        className="hamburger-menu-btn z-10 lg:hidden flex flex-col h-5 w-8 justify-between mr-5"
      >
        <div
          className={`h-0.5 ${
            nav
              ? "bg-white transform transition delay-300 transition-duration-500  rotate-45 translate-y-2"
              : "bg-white"
          }`}
        ></div>
        <div
          className={`h-0.5 ${
            nav
              ? "bg-white transform transition delay-300 transition-duration-500  -rotate-45"
              : "bg-white"
          }`}
        ></div>
        <div className={`h-0.5 ${nav ? "" : "bg-white"}`}></div>
      </div>
      <nav
        className={`fixed transition duration-500 inset-0 bg-opacity-90 bg-purple-800 text-white  w-screen transform ${
          nav ? "translate-x-0" : "translate-x-nav"
        }  lg:h-auto lg:translate-x-0 lg:w-1/4 lg:text-purple-800 lg:bg-transparent lg:relative`}
      >
        <ul className="flex h-1/2 items-center text-3xl flex-col lg:text-base text-white lg:flex-row lg:h-auto justify-around">
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
          <li>
            <a href="https://drive.google.com/file/d/1Kb6JFXsgxPGar81Ug7pqSl8pgy5DE3yl/view?usp=sharing">
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

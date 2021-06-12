import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div className="flex justify-between p-3">
      <div className="brand text-4xl font-bold justify-self-start">
        SALIK ANSARI
      </div>
      <nav className="w-1/4">
        <ul className="flex justify-around">
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

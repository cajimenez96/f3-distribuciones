"use client"

// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../../../public/assets/f3-logo.jpg"

// const Navbar = () => {
//   return (
//     <nav className="w-full p-3 sticky top-0 z-50 flex justify-between md:justify-around items-center">
//       <Link href={"/"}>
//         <Image src={logo} alt="F3 Distribuciones" />
//       </Link>
//     </nav>
//   )
// }

// export default Navbar;


import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "./header.data";
import logo from "../../../public/assets/f3-logo.jpg"
import Image from "next/image";
import { Motion } from "../Motion";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  
  return (
    <Motion>
      <nav className="flex justify-between items-center w-full h-20 px-4 fixed nav">
        <div>
          <Link href={"#home"}>
            <Image src={logo} alt="F3 Distribuciones" />
          </Link>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, label, url: link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, label, url: link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </Motion>
  );
};

export default Navbar;
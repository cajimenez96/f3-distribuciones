"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { links } from "./header.data";
import logo from "../../../public/assets/f3-logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  
  return (
    <nav className="w-full py-2 px-4 md:px-60 mx-auto fixed top-0 flex flex-wrap items-center justify-between z-50 bg-blanco border-b-[3px] border-[#3434342c]">

      <Link href={"#home"} className="py-2 w-12 md:w-20">
        <Image src={logo} alt="F3 Distribuciones"/>
      </Link>

      <ul className="hidden md:flex">
        {links.map(({ id, label, url: link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase font-medium hover:text-celeste duration-200"
          >
            <Link href={link}>{label}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 pr-4 md:hidden"
      >
        {nav ? <FaTimes size={30} className="hover:text-naranja z-50 duration-200" /> : <FaBars size={30} className="hover:text-naranja duration-200" />}
      </div>

      <div
        className={`w-3/4 pb-5 z-20 md:hidden fixed top-20 ease-in-out text-end bg-blanco shadow-xl rounded-bl-[30px]
          ${nav ? 'right-0' : 'right-[-100%]' } duration-500`}
        style={{border: '0px 0px 0px 30px'}}
      >
        
        <ul>
          {links.map(({ id, label, url: link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase py-5 text-lg"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
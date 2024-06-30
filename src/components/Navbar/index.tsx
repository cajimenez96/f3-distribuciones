"use client"
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
      <nav className="w-full md:w-[68%] px-4 md:py-8 mx-auto sticky flex flex-wrap items-center justify-between">
        <div>
          <Link href={"#home"}>
            <Image src={logo} alt="F3 Distribuciones" width={100} />
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
          className="cursor-pointer pr-4 z-20 md:hidden"
        >
          {nav ? <FaTimes size={30} className="text-blanco" /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute z-10 top-0 left-0 w-full h-screen bg-azul text-naranja">
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
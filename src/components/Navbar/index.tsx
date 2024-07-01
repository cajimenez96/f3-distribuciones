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
      <nav className="md:w-[68%] px-4 md:py-8 mx-auto flex flex-wrap items-center justify-between z-50 sticky">
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
          className="cursor-pointer z-50 pr-4 md:hidden"
        >
          {nav ? <FaTimes size={30} className="text-naranja z-50" /> : <FaBars size={30} />}
        </div>

        <div
          className={`h-screen w-3/4 pb-5 z-20 top-0 md:hidden fixed ease-in-out text-end bg-azul text-naranja shadow-xl
            ${nav ? 'right-0' : 'right-[-100%]' } duration-500`}
        >
          
          <ul className=" mt-32">
            {links.map(({ id, label, url: link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-5 text-xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </Motion>
  );
};

export default Navbar;
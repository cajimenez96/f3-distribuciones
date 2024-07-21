import Image from "next/image";
import Reveal from "../Reveal/";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";
import logo from "../../../public/assets/f3-logo.png"
import { Motion } from "../Motion";
import Text from "../Text";

const Footer = () => {
  return (
    <div className="mt-10 w-full py-2 px-4 lg:px-60 mx-auto z-50 bg-blanco">
      <div className="pb-5">
        <Motion className="flex justify-between items-center">
          <div>
            <Link href="/" className="w-20">
              <Image src={logo} width={50} alt="F3 Distribuciones" />
            </Link>
            <Text className="text-sm whitespace-pre mt-2">
              {footerData.F3}
            </Text>
          </div>

         {footerSocialNetworks.map(({ id, icon, name, link }) => (
            <Link key={id} href={link} className="hover:text-celeste duration-200">
              <div className="flex flex-col items-center">
                {icon}
                {name}
              </div>
            </Link>
          ))}
        </Motion>
      </div>
      <div className="pt-2 w-full text-end border-t-[3px] border-[#3434342c]">
        <Text className="flex flex-wrap justify-center md:justify-end md:gap-2">
          Sitio diseñado y desarrollado por 
          <Link href={"/"} className="hover:text-celeste hover:underline duration-150"> CI - Marketing & Develop</Link>
        </Text>
      </div>

    </div>
  )
}

export default Footer;

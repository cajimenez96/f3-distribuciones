import Image from "next/image";
import Reveal from "../Reveal/";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";
import logo from "../../../public/assets/f3-logo.png"
import { Motion } from "../Motion";

const Footer = () => {
  return (
    <div className="w-[95%] md:w-[68%] p-6 mx-auto mt-10">
      <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center items-center mx-auto">
        <Motion>
          <Link href="/" className="w-20">
            <Image src={logo} alt="F3 Distribuciones" />
          </Link>
        </Motion>
        {footerData.map(({ id, title, links }) => (
          <div key={id} className="w-full flex justify-evenly">
            {links.map(({ id, name, link }) => (
              <Link key={id} href={link} className="font-medium text-azul text-lg hover:underline duration-150">
                <Reveal>
                  {name}
                </Reveal>
              </Link>
            ))}
          </div>
        ))}
      </div>

        <div className="border-azul border-[1px] my-7" />

        <div className="items-center justify-between md:flex">
        <div className="my-3">
          <Reveal>
            © 2024 F3 Distribuciones. Todos los derechos reservados.
          </Reveal>
        </div>
        <div className="flex gap-5">
          {footerSocialNetworks.map(({ id, icon, link }) => (
            <Link key={id} href={link} className="text-2xl">
              {icon}
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Footer;

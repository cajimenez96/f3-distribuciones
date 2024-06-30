import Image from "next/image";
import { Reveal } from "../Reveal/";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";
import logo from "../../../public/assets/f3-logo.jpg"
import { Motion } from "../Motion";
import Text from "../Text";

export function Footer() {
    return (
        <div className="max-w-5xl p-6 mx-auto mt-10 md:-mt-40">
            <div className="justify-between md:flex">
              <div>
                <Motion>
                  <Image src={logo} width={100} alt="F3 Distribuciones" />
                </Motion>
                <Reveal>
                  <Text className="mt-5 text-primaryDark max-w-[250px]">Una nueva forma de hacer pagos de forma sencilla</Text>
                </Reveal>
              </div>
                {footerData.map(({ id, title, links }) => (
                    <div key={id}>
                        <h4 className="mt-8 text-lg md:mt-0"><Reveal>{title}</Reveal></h4>
                        {links.map(({ id, name, link }) => (
                            <Link key={id} href={link} className="block mt-4 text-primaryDark hover:text-white">
                                <Reveal>
                                    {name}
                                </Reveal>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="border-[#3F3E45] border-[1px] my-7" />

            <div className="items-center justify-between md:flex">
                <div className="my-3">
                    <Reveal>
                        2023 Boras Bank. All Rights Reserved.
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
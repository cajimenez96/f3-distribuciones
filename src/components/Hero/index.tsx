import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";
import { Motion } from "../Motion";
import Reveal from "../Reveal";
import Text from "../Text";
import hero from "../../../public/assets/f3-hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-wrap justify-evenly gap-10">
      <Reveal className="mx-5 text-center md:text-start">
        <div className="">
          <Heading level={1} className="text-4xl font-black">
            F3 Distribuciones
          </Heading>

          <Text className="mt-2">
          Soluciones mayoristas y minoristas con la mejor calidad y precios.
          </Text>
        </div>
        <div className="flex w-1/2 my-12 mx-auto md:mx-0">
          <Button href="#contact">
            Quiero consultar
          </Button>
        </div>
      </Reveal>

      <Motion className="">
        <div className="w-[400px]">
          <Image src={hero} alt="F3 Distribuciones" />
        </div>
      </Motion>

    </div>
  )
}

export default Hero;

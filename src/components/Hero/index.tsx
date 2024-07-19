import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";
import { Motion } from "../Motion";
import Reveal from "../Reveal";
import Text from "../Text";
import imageHero from "../../../public/assets/f3-hero.png";
import { hero } from "./Hero.data";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-wrap justify-evenly gap-10" id="home">
      <Reveal className="mx-5 text-center md:text-start">
        <div>
          <Heading level={1} className="text-4xl font-black">
            {hero.title}
          </Heading>

          <Text className="mt-2">
            {hero.description}
          </Text>
        </div>
        <div className="flex w-1/2 my-12 mx-auto md:mx-0">
          <Button href="#contact">
            {hero.button}
          </Button>
        </div>
      </Reveal>

      <Motion>
        <div className="w-[400px]">
          <Image src={imageHero} alt={hero.title} />
        </div>
      </Motion>

    </div>
  )
}

export default Hero;

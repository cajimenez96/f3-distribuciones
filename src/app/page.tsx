import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";
import Image from "next/image";
import hero from "../../public/assets/hero.png";
import Button from "@/components/Button";
import { Motion } from "@/components/Motion";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main id="home">
      <Navbar />
      
      <Container className="w-full min-h-[70vh]">
        <div className="w-[68%] mx-auto mt-10 flex flex-wrap justify-between">
          <Reveal>
            <div>
              <Heading level={1} className="text-5xl font-semibold">
                F3 Distribuciones
              </Heading>

              <Text className="max-w-md mt-10 degradedBlue">
                Soluciones mayoristas y minoristas con la mejor calidad y precios.
              </Text>
            </div>
            <div className="flex justify-start w-1/2 mt-10">
              <Button>
                Quiero consultar
              </Button>
            </div>
          </Reveal>

          <Motion>
            <Image src={hero} alt="a" />
          </Motion>



        </div>
      </Container>

      <Footer/>
      
    </main>
  );
}

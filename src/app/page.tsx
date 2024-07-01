"use client"
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
import { Swiper, SwiperSlide } from "swiper/react";
import marolio from "../../public/assets/marcas/marolio.png";
import Input from "@/components/Input";
import Contact from "@/components/Contact";
import Link from "next/link";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main id="home" className="flex flex-col">
      <Navbar />
      
      {/* HERO */}
      <Container className="w-full min-h-[70vh]">
        <div className="w-[68%] mx-auto mt-10 flex flex-wrap justify-between">
          <Reveal>
            <div>
              <Heading level={1} className="text-3xl md:text-5xl font-semibold">
                F3 Distribuciones
              </Heading>

              <Text className="max-w-md mt-10 degradedBlue">
                Soluciones mayoristas y minoristas con la mejor calidad y precios.
              </Text>
            </div>
            <div className="flex justify-start w-1/2 mt-10">
              <Link href="#contact">
                <Button>
                  Quiero consultar
                </Button>
              </Link>
            </div>
          </Reveal>

          <Motion>
            <Image src={hero} alt="a" />
          </Motion>

        </div>
      </Container>


      {/* MARCAS */}
      <Container className="w-full flex flex-col items-center" id="marcas">
        <Reveal>
          <div>
              <div className="text-center">
                <Heading level={3} className="text-2xl md:text-4xl">Nuestras marcas</Heading>
                <div className="mt-5 text-center">
                  <Text className="md:max-w-xl mx-auto">
                    Trabajamos con las marcas líderes del mercado para ofrecerte productos de la más alta calidad. Nuestra selección incluye una variedad de opciones para satisfacer todas tus necesidades alimenticias, tanto al por mayor como al por menor.
                  </Text>
                </div>
              </div>
          </div>
        </Reveal>

        <div className="w-full">
          <Carousel />
        </div>
        
      </Container>

      {/* CONTACT */}
      <Container className="mx-auto mt-20" id="contact">
        <Contact />
      </Container>
      <Footer/>
      
    </main>
  );
}

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
import Reveal from "@/components/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import marolio from "../../public/assets/marcas/marolio.png";
import Input from "@/components/Input";
import Contact from "@/components/Contact";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main id="home">
      <Navbar />

      <div className="mt-32 md:mt-36">
      
        {/* HERO */}
        <Hero />

        <Divider />

        <Container className="w-full">
          <div className="w-[95%] md:w-[68%] mx-auto">
            <div>
              <Heading level={3} className="text-2xl md:text-4xl font-semibold">
                ¿Quiénes somos?
              </Heading>
              <div>

              </div>
            </div>
          </div>

        </Container>


        <Divider />



        {/* MARCAS */}
        <Container className="w-full flex flex-col items-center mb-20" id="marcas">
          <div>
            <Reveal>
              <div className="mx-5 md:mx-auto">
                <div className="">
                  <Heading level={3} className="text-2xl md:text-4xl font-semibold md:text-center">Nuestras marcas</Heading>
                  <div className="mt-5">
                    <Text className="md:max-w-xl mx-auto">
                      Trabajamos con las marcas líderes del mercado para ofrecerte productos de la más alta calidad. Nuestra selección incluye una variedad de opciones para satisfacer todas tus necesidades alimenticias, tanto al por mayor como al por menor.
                    </Text>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="w-full">
            <Motion>
              <Carousel />
            </Motion>
          </div>
          
        </Container>

        <Divider />

        <Contact />
      </div>

      <Divider className="mb-0" />

      <Footer/>
      
    </main>
  );
}

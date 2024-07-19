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
import About from "@/components/About";
import Brand from "@/components/Brand";

export default function Home() {
  return (
    <main id="home">
      <Navbar />

      <div className="mt-32 md:mt-44">
      
        <Hero />
        <Divider />

        <About />
        <Divider />

        <Brand />
        <Divider />

        <Contact />
      </div>

      <Divider className="mb-0" />

      <Footer/>
      
    </main>
  );
}

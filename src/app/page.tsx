"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brand from "@/components/Brand";

export default function Home() {
  return (
    <main id="home">
      <Navbar />
      <div className="mt-32 md:mt-44 px-5">
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

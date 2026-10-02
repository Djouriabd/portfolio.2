import Marquee from "@/components/ui/Marquee";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Navbar from "@/components/sections/Navbar";
import Skills from "@/components/sections/Skills";
import SoftSkills from "@/components/sections/SoftSkills";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee text="About me" />
        <About />
        <Journey />
        <Marquee text="Skills" tilt={-1.5} reverse />
        <Skills />
        <SoftSkills />
        <Works />
        <Marquee text="Get in touch" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

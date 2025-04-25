import About from "@/components/about";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <Cta />
      <About />
      <Footer />
    </ReactLenis>
  )
}

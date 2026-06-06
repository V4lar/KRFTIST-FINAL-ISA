import Hero from "@/components/krftist/Hero";
import Marquee from "@/components/krftist/Marquee";
import About from "@/components/krftist/About";
import Services from "@/components/krftist/Services";
import SelectedWork from "@/components/krftist/SelectedWork";
import Process from "@/components/krftist/Process";
import Contact from "@/components/krftist/Contact";

export default function Home() {
  return (
    <main data-testid="home-page" className="relative">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <SelectedWork />
      <Process />
      <Contact />
    </main>
  );
}

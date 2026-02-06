import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AppsCarousel from "@/components/AppsCarousel";
import EcosystemPreview from "@/components/EcosystemPreview";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Apps", href: "#apps" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function HomePage() {
  return (
    <>
      <Header navItems={navItems} showThemeToggle />
      <Hero />
      <About />
      <AppsCarousel />
      <EcosystemPreview />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

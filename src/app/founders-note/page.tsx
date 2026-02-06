import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AppsCarousel from "@/components/AppsCarousel";
import EcosystemPreview from "@/components/EcosystemPreview";
import FounderNote from "@/components/FounderNote";
import Footer from "@/components/Footer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Apps", href: "#apps" },
  { label: "Founder's Note", href: "#founder" },
];

export default function FoundersNotePage() {
  return (
    <>
      <Header navItems={navItems} />
      <Hero />
      <About />
      <AppsCarousel showNewsTale />
      <EcosystemPreview />
      <FounderNote />
      <Footer showSocialLinks />
    </>
  );
}

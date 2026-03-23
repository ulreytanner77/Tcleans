import { siteContent } from "@/content/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Offerings from "@/components/Offerings";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  const { sections } = siteContent;

  return (
    <>
      <Header />
      <main>
        <Hero />
        {sections.intro && <Intro />}
        {sections.offerings && <Offerings />}
        {sections.highlights && <Highlights />}
        {sections.gallery && <Gallery />}
        {sections.visit && <Visit />}
      </main>
      <Footer />
    </>
  );
}

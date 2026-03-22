import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedMenu from "@/components/FeaturedMenu";
import WeeklyEvents from "@/components/WeeklyEvents";
import Gallery from "@/components/Gallery";
import HoursLocation from "@/components/HoursLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <WeeklyEvents />
        <Gallery />
        <HoursLocation />
      </main>
      <Footer />
    </>
  );
}

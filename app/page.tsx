import Hero from "@/components/Hero";
import SwooshDivider from "@/components/SwooshDivider";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreaPreview from "@/components/ServiceAreaPreview";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <SwooshDivider fromColor="var(--color-brand-plum)" toColor="#ffffff" />
      <ServicesOverview />
      <SwooshDivider fromColor="#ffffff" toColor="var(--color-brand-plum)" flip />
      <WhyChooseUs />
      <SwooshDivider fromColor="var(--color-brand-plum)" toColor="#ffffff" />
      <ServiceAreaPreview />
      <Testimonials />
      <Gallery />
      <SwooshDivider fromColor="#ffffff" toColor="var(--color-brand-plum)" flip />
      <QuoteCTA />
    </>
  );
}

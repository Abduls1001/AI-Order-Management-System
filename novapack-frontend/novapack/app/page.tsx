import { Hero } from "@/components/home/Hero";
import { CompanyIntro, IndustriesServed, WhyChoose, StatsBar } from "@/components/home/Sections";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoryGrid, CTASection } from "@/components/home/CategoryAndCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <FeaturedProducts />
      <CategoryGrid />
      <IndustriesServed />
      <WhyChoose />
      <StatsBar />
      <CTASection />
    </>
  );
}

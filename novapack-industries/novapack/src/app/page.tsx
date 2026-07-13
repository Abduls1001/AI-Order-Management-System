import { Hero } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { ProductCategories } from "@/components/home/product-categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { IndustriesServed } from "@/components/home/industries-served";
import { WhyChoose } from "@/components/home/why-choose";
import { BusinessStats } from "@/components/home/business-stats";
import { CallToAction } from "@/components/home/call-to-action";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ProductCategories />
      <FeaturedProducts />
      <IndustriesServed />
      <WhyChoose />
      <BusinessStats />
      <CallToAction />
    </>
  );
}

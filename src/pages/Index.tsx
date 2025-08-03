import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CountryShowcase from "@/components/CountryShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />
      <CountryShowcase />
    </div>
  );
};

export default Index;

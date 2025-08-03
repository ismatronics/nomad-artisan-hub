import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Discover Authentic
          <span className="block text-primary">Artisan Treasures</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Connect with master craftspeople from Turkey, Spain, India, and Morocco. 
          Each piece tells a story of tradition, culture, and exceptional skill.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-3">
            Shop Collections
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            Meet Our Artisans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
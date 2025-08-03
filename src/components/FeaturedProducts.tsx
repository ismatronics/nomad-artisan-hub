import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Handwoven Turkish Kilim",
      price: "$299",
      country: "Turkey",
      image: "/placeholder.svg",
      artisan: "Ayşe Demir"
    },
    {
      id: 2,
      name: "Spanish Leather Handbag",
      price: "$189",
      country: "Spain",
      image: "/placeholder.svg",
      artisan: "Carlos Mendez"
    },
    {
      id: 3,
      name: "Indian Block Print Scarf",
      price: "$45",
      country: "India",
      image: "/placeholder.svg",
      artisan: "Priya Sharma"
    },
    {
      id: 4,
      name: "Moroccan Ceramic Bowl",
      price: "$89",
      country: "Morocco",
      image: "/placeholder.svg",
      artisan: "Hassan Al-Fassi"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Artisan Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover unique handcrafted items from master artisans across four countries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {product.country}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  by {product.artisan}
                </p>
                <p className="text-xl font-bold text-primary">
                  {product.price}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
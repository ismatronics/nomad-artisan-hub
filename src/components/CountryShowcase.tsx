import { Card, CardContent } from "@/components/ui/card";

const CountryShowcase = () => {
  const countries = [
    {
      name: "Turkey",
      specialties: "Ceramics, Textiles, Carpets",
      description: "Rich Ottoman heritage meets contemporary craftsmanship",
      flag: "🇹🇷"
    },
    {
      name: "Spain",
      specialties: "Leather Goods, Pottery, Jewelry",
      description: "Andalusian traditions and modern Mediterranean style",
      flag: "🇪🇸"
    },
    {
      name: "India",
      specialties: "Textiles, Metalwork, Woodcrafts",
      description: "Ancient techniques passed through generations",
      flag: "🇮🇳"
    },
    {
      name: "Morocco",
      specialties: "Rugs, Ceramics, Leatherwork",
      description: "Berber and Arabic influences in every piece",
      flag: "🇲🇦"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Four Countries, Endless Traditions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each region brings unique techniques and cultural heritage to our curated collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Card key={country.name} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {country.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {country.specialties}
                </p>
                <p className="text-sm text-muted-foreground">
                  {country.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryShowcase;
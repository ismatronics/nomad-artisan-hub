const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Nomad Artisan Hub</h1>
        <p className="text-xl text-muted-foreground">Connecting artisans across cultures</p>
        <div className="mt-8 p-4 bg-card rounded-lg shadow-sm">
          <p className="text-card-foreground">Platform loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

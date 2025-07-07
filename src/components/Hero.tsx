import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-medium mb-8">
          <span className="mr-2">🚀</span>
          Revolutionary Contract Technology
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
          The Future of{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Digital Contracts
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Experience lightning-fast, blockchain-secured contract signing that's trusted by
          thousands of businesses worldwide. Built on Cardano's secure blockchain technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Start Free Trial →
          </Button>
          <Button variant="outline" size="lg">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
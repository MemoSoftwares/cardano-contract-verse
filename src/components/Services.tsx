import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Create Agreements",
      description: "Design custom contracts with our intuitive builder or choose from professional templates",
      features: ["Smart contract templates", "Custom clause builder", "Legal compliance checks", "Multi-language support"]
    },
    {
      title: "Multi-Party Signing",
      description: "Coordinate signatures from multiple parties with wallet-based authentication",
      features: ["Cardano wallet integration", "Sequential signing workflows", "Parallel signature collection", "Identity verification"]
    },
    {
      title: "Real-Time Tracking",
      description: "Monitor all signed parties and contract status with comprehensive dashboard",
      features: ["Live signature tracking", "Party status overview", "Completion notifications", "Audit trail access"]
    },
    {
      title: "AI-Powered Support",
      description: "Get instant help with our intelligent chatbots for contract and Cardano support",
      features: ["Contract information bot", "Cardano blockchain support", "Legal guidance assistant", "24/7 availability"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive contract management solutions powered by Cardano blockchain
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
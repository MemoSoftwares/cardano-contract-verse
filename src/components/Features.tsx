import { Shield, Users, Globe, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Your contracts are secured by Cardano blockchain technology, ensuring immutable and tamper-proof agreements.",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Sign and execute contracts in seconds, not days. Our streamlined process eliminates paperwork delays.",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "Multi-Party Signing",
      description: "Seamlessly coordinate signatures from multiple parties with real-time notifications and tracking.",
      color: "bg-green-500"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Sign contracts from anywhere in the world, on any device. No geographical limitations.",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor contract status, signature progress, and receive instant notifications for every update.",
      color: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Smart Templates",
      description: "Choose from our library of legal templates or create custom contracts with AI assistance.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to streamline your contract workflow and secure your
            agreements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
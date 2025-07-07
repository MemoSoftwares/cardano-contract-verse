import { Users, Shield, Globe } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Users,
      title: "Business Agreements",
      description: "Partnership agreements, service contracts, and vendor agreements",
      applications: ["Partnership contracts", "Service agreements", "Vendor contracts", "Non-compete agreements"]
    },
    {
      icon: Users,
      title: "Employment Contracts",
      description: "Hire new employees with secure, legally binding employment agreements",
      applications: ["Employment agreements", "Contractor agreements", "Freelancer contracts", "Consulting agreements"]
    },
    {
      icon: Shield,
      title: "NDAs & Confidentiality",
      description: "Protect sensitive information with non-disclosure agreements",
      applications: ["Non-disclosure agreements", "Confidentiality contracts", "Data protection agreements", "Trade secret protection"]
    },
    {
      icon: Globe,
      title: "Real Estate",
      description: "Property agreements, lease contracts, and purchase agreements",
      applications: ["Property sales", "Lease agreements", "Rental contracts", "Property management"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perfect for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprises, ContractVerse adapts to your unique contract needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {industry.applications.map((app, appIndex) => (
                  <div
                    key={appIndex}
                    className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
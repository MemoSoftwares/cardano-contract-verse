import { FileText, Users, Activity, MessageSquare, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Create Contracts",
      description: "AI generates legal contracts instantly",
      color: "blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Multi-Party Signing",
      description: "Secure wallet-based signatures",
      color: "emerald-600", 
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      icon: Activity,
      title: "Real-Time Status",
      description: "Live contract tracking & updates",
      color: "slate-600",
      bgColor: "bg-slate-50", 
      textColor: "text-slate-600"
    },
    {
      icon: MessageSquare,
      title: "AI Cardano Chat",
      description: "Natural language blockchain queries",
      color: "blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Sparkles,
      title: "Legal Templates",
      description: "Expert-validated contract templates",
      color: "emerald-600",
      bgColor: "bg-emerald-50", 
      textColor: "text-emerald-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Blockchain Legal Platform
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Simple. Secure.{" "}
            <span className="text-blue-600">
              Smart.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Create, sign, and manage legal contracts with AI assistance and blockchain security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 ${feature.textColor}`} />
                </div>
                
                <h3 className={`text-2xl font-bold text-foreground mb-4 group-hover:${feature.textColor} transition-colors duration-300`}>
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <div className={`mt-6 w-12 h-1 ${feature.textColor.replace('text-', 'bg-')} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-slate-50 px-8 py-4 rounded-full border">
            <Activity className="w-4 h-4 text-blue-600" />
            <span className="font-medium">Powered by Cardano • Secured with AIKEN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
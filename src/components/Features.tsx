import { FileText, Users, Activity, MessageSquare, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "AI-Powered Contract Creation",
      description: "Our advanced AI legal agent drafts legally compliant contracts tailored to Sri Lankan standards. Simply describe your needs, and watch as intelligent automation creates professional agreements in minutes.",
      highlight: "AI Legal Agent",
      stats: "99.8% Legal Compliance",
      gradient: "from-blue-500/20 to-indigo-600/20"
    },
    {
      icon: Users,
      title: "Multi-Party Wallet Signing",
      description: "Seamlessly coordinate signatures from multiple parties using verified Cardano wallet addresses. Each signer receives secure email invitations and must verify wallet ownership through blockchain transactions.",
      highlight: "Blockchain Verified",
      stats: "Zero Fraud Risk",
      gradient: "from-emerald-500/20 to-teal-600/20"
    },
    {
      icon: Activity,
      title: "Real-Time Contract Status",
      description: "Monitor your contract's journey from draft to execution with live blockchain tracking. Receive instant notifications for every signature, status change, and contract milestone through our interactive dashboard.",
      highlight: "Live Tracking",
      stats: "Instant Updates",
      gradient: "from-orange-500/20 to-red-600/20"
    },
    {
      icon: MessageSquare,
      title: "Cardano AI Chat Assistant",
      description: "World's first natural language AI assistant for Cardano blockchain queries. Get instant insights about wallet addresses, transaction histories, contract statuses, and blockchain data through conversational AI.",
      highlight: "Global First",
      stats: "Natural Language",
      gradient: "from-purple-500/20 to-pink-600/20"
    },
    {
      icon: Sparkles,
      title: "Smart Legal Templates",
      description: "Access pre-built legal templates validated by legal experts, or let our AI create custom contracts. Each template ensures compliance with local regulations while maintaining blockchain compatibility.",
      highlight: "Expert Validated",
      stats: "50+ Templates",
      gradient: "from-cyan-500/20 to-blue-600/20"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Legal Technology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transform Your Legal Workflow with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blockchain Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the future of contract management with AI-powered legal assistance, 
            blockchain security, and seamless multi-party collaboration—all on the Cardano network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-card p-8 rounded-3xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {feature.highlight}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 font-semibold">
                      {feature.stats}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(2).map((feature, index) => (
            <div
              key={index + 2}
              className="group relative bg-gradient-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-border/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-xs font-semibold text-accent">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 px-6 py-3 rounded-full">
            <Activity className="w-4 h-4 text-accent" />
            <span>Powered by Cardano blockchain • Secured by AIKEN smart contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
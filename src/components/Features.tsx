import { FileText, Users, Activity, MessageSquare, Sparkles, ArrowRight, Check, Zap, Shield } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      step: "01",
      icon: FileText,
      title: "AI Contract Creation",
      description: "Describe your needs and our AI generates legally compliant contracts instantly",
      details: ["Smart legal templates", "AI-powered drafting", "Compliance validation"],
      color: "blue",
      delay: "0ms"
    },
    {
      step: "02", 
      icon: Users,
      title: "Wallet-Based Signing",
      description: "Multiple parties sign securely using their Cardano wallet addresses",
      details: ["Multi-party coordination", "Wallet verification", "Email notifications"],
      color: "emerald",
      delay: "200ms"
    },
    {
      step: "03",
      icon: Activity,
      title: "Real-Time Tracking",
      description: "Monitor contract status with live blockchain updates and notifications",
      details: ["Live status updates", "Progress tracking", "Instant notifications"],
      color: "slate",
      delay: "400ms"
    }
  ];

  const additionalFeatures = [
    {
      icon: MessageSquare,
      title: "AI Cardano Assistant",
      description: "Chat with blockchain data",
      stat: "First Globally",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable contract storage",
      stat: "100% Secure",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Lightning-fast execution",
      stat: "< 5 Seconds",
      color: "slate"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background via-blue-50/30 to-emerald-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full text-sm font-semibold mb-8 animate-pulse-slow shadow-lg">
            <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
            Revolutionary Blockchain Legal Platform
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience seamless contract management in three simple steps
          </p>
        </div>

        {/* Main Workflow Features */}
        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-emerald-600 to-slate-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: feature.delay }}
              >
                {/* Step Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r ${
                    feature.color === 'blue' ? 'from-blue-600 to-blue-700' :
                    feature.color === 'emerald' ? 'from-emerald-600 to-emerald-700' :
                    'from-slate-600 to-slate-700'
                  } rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
                    feature.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-100' :
                    feature.color === 'emerald' ? 'bg-emerald-50 group-hover:bg-emerald-100' :
                    'bg-slate-50 group-hover:bg-slate-100'
                  }`}>
                    <feature.icon className={`w-10 h-10 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'emerald' ? 'text-emerald-600' :
                      'text-slate-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 mr-3 ${
                          feature.color === 'blue' ? 'text-blue-600' :
                          feature.color === 'emerald' ? 'text-emerald-600' :
                          'text-slate-600'
                        }`} />
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className={`mt-6 h-2 bg-gray-100 rounded-full overflow-hidden`}>
                    <div className={`h-full bg-gradient-to-r ${
                      feature.color === 'blue' ? 'from-blue-600 to-blue-700' :
                      feature.color === 'emerald' ? 'from-emerald-600 to-emerald-700' :
                      'from-slate-600 to-slate-700'
                    } rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}></div>
                  </div>
                </div>

                {/* Arrow */}
                {index < mainFeatures.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Advanced Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  feature.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-100' :
                  feature.color === 'emerald' ? 'bg-emerald-50 group-hover:bg-emerald-100' :
                  'bg-slate-50 group-hover:bg-slate-100'
                } transition-colors duration-300`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'emerald' ? 'text-emerald-600' :
                    'text-slate-600'
                  }`} />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2 text-center">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-center mb-4 text-sm">
                  {feature.description}
                </p>
                <div className={`text-center text-xs font-bold px-3 py-1 rounded-full ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  {feature.stat}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Secured by Cardano Blockchain</span>
            <Zap className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
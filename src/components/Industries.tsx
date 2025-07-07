import { Scale, Home, Building2, ArrowRight, Check } from "lucide-react";
import civilLawImage from "@/assets/civil-law.jpg";
import propertyLawImage from "@/assets/property-law.jpg";
import corporateLawImage from "@/assets/corporate-law.jpg";

const Industries = () => {
  const industries = [
    {
      icon: Scale,
      title: "Civil Law",
      description: "Personal disputes, family matters, and individual legal agreements",
      image: civilLawImage,
      applications: ["Divorce agreements", "Personal injury claims", "Property disputes", "Family contracts"],
      color: "blue",
      bgGradient: "from-blue-500/10 to-blue-600/20"
    },
    {
      icon: Home,
      title: "Property Law", 
      description: "Real estate transactions, property management, and land agreements",
      image: propertyLawImage,
      applications: ["Property sales", "Lease agreements", "Rental contracts", "Property management"],
      color: "emerald",
      bgGradient: "from-emerald-500/10 to-emerald-600/20"
    },
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Business contracts, partnerships, and commercial legal documents",
      image: corporateLawImage,
      applications: ["Partnership agreements", "Business contracts", "Commercial leases", "Corporate governance"],
      color: "slate",
      bgGradient: "from-slate-500/10 to-slate-600/20"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-slate-600 text-white rounded-full text-sm font-semibold mb-8">
            <Scale className="w-5 h-5 mr-2" />
            Legal Domains We Serve
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perfect for Every{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Legal Domain
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Specialized contract solutions for Civil, Property, and Corporate legal matters
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className={`absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 ${
                  industry.color === 'blue' ? 'bg-blue-600/90' :
                  industry.color === 'emerald' ? 'bg-emerald-600/90' :
                  'bg-slate-600/90'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 p-8">
                <h3 className={`text-2xl font-bold mb-4 group-hover:${
                  industry.color === 'blue' ? 'text-blue-600' :
                  industry.color === 'emerald' ? 'text-emerald-600' :
                  'text-slate-600'
                } transition-colors duration-300`}>
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Applications List */}
                <div className="space-y-3 mb-6">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center text-sm">
                      <Check className={`w-4 h-4 mr-3 ${
                        industry.color === 'blue' ? 'text-blue-600' :
                        industry.color === 'emerald' ? 'text-emerald-600' :
                        'text-slate-600'
                      }`} />
                      <span className="text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className={`inline-flex items-center text-sm font-semibold ${
                  industry.color === 'blue' ? 'text-blue-600' :
                  industry.color === 'emerald' ? 'text-emerald-600' :
                  'text-slate-600'
                } group-hover:gap-3 gap-2 transition-all duration-300 cursor-pointer`}>
                  <span>Explore {industry.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${
                    industry.color === 'blue' ? 'from-blue-600 to-blue-700' :
                    industry.color === 'emerald' ? 'from-emerald-600 to-emerald-700' :
                    'from-slate-600 to-slate-700'
                  } rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Civil Cases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1200+</div>
              <div className="text-sm text-muted-foreground">Property Deals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-600 mb-2">800+</div>
              <div className="text-sm text-muted-foreground">Corporate Contracts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
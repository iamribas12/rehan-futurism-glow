import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Globe, 
  Code, 
  Gamepad2, 
  ArrowRight,
  Sparkles,
  Zap,
  Cpu
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Real Estate & Property Dealing",
      description: "Comprehensive real estate solutions including property management, buying, selling, and investment consultation with cutting-edge digital tools.",
      highlights: [
        "Property Portfolio Management",
        "Investment Consultation", 
        "Digital Property Listings",
        "Market Analysis & Valuation"
      ],
      buttonText: "Explore Real Estate",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Globe,
      title: "Import & Export Services",
      description: "Global trade solutions with seamless import/export operations, customs clearance, and international logistics management.",
      highlights: [
        "International Trade Management",
        "Customs & Documentation",
        "Logistics Coordination", 
        "Supply Chain Optimization"
      ],
      buttonText: "Global Trade Solutions",
      gradient: "from-accent to-neon-blue"
    },
    {
      icon: Code,
      title: "Software & Application Development",
      description: "Custom software solutions with 250+ applications successfully deployed across Education, Corporate, Banking, Mining, and Big Industry sectors.",
      highlights: [
        "Custom Software Development",
        "Enterprise Applications",
        "Mobile App Development",
        "250+ Deployed Applications"
      ],
      buttonText: "View Applications",
      gradient: "from-neon-green to-accent"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "We design and develop engaging, high-performance games for PC, Mobile, and Console platforms. From casual mobile apps to immersive 3D experiences, we bring your gaming vision to life.",
      highlights: [
        "PC, Mobile & Console Games",
        "2D & 3D Game Design", 
        "Unity & Unreal Engine Development",
        "Multiplayer & Cloud Integration"
      ],
      buttonText: "Explore Gaming",
      gradient: "from-primary to-accent",
      isNew: true
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary w-6 h-6" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Services</span>
            <Sparkles className="text-primary w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Premium Technology Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology services designed to transform your business with cutting-edge solutions
            across multiple industries and platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card hover-lift relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* New Badge */}
              {service.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-full text-xs font-bold text-primary-foreground animate-glow-pulse">
                    NEW
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-secondary/50 group-hover:bg-secondary/70 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group/btn transition-all duration-300"
                >
                  <span>{service.buttonText}</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="text-accent w-6 h-6" />
              <h3 className="text-xl font-bold gradient-text">Ready to Transform Your Business?</h3>
              <Cpu className="text-primary w-6 h-6" />
            </div>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our premium technology solutions can accelerate your growth
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 py-3 rounded-xl gold-glow">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
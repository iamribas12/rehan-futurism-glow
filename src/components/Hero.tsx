import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-primary w-6 h-6 animate-glow-pulse" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Premium Technology Solutions</span>
            <Sparkles className="text-primary w-6 h-6 animate-glow-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Rehan Group</span>
            <br />
            <span className="neon-text">International</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Leading provider of cutting-edge technology solutions across Real Estate, Import/Export, 
            Software Development, and Gaming. Transforming businesses across India with innovation and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-3 rounded-xl gold-glow smooth-transition group">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-xl neon-glow smooth-transition">
              View Applications
            </Button>
          </div>

          {/* Special Offer Banner */}
          <div className="glass-card max-w-2xl mx-auto border border-primary/30 animate-glow-pulse">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold gradient-text">
                🎉 Flat 50% Discount on First 2 Orders – Limited Time Offer!
              </span>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
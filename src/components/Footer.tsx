import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import rehanLogo from "@/assets/comp_logo.png.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-card/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src={rehanLogo} 
                alt="Rehan Group International Logo" 
                className="h-12 w-12 hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">
                  Rehan Group International
                </h3>
                <p className="text-sm text-muted-foreground">Premium Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Leading provider of cutting-edge technology solutions across Real Estate, 
              Import/Export, Software Development, and Gaming industries. Transforming 
              businesses across India with innovation and excellence.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary"></div>
              <span className="text-xs text-primary font-medium">SINCE 2020</span>
              <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="glass-card">
            <h4 className="text-lg font-bold gradient-text mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:Rehangroupof.llc@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-accent/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-foreground">Email</div>
                  <div className="text-xs">Rehangroupof.llc@gmail.com</div>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a 
                href="tel:+917643860384" 
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-accent/20 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-foreground">Phone</div>
                  <div className="text-xs">+91 7643860384</div>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-secondary/50">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-foreground">Coverage</div>
                  <div className="text-xs">All Over India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold gradient-text">Our Impact</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold gradient-text mb-1">250+</div>
                <div className="text-xs text-muted-foreground">Applications</div>
              </div>
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold neon-text mb-1">25+</div>
                <div className="text-xs text-muted-foreground">Clients</div>
              </div>
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold gradient-text mb-1">5+</div>
                <div className="text-xs text-muted-foreground">Industries</div>
              </div>
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold neon-text mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
            </div>

            {/* Special Offer Reminder */}
            <div className="glass-card border border-primary/30 animate-glow-pulse">
              <div className="text-center">
                <div className="text-sm font-semibold gradient-text mb-1">
                  🎉 Limited Time Offer
                </div>
                <div className="text-xs text-muted-foreground">
                  50% OFF on first 2 orders
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Rehan Group International. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Empowering businesses with premium technology solutions across India
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                Services  
              </a>
              <a href="#applications" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                Applications
              </a>
              <a href="#clients" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                Clients
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>
    </footer>
  );
};

export default Footer;
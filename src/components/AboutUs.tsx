import { Mail, Phone, MapPin, Users } from "lucide-react";
import directorPhoto from "@/assets/Director.jpeg.jpg";
import coDirectorPhoto from "@/assets/IMG_20250821_011224.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Our Company</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rehan Group International stands at the forefront of technology innovation, delivering 
            comprehensive solutions that drive business transformation across multiple industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Description */}
          <div className="glass-card hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 250+ applications successfully deployed across India, we specialize in creating 
              tailored technology solutions that meet the unique needs of diverse sectors including 
              Education, Corporate, Banking, Mining, and Big Industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our expertise spans Real Estate & Property Dealing, Import & Export Services, 
              Custom Software & Application Development, and cutting-edge Game Development for 
              PC, Mobile, and Console platforms.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5" />
                <a href="mailto:Rehangroupof.llc@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                  rehangroupof.llc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5" />
                <a href="tel:+917643860384" className="text-accent hover:text-accent/80 transition-colors">
                  +91 7643860384
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary w-5 h-5" />
                <span className="text-muted-foreground">Serving clients across India</span>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-2">Leadership Team</h3>
              <div className="flex items-center justify-center gap-2">
                <Users className="text-accent w-5 h-5" />
                <span className="text-muted-foreground">Experienced professionals driving innovation</span>
              </div>
            </div>

            {/* Director */}
            <div className="glass-card hover-lift text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/30 relative">
                  <img 
                    src={directorPhoto} 
                    alt="Director - Rehan Group International" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">D</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Rehan Firoz</h4>
              <p className="text-primary font-medium mb-3">Director</p>
              <p className="text-sm text-muted-foreground">
                Visionary leader with expertise in technology solutions and business development
              </p>
            </div>

            {/* Co-Director */}
            <div className="glass-card hover-lift text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-accent/30 relative">
                  <img 
                    src={coDirectorPhoto} 
                    alt="Co-Director - Rehan Group International" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-accent-foreground">CD</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Sabir Alam</h4>
              <p className="text-accent font-medium mb-3">Co-Director</p>
              <p className="text-sm text-muted-foreground">
                Strategic partner specializing in operations management and client relations
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card text-center hover-lift">
            <div className="text-3xl font-bold gradient-text mb-2">250+</div>
            <div className="text-sm text-muted-foreground">Applications Deployed</div>
          </div>
          <div className="glass-card text-center hover-lift">
            <div className="text-3xl font-bold neon-text mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Industry Sectors</div>
          </div>
          <div className="glass-card text-center hover-lift">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="glass-card text-center hover-lift">
            <div className="text-3xl font-bold neon-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
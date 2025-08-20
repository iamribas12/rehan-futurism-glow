import { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { 
  GraduationCap, 
  Building, 
  Banknote, 
  Factory, 
  Pickaxe,
  ChevronRight,
  Sparkles,
  Code2
} from "lucide-react";

const Applications = () => {
  const [activeCategory, setActiveCategory] = useState("education");

  const categories = [
    {
      id: "education",
      title: "Education Sector",
      icon: GraduationCap,
      color: "text-accent",
      apps: [
        "Student Management System",
        "Online Learning Platform", 
        "Exam Management Portal",
        "Library Management System",
        "Fee Management Application",
        "Virtual Classroom Solutions"
      ]
    },
    {
      id: "corporate", 
      title: "Corporate Sector",
      icon: Building,
      color: "text-primary",
      apps: [
        "Employee Management System",
        "Project Management Tools",
        "CRM Solutions",
        "Inventory Management",
        "Document Management System", 
        "Performance Analytics Dashboard"
      ]
    },
    {
      id: "banking",
      title: "Banking Sector", 
      icon: Banknote,
      color: "text-neon-green",
      apps: [
        "Core Banking System",
        "Mobile Banking App",
        "Loan Management Portal",
        "Customer Onboarding System",
        "Risk Assessment Tools",
        "Transaction Monitoring System"
      ]
    },
    {
      id: "industry",
      title: "Big Industry Sector",
      icon: Factory,
      color: "text-neon-blue", 
      apps: [
        "Manufacturing Execution System",
        "Supply Chain Management",
        "Quality Control Portal",
        "Production Planning System",
        "Maintenance Management",
        "Industrial IoT Dashboard"
      ]
    },
    {
      id: "mining",
      title: "Mining Sector",
      icon: Pickaxe,
      color: "text-primary-glow",
      apps: [
        "Mine Planning Software",
        "Equipment Tracking System",
        "Safety Management Portal",
        "Resource Estimation Tools",
        "Environmental Monitoring",
        "Production Optimization System"
      ]
    }
  ];

  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="applications" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="text-primary w-6 h-6" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Applications</span>
            <Code2 className="text-primary w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            250+ Applications Deployed
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of custom applications successfully deployed 
            across diverse industry sectors throughout India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="glass-card sticky top-24">
              <h3 className="text-xl font-bold gradient-text mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Industry Sectors
              </h3>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left p-4 h-auto transition-all duration-300 ${
                      activeCategory === category.id 
                        ? "bg-primary text-primary-foreground gold-glow" 
                        : "hover:bg-secondary/50 hover:text-foreground"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <category.icon className={`w-5 h-5 ${
                        activeCategory === category.id ? "text-primary-foreground" : category.color
                      }`} />
                      <div className="flex-1">
                        <div className="font-medium">{category.title}</div>
                        <div className="text-xs opacity-70 mt-1">
                          {category.apps.length} Applications
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        activeCategory === category.id ? "rotate-90" : ""
                      }`} />
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Applications Display */}
          <div className="lg:col-span-2">
            <div className="glass-card hover-lift">
              <div className="flex items-center gap-3 mb-8">
                {activeData && (
                  <>
                    <activeData.icon className={`w-8 h-8 ${activeData.color}`} />
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{activeData.title}</h3>
                      <p className="text-muted-foreground">Specialized applications for {activeData.title.toLowerCase()}</p>
                    </div>
                  </>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {activeData?.apps.map((app, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/20 rounded-xl p-4 hover:bg-secondary/30 transition-all duration-300 group border border-border/50 hover:border-primary/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse group-hover:bg-accent transition-colors duration-300"></div>
                      <span className="text-foreground font-medium group-hover:gradient-text transition-all duration-300">
                        {app}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{activeData?.apps.length}</div>
                      <div className="text-xs text-muted-foreground">Applications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold neon-text">100%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">24/7</div>
                      <div className="text-xs text-muted-foreground">Support</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                    View Details
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-4xl mx-auto border border-primary/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold gradient-text mb-2">
                  🚀 250+ Applications Successfully Deployed Across India
                </h3>
                <p className="text-muted-foreground">
                  Trusted by leading organizations in Education, Corporate, Banking, Industry, and Mining sectors
                </p>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 py-3 rounded-xl shrink-0">
                Request Custom Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
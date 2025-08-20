import { useState, useEffect } from "react";
import { Star, Quote, Building, Users, TrendingUp } from "lucide-react";

const ClientsReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // 25 random company names as clients
  const clients = [
    "TechVision Solutions", "Global Dynamics Corp", "InnovateTech Systems", "Prime Digital Solutions",
    "NextGen Technologies", "DataFlow Industries", "SmartCore Solutions", "FutureTech Enterprises", 
    "CloudSync Technologies", "DigitalEdge Systems", "ProActive Solutions", "MetaTech Industries",
    "CyberCore Technologies", "IntelliSoft Solutions", "TechPulse Corporation", "DataBridge Systems",
    "SmartLogic Technologies", "QuantumTech Solutions", "CoreTech Industries", "FlexiTech Systems",
    "RapidTech Solutions", "UltraTech Corporation", "MegaTech Industries", "TechNova Solutions",
    "EliteTech Systems"
  ];

  // 15 auto-generated reviews
  const reviews = [
    {
      name: "Rajesh Kumar",
      company: "TechVision Solutions", 
      rating: 5,
      text: "Exceptional software development services! The team delivered our banking application ahead of schedule with outstanding quality. Their expertise in fintech solutions is remarkable.",
      role: "CTO"
    },
    {
      name: "Priya Sharma",
      company: "Global Dynamics Corp",
      rating: 5,
      text: "Rehan Group International transformed our entire real estate management system. The new platform increased our efficiency by 200%. Highly recommended for any tech needs!",
      role: "Operations Manager"
    },
    {
      name: "Amit Patel",
      company: "InnovateTech Systems",
      rating: 5,
      text: "Their game development team created an amazing mobile game for us. The graphics, gameplay, and performance exceeded all our expectations. Professional and creative!",
      role: "Product Director"
    },
    {
      name: "Sneha Reddy",
      company: "Prime Digital Solutions",
      rating: 5,
      text: "Outstanding import/export management system. The automation features saved us countless hours and the support team is incredibly responsive. A true partnership!",
      role: "Supply Chain Head"
    },
    {
      name: "Vikram Singh",
      company: "NextGen Technologies",
      rating: 5,
      text: "The educational platform they built for us serves over 10,000 students seamlessly. The user interface is intuitive and the backend is robust. Excellent work!",
      role: "Education Director"
    },
    {
      name: "Kavya Nair",
      company: "DataFlow Industries", 
      rating: 5,
      text: "Mining sector application with real-time monitoring capabilities. The safety features and analytics dashboard are exactly what we needed. Top-notch development!",
      role: "Safety Manager"
    },
    {
      name: "Arjun Mehta",
      company: "SmartCore Solutions",
      rating: 5,
      text: "Corporate management system with advanced HR features. The employee portal and analytics are fantastic. They understand business needs perfectly!",
      role: "HR Director"
    },
    {
      name: "Deepika Gupta",
      company: "FutureTech Enterprises",
      rating: 5,
      text: "Custom CRM solution that integrated perfectly with our existing systems. The migration was smooth and the new features boosted our sales team productivity.",
      role: "Sales Manager"
    },
    {
      name: "Rohit Joshi",
      company: "CloudSync Technologies",
      rating: 5,
      text: "Industrial IoT dashboard for our manufacturing unit. Real-time monitoring and predictive analytics helped optimize our production by 35%. Impressive technology!",
      role: "Plant Manager"
    },
    {
      name: "Anita Das",  
      company: "DigitalEdge Systems",
      rating: 5,
      text: "Banking portal with advanced security features. The user experience is smooth and the admin panel is comprehensive. They delivered exactly what we envisioned!",
      role: "Technology Head"
    },
    {
      name: "Suresh Iyer",
      company: "ProActive Solutions", 
      rating: 5,
      text: "Property management application with mobile access. Tenants and owners love the new system. The reporting features give us great insights into our portfolio.",
      role: "Property Manager"
    },
    {
      name: "Meera Agarwal",
      company: "MetaTech Industries",
      rating: 5,
      text: "Game development for our entertainment division exceeded expectations. The multiplayer features and cloud integration work flawlessly. Creative and technical excellence!",
      role: "Entertainment Head"  
    },
    {
      name: "Karthik Rao",
      company: "CyberCore Technologies",
      rating: 5,
      text: "Supply chain optimization system reduced our logistics costs by 25%. The tracking features and automation capabilities are outstanding. Great ROI on investment!",
      role: "Logistics Director"
    },
    {
      name: "Nisha Kapoor",
      company: "IntelliSoft Solutions",
      rating: 5,
      text: "Educational management system handles everything from admissions to results. Parents and teachers find it very user-friendly. Comprehensive solution!",
      role: "Academic Director"
    },
    {
      name: "Manoj Trivedi", 
      company: "TechPulse Corporation",
      rating: 5,
      text: "Mining resource estimation tools with advanced algorithms. The accuracy of predictions improved our planning significantly. Technical expertise at its best!",
      role: "Mining Engineer"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="clients" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="text-primary w-6 h-6" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Clients</span>
            <Users className="text-primary w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the growing community of satisfied clients who trust us with their technology needs.
            Our applications are used by organizations across India in multiple sectors.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card text-center hover-lift">
            <Building className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">25+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="glass-card text-center hover-lift">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold neon-text mb-2">250+</div>
            <div className="text-muted-foreground">Applications Deployed</div>
          </div>
          <div className="glass-card text-center hover-lift">
            <Star className="w-8 h-8 text-primary-glow mx-auto mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Client Logos */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Our Valued Clients</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-secondary/20 rounded-lg p-4 text-center hover:bg-secondary/30 transition-all duration-300 group border border-border/30 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Building className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-medium text-foreground group-hover:gradient-text transition-all duration-300">
                    {client}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Highlight Banner */}
            <div className="mt-8 text-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <div className="text-lg font-bold gradient-text mb-2">
                🌟 250+ Applications Used by Clients All Over India
              </div>
              <p className="text-sm text-muted-foreground">
                From startups to enterprise organizations, our solutions power businesses nationwide
              </p>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Client Testimonials</h3>
            
            <div className="relative min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full animate-fade-in" key={currentReview}>
                  <div className="text-center mb-6">
                    <Quote className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                    <div className="flex justify-center mb-4">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground leading-relaxed text-center mb-6 italic">
                    "{reviews[currentReview].text}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-bold text-foreground text-lg gradient-text">
                      {reviews[currentReview].name}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {reviews[currentReview].role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {reviews[currentReview].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentReview === index ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsReviews;
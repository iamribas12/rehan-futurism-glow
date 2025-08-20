import { useState, useEffect } from "react";
import rehanLogo from "@/assets/comp_logo.png.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-4 backdrop-blur-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 animate-fade-in">
          <div className="relative group">
            <img 
              src={rehanLogo} 
              alt="Rehan Group International Logo" 
              className="h-12 w-12 hover-lift transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold gradient-text tracking-wide">
              Rehan Group International
            </h1>
            <div className="h-px bg-gradient-to-r from-primary via-accent to-transparent w-full mt-1"></div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:neon-text smooth-transition">About</a>
          <a href="#services" className="text-foreground hover:neon-text smooth-transition">Services</a>
          <a href="#applications" className="text-foreground hover:neon-text smooth-transition">Applications</a>
          <a href="#clients" className="text-foreground hover:neon-text smooth-transition">Clients</a>
          <a href="#contact" className="text-foreground hover:neon-text smooth-transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
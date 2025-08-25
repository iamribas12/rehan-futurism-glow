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
        scrolled ? "glass-card py-2 sm:py-4 backdrop-blur-xl" : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 animate-fade-in">
          <div className="relative group">
            <img 
              src={rehanLogo} 
              alt="Rehan Group International Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 hover-lift transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="flex flex-col min-w-0 flex-1">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold gradient-text tracking-wide truncate">
              Rehan Group International
            </h1>
            <div className="h-px bg-gradient-to-r from-primary via-accent to-transparent w-full mt-1"></div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <a href="#about" className="text-foreground hover:neon-text smooth-transition text-sm lg:text-base">About</a>
          <a href="#services" className="text-foreground hover:neon-text smooth-transition text-sm lg:text-base">Services</a>
          <a href="#applications" className="text-foreground hover:neon-text smooth-transition text-sm lg:text-base">Applications</a>
          <a href="#clients" className="text-foreground hover:neon-text smooth-transition text-sm lg:text-base">Clients</a>
          <a href="#contact" className="text-foreground hover:neon-text smooth-transition text-sm lg:text-base">Contact</a>
        </nav>

        {/* Mobile Menu Button - You might want to add mobile menu functionality */}
        <button className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
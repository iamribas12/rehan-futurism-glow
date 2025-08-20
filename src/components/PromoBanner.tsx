import { useState } from "react";
import { X } from "lucide-react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gold via-primary to-neon-blue shadow-lg animate-glow-pulse">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="text-white font-bold text-sm md:text-base tracking-wide">
            🔥 Flat 50% Discount for New Clients on Their First Two Orders! 🎉
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gold transition-colors duration-200 ml-4 p-1"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
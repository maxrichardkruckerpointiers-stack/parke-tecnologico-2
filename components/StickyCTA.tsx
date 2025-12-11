import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 bg-cartagena-coral text-white p-4 rounded-full shadow-lg shadow-cartagena-coral/40 hover:scale-110 transition-transform flex items-center gap-2 group animate-bounce-subtle"
      aria-label="Haz parte"
    >
      <MessageCircle size={24} />
      <span className="font-bold hidden group-hover:block whitespace-nowrap overflow-hidden animate-slide-in">Haz parte</span>
    </a>
  );
};

export default StickyCTA;
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NEW: Function to scroll without changing the URL hash
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-serif italic text-2xl tracking-tighter cursor-pointer">
          Nivastu<span className="text-xs uppercase tracking-[0.3em] ml-2 not-italic font-sans text-gray-400">Interiors</span>
        </div>

        {/* Updated Navigation */}
        <nav className="hidden md:flex gap-10 text-white/70 text-xs uppercase tracking-[0.2em] font-medium">
          {['Home','About', 'Features', 'Services', 'Gallery',  'Team', 'Contact', ].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())} // Call the function here
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none"
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="border border-white/20 px-5 py-2 text-[10px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
          Book Consultation
        </button>
      </div>
    </header>
  );
};

export default Header;
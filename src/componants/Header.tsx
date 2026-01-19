import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Delay to allow page transition
    } else {
      scrollToSection(sectionId);
    }
  };

  const navItems = ['Home', 'About', 'Features', 'Services', 'Process', 'Gallery', 'Team', 'Contact'];

  return (
    <>
      <header className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-[#B08682] py-4 shadow-xl' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')}
            className="text-[#7A4A4D] font-serif italic text-2xl tracking-tighter cursor-pointer group z-[70]"
          >
            Nivastu
            <span className={`text-[10px] uppercase tracking-[0.4em] ml-2 not-italic font-sans transition-colors ${
              isScrolled || isMenuOpen ? 'text-[#F5F1EF]' : 'text-[#B08682]'
            }`}>
              Interiors
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors ${
            isScrolled || isMenuOpen ? 'text-[#F5F1EF]' : 'text-[#7A4A4D]'
          }`}>
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item.toLowerCase())}
                className="hover:opacity-70 transition-all cursor-pointer bg-transparent border-none relative group"
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled || isMenuOpen ? 'bg-[#F5F1EF]' : 'bg-[#B08682]'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={() => handleNavClick('contact')}
            className={`hidden md:block border px-6 py-2.5 text-[10px] uppercase tracking-widest transition-all rounded-full ${
              isScrolled || isMenuOpen 
                ? 'border-[#F5F1EF] text-[#F5F1EF] hover:bg-[#F5F1EF] hover:text-[#B08682]' 
                : 'border-[#B08682] text-[#7A4A4D] hover:bg-[#B08682] hover:text-[#F5F1EF]'
            }`}
          >
            Book Consultation
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden focus:outline-none z-[70] transition-colors ${
              isScrolled || isMenuOpen ? 'text-[#F5F1EF]' : 'text-[#7A4A4D]'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-[55] bg-[#B08682] transition-transform duration-500 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item.toLowerCase())}
              className="text-[#F5F1EF] text-xl uppercase tracking-[0.3em] font-light hover:text-[#7A4A4D] transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="mt-4 border border-[#F5F1EF] px-8 py-3 text-[12px] uppercase tracking-widest text-[#F5F1EF] rounded-full hover:bg-[#F5F1EF] hover:text-[#B08682] transition-all"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
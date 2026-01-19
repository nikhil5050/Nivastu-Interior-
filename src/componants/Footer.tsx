import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Delay to allow page transition
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-[#B08682] text-[#EBE0D8] border-t border-[#7A4A4D]/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif italic mb-6 text-[#7A4A4D]">Nivastu</h3>
            <p className="text-[#F5F1EF]  text-sm leading-relaxed mb-6">
              Crafting soulful spaces that blend timeless elegance with modern functionality. 
              Your vision, our precision.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-[#EBE0D8] hover:text-[#7A4A4D] transition-colors cursor-pointer" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-[#EBE0D8] hover:text-[#7A4A4D] transition-colors cursor-pointer" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-[#EBE0D8] hover:text-[#7A4A4D] transition-colors cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7A4A4D] mb-6 font-bold">Navigation</h4>
            <ul className="space-y-4 text-[#F5F1EF]  text-sm">
              <li><button onClick={() => handleNavClick('about')} className="hover:text-[#7A4A4D] transition-colors bg-transparent border-none text-left">About</button></li>
              <li><button onClick={() => handleNavClick('gallery')} className="hover:text-[#7A4A4D] transition-colors bg-transparent border-none text-left">Gallery</button></li>
              <li><button onClick={() => handleNavClick('process')} className="hover:text-[#7A4A4D] transition-colors bg-transparent border-none text-left">Process</button></li>
              <li><button onClick={() => handleNavClick('team')} className="hover:text-[#7A4A4D] transition-colors bg-transparent border-none text-left">Team</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7A4A4D] mb-6 font-bold">Services</h4>
            <ul className="space-y-4 text-[#F5F1EF] text-sm">
              <li><button onClick={() => handleNavClick('services')} className="hover:text-[#7A4A4D] transition-colors bg-transparent border-none text-left">Our Services</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7A4A4D] mb-6 font-bold">Newsletter</h4>
            <p className="text-[#F5F1EF]  text-sm mb-4">Get design inspiration directly in your inbox.</p>
            <div className="flex border-b border-[#7A4A4D]/40 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-sm w-full focus:outline-none text-[#EBE0D8] placeholder-[#EBE0D8]/50" 
              />
              <button className="text-xs uppercase tracking-widest font-bold text-[#7A4A4D] hover:text-[#EBE0D8] transition-colors">→</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#7A4A4D]/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#F5F1EF] uppercase tracking-widest">
          <p>© 2026 Nivastu Interiors. All Rights Reserved.</p>
          <p className='text-center'>Powered By <b>Adswise marketing</b> </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-[#7A4A4D] cursor-pointer transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
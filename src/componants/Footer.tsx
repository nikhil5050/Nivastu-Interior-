import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif italic mb-6">Nivastu</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Crafting soulful spaces that blend timeless elegance with modern functionality. 
              Your vision, our precision.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Recent Projects</a></li>
              <li><a href="#" className="hover:text-white">Design Process</a></li>
              <li><a href="#" className="hover:text-white">Studio Blog</a></li>
            </ul>
          </div>

          {/* Services (SEO Keywords) */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white">Residential Interiors</a></li>
              <li><a href="#" className="hover:text-white">Office Space Planning</a></li>
              <li><a href="#" className="hover:text-white">Furniture Curation</a></li>
              <li><a href="#" className="hover:text-white">Lighting Design</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Get design inspiration directly in your inbox.</p>
            <div className="flex border-b border-gray-800 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full focus:outline-none" />
              <button className="text-xs uppercase tracking-widest font-bold">→</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2026 Nivastu Interiors. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-black text-[#D8CFBC] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-[#565449] uppercase tracking-[0.4em] text-xs mb-3 font-bold">Nivastu</p>
          <h2 className="text-5xl md:text-6xl font-serif italic mb-6 text-[#FFFBF4]">Let's Design Your Vision</h2>
          <p className="text-[#D8CFBC] max-w-2xl text-lg font-light leading-relaxed opacity-80">
            Ready to transform your space? Reach out to our design consultants to start your journey toward a home that tells your story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Form */}
          <div className="bg-[#565449]/10 p-8 md:p-12 rounded-2xl border border-[#565449]/30 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#565449] mb-2 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-[#565449]/50 py-3 text-[#FFFBF4] focus:outline-none focus:border-[#FFFBF4] transition-colors placeholder-[#565449]" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#565449] mb-2 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-[#565449]/50 py-3 text-[#FFFBF4] focus:outline-none focus:border-[#FFFBF4] transition-colors placeholder-[#565449]" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#565449] mb-2 font-bold">Service Type</label>
                <select className="w-full bg-transparent border-b border-[#565449]/50 py-3 focus:outline-none focus:border-[#FFFBF4] transition-colors text-[#D8CFBC] appearance-none cursor-pointer">
                  <option className="bg-[#11120D]">Residential Design</option>
                  <option className="bg-[#11120D]">Commercial Consultancy</option>
                  <option className="bg-[#11120D]">Space Planning</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#565449] mb-2 font-bold">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-[#565449]/50 py-3 text-[#FFFBF4] focus:outline-none focus:border-[#FFFBF4] transition-colors resize-none placeholder-[#565449]" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button className="mt-4 px-10 py-4 bg-[#FFFBF4] text-[#11120D] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D8CFBC] transition-all rounded-full">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Right: Contact Details & Info */}
          <div className="space-y-12 h-full flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <MapPin className="text-[#FFFBF4] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FFFBF4]">Studio Address</h4>
                  <p className="text-[#D8CFBC] text-sm leading-relaxed opacity-70">
                    123 Design District, Suite 405<br />
                    Vita, Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#FFFBF4] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FFFBF4]">Call Us</h4>
                  <p className="text-[#D8CFBC] text-sm opacity-70">+91 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#FFFBF4] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FFFBF4]">Email</h4>
                  <p className="text-[#D8CFBC] text-sm font-mono opacity-70">hello@nivastu.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#FFFBF4] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FFFBF4]">Hours</h4>
                  <p className="text-[#D8CFBC] text-sm opacity-70">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Interior Quote Decoration */}
            <div className="border-l border-[#565449] pl-6 py-4 italic text-[#D8CFBC] font-serif text-xl opacity-80">
              "Design is not just what it looks like and feels like. Design is how it works."
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 w-full h-[450px] grayscale brightness-50 contrast-125 rounded-2xl overflow-hidden border border-[#565449]/30 hover:grayscale-0 transition-all duration-1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15194.846506371454!2d74.52445695!3d17.27183665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc16ce22a893417%3A0xe5433299c8558488!2sVita%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
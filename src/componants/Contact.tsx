import { motion } from 'framer-motion';
// Use "import type" to ensure Vite/TypeScript doesn't look for a JS export
import type { Variants } from 'framer-motion'; 
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // Define variants with explicit type to satisfy TypeScript 
  // without breaking the runtime build
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const faqData = [
    { q: "Do you provide interior services across all Pune areas?", a: "Yes—from Kothrud to Hinjewadi, Wakad, and Pimpri." },
    { q: "Do you handle small-budget projects?", a: "Absolutely. We are experts in minimum budget 1 BHK interiors in Pune." },
    { q: "Design + execution or just design?", a: "We provide full end-to-end solutions, including material warranties." },
    { q: "Project timelines?", a: "Typical 1 BHK projects take 4-6 weeks; specific timelines are discussed upfront." },
    { q: "Warranty & after-sales?", a: "1-year warranty on workmanship with free touch-ups in the first month." }
  ];

  return (
    <section className="bg-[#F5F1EF] text-[#7A4A4D] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20 text-center"
        >
          <h2 className="text-[#7A4A4D] text-4xl md:text-5xl font-extralight tracking-[0.3em] uppercase mb-8">
            Contact Nivastu Interiors
          </h2>
          <div className="w-24 h-[1px] bg-[#B08682] mx-auto mb-8" />
          <p className="text-[#7A4A4D]/80 max-w-2xl text-lg font-light leading-relaxed mx-auto">
            Ready to bring minimalist elegance to your home? 
            Our Pune studio is here to help you design a space that works beautifully.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch mb-24">
          {/* Left: Animated Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#EBE0D8]/40 p-8 md:p-12 rounded-3xl border border-[#B08682]/20 shadow-sm relative"
          >
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B08682] mb-2 font-bold group-focus-within:text-[#7A4A4D] transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-[#B08682]/30 py-3 text-[#7A4A4D] focus:outline-none focus:border-[#7A4A4D] transition-all placeholder-[#B08682]/50" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B08682] mb-2 font-bold group-focus-within:text-[#7A4A4D] transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-[#B08682]/30 py-3 text-[#7A4A4D] focus:outline-none focus:border-[#7A4A4D] transition-all placeholder-[#B08682]/50" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B08682] mb-2 font-bold group-focus-within:text-[#7A4A4D] transition-colors">Service Type</label>
                <select className="w-full bg-transparent border-b border-[#B08682]/30 py-3 focus:outline-none focus:border-[#7A4A4D] transition-all text-[#7A4A4D] appearance-none cursor-pointer">
                  <option>Residential Design (1 BHK / 2 BHK)</option>
                  <option>Modular Kitchen Solutions</option>
                  <option>Commercial & Office Interiors</option>
                  <option>Space Planning & Consultancy</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B08682] mb-2 font-bold group-focus-within:text-[#7A4A4D] transition-colors">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-[#B08682]/30 py-3 text-[#7A4A4D] focus:outline-none focus:border-[#7A4A4D] transition-all resize-none placeholder-[#B08682]/50" 
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#B08682' }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-12 py-4 bg-[#7A4A4D] text-[#F5F1EF] text-[10px] font-bold uppercase tracking-[0.3em] transition-all rounded-full shadow-md"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: <MapPin />, title: "Studio", desc: "Haveli, Darsh Apartments, Sahajanand Society, Kothrud, Pune - 411038" },
                { icon: <Phone />, title: "Call Us", desc: "+91 (123) 456-7890" },
                { icon: <Mail />, title: "Email", desc: "hello@nivastu.com" },
                { icon: <Clock />, title: "Hours", desc: "Mon - Sat: 9:00 AM - 7:00 PM" }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="text-[#7A4A4D] w-12 h-12 bg-[#B08682]/10 rounded-xl flex items-center justify-center group-hover:bg-[#7A4A4D] group-hover:text-[#F5F1EF] transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-[#7A4A4D]">{item.title}</h4>
                    <p className="text-[#7A4A4D]/60 text-sm leading-relaxed group-hover:text-[#7A4A4D] transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative p-10 bg-gradient-to-br from-[#EBE0D8] to-transparent rounded-3xl border border-[#B08682]/10">
              <div className="absolute top-0 left-10 w-10 h-[2px] bg-[#B08682]" />
              <p className="italic text-[#7A4A4D] font-light text-2xl leading-relaxed">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-4 text-[#B08682]">— Steve Jobs</p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-[500px] grayscale brightness-105 contrast-75 rounded-[2rem] overflow-hidden border border-[#B08682]/20 hover:grayscale-0 transition-all duration-1000 shadow-sm mb-32"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.562473873427!2d73.8118086759544!3d18.5034870696956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9333333333%3A0x6b3b3b3b3b3b3b3b!2sKothrud%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="text-[#7A4A4D] text-3xl font-light tracking-[0.2em] uppercase mb-4">Common Inquiries</h3>
            <p className="text-[#B08682] text-[10px] uppercase tracking-[0.3em] font-semibold">Helping you make informed decisions</p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white border border-[#B08682]/20 p-8 rounded-2xl hover:border-[#7A4A4D]/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="text-[#B08682] font-mono text-lg group-hover:text-[#7A4A4D] transition-colors">0{index + 1}</div>
                  <div className="text-center md:text-left w-full">
                    <h4 className="text-[#7A4A4D] font-medium text-lg mb-4 tracking-wide">{faq.q}</h4>
                    <p className="text-[#B08682] text-sm leading-relaxed max-w-2xl mx-auto md:mx-0">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
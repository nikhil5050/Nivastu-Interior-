import { motion } from 'framer-motion';

// Mock data for the statistics section
const stats = [
  { label: 'Year Of Experience', value: '5+' },
  { label: 'Happy Clients', value: '500+' },
];

const AboutUs = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#F5F1EF] text-[#7A4A4D] p-8 md:p-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          className="lg:col-span-4 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="text-[#B08682] text-sm mb-4 uppercase tracking-widest font-bold">You Can Trust</motion.span>
          <motion.h1 variants={itemVariants} className="text-[#7A4A4D] text-3xl md:text-4xl font-serif mb-6 leading-tight">
            Affordable Home Interior Designers in Pune
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[#7A4A4D] text-sm mb-12 leading-relaxed max-w-sm opacity-80">
            Finding the right home interior designer in Pune can be challenging, especially when budgets are limited and expectations are realistic. At Nivastu Interiors, we understand that most homeowners want interiors that look neat, feel comfortable, and stay within budget
          </motion.p>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-y-8 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-serif text-[#7A4A4D]">{stat.value}</div>
                <div className="text-xs text-[#B08682] uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="py-2">
    <ul className="grid grid-cols-1 gap-2 border-l border-[#B08682] pl-4 text-xs uppercase tracking-wide">
      <li>• Understand your space and lifestyle</li>
      <li>• Plan interiors that maximize usability</li>
      <li>• Suggest practical design options</li>
      <li>• Execute the project with budget awareness</li>
    </ul>
  </div>
  




          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#B08682', color: '#F5F1EF' }}
            whileTap={{ scale: 0.95 }}
            className="w-fit px-8 py-3 mt-8 bg-[#7A4A4D] text-[#F5F1EF] rounded-full text-sm font-medium transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* CENTER COLUMN: Main Feature Image */}
        <motion.div 
          className="lg:col-span-4 relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[40px] overflow-hidden h-[600px] border border-[#B08682]/30 bg-[#EBE0D8]">
            <img 
              src="https://i.pinimg.com/736x/c1/a2/e2/c1a2e2b22757b01c88217128edd5911b.jpg?auto=format&fit=crop&q=80" 
              alt="Interior design" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
            />
          </div>
          {/* Circular Badge Floating */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#B08682]/40 backdrop-blur-md rounded-full border border-[#7A4A4D]/20 flex items-center justify-center p-4 text-[8px] text-[#7A4A4D] text-center uppercase tracking-tighter"
          >
            Create 3D Rendering • Create 3D Rendering •
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Masonry-style Grid */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ y: -10 }}
            className="col-span-2 h-[280px] rounded-3xl overflow-hidden border border-[#B08682]/30 bg-[#EBE0D8]"
          >
            <img src="https://i.pinimg.com/1200x/57/9f/42/579f423ed832a0b30982cce7106462b6.jpg?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-90" alt="Interior" />
          </motion.div>
          
          <motion.div 
             whileHover={{ y: -10 }}
             className="h-[300px] rounded-3xl overflow-hidden bg-[#EBE0D8] border border-[#B08682]/30"
          >
            <img src="https://i.pinimg.com/736x/f7/33/80/f73380aa3744b526077837742675b360.jpg?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-90" alt="Detail" />
          </motion.div>

          <motion.div 
             whileHover={{ y: -10 }}
             className="h-[300px] rounded-3xl overflow-hidden border border-[#B08682]/30 bg-[#EBE0D8]"
          >
            <img src="https://i.pinimg.com/736x/2a/b9/fe/2ab9fe9e2e8b652740a7b4e3a9de26e6.jpg?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-90" alt="Detail" />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
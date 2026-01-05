import { motion } from 'framer-motion';

// Mock data for the statistics section
const stats = [
  { label: 'Lorem Ipsum', value: '255+' },
  { label: 'Lorem Ipsum', value: '255+' },
  { label: 'Lorem Ipsum', value: '255+' },
  { label: 'Lorem Ipsum', value: '255+' },
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
    <div className="min-h-screen bg-black text-[#D8CFBC] p-8 md:p-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          className="lg:col-span-4 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="text-[#565449] text-sm mb-4 uppercase tracking-widest font-bold">About Us</motion.span>
          <motion.h1 variants={itemVariants} className="text-[#FFFBF4] text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Lorem Ipsum is dummy text of the printing
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[#D8CFBC] text-sm mb-12 leading-relaxed max-w-sm opacity-80">
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </motion.p>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-y-8 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-serif text-[#FFFBF4]">{stat.value}</div>
                <div className="text-xs text-[#565449] uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#D8CFBC', color: '#11120D' }}
            whileTap={{ scale: 0.95 }}
            className="w-fit px-8 py-3 bg-[#FFFBF4] text-[#11120D] rounded-full text-sm font-medium transition-colors"
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
          <div className="rounded-[40px] overflow-hidden h-[600px] border border-[#565449]/30 bg-[#565449]">
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
            className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#565449]/40 backdrop-blur-md rounded-full border border-[#FFFBF4]/20 flex items-center justify-center p-4 text-[8px] text-[#FFFBF4] text-center uppercase tracking-tighter"
          >
            Create 3D Rendering • Create 3D Rendering •
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Masonry-style Grid */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ y: -10 }}
            className="col-span-2 h-[280px] rounded-3xl overflow-hidden border border-[#565449]/30 bg-[#565449]"
          >
            <img src="https://i.pinimg.com/1200x/57/9f/42/579f423ed832a0b30982cce7106462b6.jpg?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-90" alt="Interior" />
          </motion.div>
          
          <motion.div 
             whileHover={{ y: -10 }}
             className="h-[300px] rounded-3xl overflow-hidden bg-[#565449] border border-[#565449]/30"
          >
            <img src="https://i.pinimg.com/736x/f7/33/80/f73380aa3744b526077837742675b360.jpg?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-90" alt="Detail" />
          </motion.div>

          <motion.div 
             whileHover={{ y: -10 }}
             className="h-[300px] rounded-3xl overflow-hidden border border-[#565449]/30 bg-[#565449]"
          >
            <img src="https://i.pinimg.com/736x/2a/b9/fe/2ab9fe9e2e8b652740a7b4e3a9de26e6.jpg?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-90" alt="Detail" />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
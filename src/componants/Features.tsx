import React from 'react';
import { motion } from 'framer-motion';

const featureData = [
  {
    id: 1,
    title: "1 BHK APARTMENT",
    price: "$ 210.00 USD",
    image: "https://i.pinimg.com/1200x/92/81/25/92812560e709b95fe1ef0e2b6c5b3c27.jpg?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "2 BHK APARTMENT",
    price: "$ 150.00 USD",
    image: "https://i.pinimg.com/736x/a1/88/1e/a1881e0a6366e9fc2ad83bac5e7b2a34.jpg?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "3 BHK APARTMENT",
    price: "$ 940.00 USD",
    image: "https://i.pinimg.com/1200x/91/7f/0e/917f0e387fbe1e6ae843ebf399bf3ad4.jpg?q=80&w=600&auto=format&fit=crop",
  }
];

const Features: React.FC = () => {
  // Container animation for staggering the entrance of cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-black text-[#D8CFBC] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <h2 className="text-[#FFFBF4] text-4xl font-extralight tracking-[0.3em] uppercase mb-8">Featured</h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {featureData.map((item) => (
            <motion.div 
              key={item.id} 
              variants={cardVariants}
              className="flex flex-col items-center group"
            >
              {/* Oval Image Container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full aspect-[4/5] rounded-t-full rounded-b-full overflow-hidden border border-[#565449]/30 bg-[#565449]"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>

              {/* Text Info */}
              <div className="text-center mt-8 space-y-2">
                <h3 className="text-xs tracking-[0.3em] font-light text-[#FFFBF4] uppercase">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-[#D8CFBC] opacity-70">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#FFFBF4", color: "#11120D" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 border border-[#565449] rounded-lg text-sm font-medium bg-transparent text-[#FFFBF4] transition-colors"
          >
            Explore More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
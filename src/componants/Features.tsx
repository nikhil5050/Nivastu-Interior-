import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Defined the data structure for better type safety
interface FeatureItem {
  id: number;
  title: string;
  price: string;
  image: string;
}

const featureData: FeatureItem[] = [
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
  // Typed as Variants to avoid internal string errors
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual card animation - Fixed TS2322 error
  const cardVariants: Variants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Using Cubic Bezier for smoother, type-safe animation
      } 
    },
  };

  return (
    <section className="bg-[#EBE0D8] text-[#7A4A4D] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#B08682] uppercase tracking-[0.4em] text-xs mb-3 font-bold">Curated Spaces</p>
          <h2 className="text-[#7A4A4D] text-4xl font-extralight tracking-[0.3em] uppercase">Featured</h2>
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
                className="w-full aspect-[4/5] rounded-t-full rounded-b-full overflow-hidden border border-[#B08682]/30 bg-[#F5F1EF] relative"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                />
                {/* Subtle Overlay Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7A4A4D]/20" />
              </motion.div>

              {/* Text Info */}
              <div className="text-center mt-8 space-y-2">
                <h3 className="text-xs tracking-[0.3em] font-semibold text-[#7A4A4D] uppercase">
                  {item.title}
                </h3>
                {/* <p className="text-sm font-medium text-[#565449] tracking-widest">
                  {item.price}
                </p> */}
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
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#B08682", 
              color: "#F5F1EF",
              borderColor: "#B08682" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border border-[#B08682] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-transparent text-[#7A4A4D] transition-all duration-300"
          >
            Explore More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
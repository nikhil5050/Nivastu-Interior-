import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';

const galleryData = [
  { id: 1, category: 'Residential', src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', title: 'Modern Villa' },
  { id: 2, category: 'Commercial', src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72', title: 'Tech HQ Office' },
  { id: 3, category: 'Residential', src: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe', title: 'Minimalist Kitchen' },
  { id: 4, category: 'Commercial', src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174', title: 'Creative Studio' },
  { id: 5, category: 'Residential', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', title: 'Luxury Suite' },
  { id: 6, category: 'Commercial', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d', title: 'Retail Boutique' },
];

const categories = ["All", "Residential", "Commercial"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  return (
    <section className="py-20 bg-black text-[#D8CFBC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#FFFBF4] text-4xl font-extralight tracking-[0.3em] uppercase mb-8">Portfolio</h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center space-x-8 border-b border-[#565449]/30 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative text-sm uppercase tracking-widest transition-colors duration-300 ${
                  filter === cat ? "text-[#FFFBF4]" : "text-[#565449] hover:text-[#D8CFBC]"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#FFFBF4]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group aspect-square cursor-pointer overflow-hidden bg-[#565449] rounded-2xl"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={`${img.src}?auto=format&fit=crop&w=800&q=80`}
                  alt={img.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11120D] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-[#565449] text-xs uppercase tracking-widest mb-1 font-bold">{img.category}</p>
                  <h3 className="text-[#FFFBF4] text-xl font-light">{img.title}</h3>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="text-[#FFFBF4] w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#11120D]/fb backdrop-blur-md p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-[#FFFBF4] hover:text-[#D8CFBC] transition-colors">
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="max-w-5xl w-full"
            >
              <img
                src={`${selectedImg.src}?auto=format&fit=crop&w=1200&q=90`}
                className="w-full h-auto max-h-[80vh] object-contain shadow-2xl shadow-black rounded-xl"
                alt="Selected view"
              />
              <div className="mt-6 text-center">
                <span className="text-[#565449] uppercase tracking-[0.2em] text-sm font-bold">{selectedImg.category}</span>
                <h2 className="text-[#FFFBF4] text-2xl font-light mt-2">{selectedImg.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
import { motion, type Variants } from 'framer-motion';
import { MessageSquare, Maximize, Lightbulb, IndianRupee, ClipboardList, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Requirement & Budget",
    description: "Requirement discussion and budget understanding to ensure expectations are aligned from day one.",
    icon: <MessageSquare className="w-8 h-8 text-[#F5F1EF]" />,
  },
  {
    title: "Space Analysis",
    description: "Detailed space analysis and layout planning, specifically focused on maximizing usability in compact homes.",
    icon: <Maximize className="w-8 h-8 text-[#F5F1EF]" />,
  },
  {
    title: "Design Suggestions",
    description: "Providing practical design suggestions that balance aesthetics with daily functional needs.",
    icon: <Lightbulb className="w-8 h-8 text-[#F5F1EF]" />,
  },
  {
    title: "Cost Transparency",
    description: "Clear material and cost explanation to deliver affordable solutions without hidden charges.",
    icon: <IndianRupee className="w-8 h-8 text-[#F5F1EF]" />,
  },
  {
    title: "Execution Planning",
    description: "Detailed execution planning and scheduling to ensure the project moves forward smoothly.",
    icon: <ClipboardList className="w-8 h-8 text-[#F5F1EF]" />,
  },
  {
    title: "Final Delivery",
    description: "Final delivery with rigorous quality checks to ensure long-term comfort and durability.",
    icon: <CheckCircle className="w-8 h-8 text-[#F5F1EF]" />,
  },
];

const Process = () => {
  // Explicitly labeling these as 'Variants' fixes the TS2322 error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-[#F5F1EF] text-[#7A4A4D] py-24 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#EBE0D8_0%,_transparent_70%)] opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-[#7A4A4D] text-4xl md:text-4xl font-extralight tracking-[0.3em] uppercase mb-8">
            Our Interior Design Process
          </h2>
          <div className="w-24 h-[1px] bg-[#B08682] mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-[#7A4A4D] text-lg opacity-80 leading-relaxed italic">
            This process helps us deliver affordable interior solutions in Pune 
            without confusion or hidden costs.
          </p>
        </motion.div>

        {/* Process Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative group text-center"
            >
              {/* Step Number Background */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-[#7A4A4D]/5 select-none transition-all duration-500 group-hover:text-[#7A4A4D]/10 group-hover:-top-12">
                0{index + 1}
              </div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Icon Container with Glow */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-[#7A4A4D] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                    <div className="bg-[#7A4A4D] w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {step.icon}
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-[#7A4A4D] text-2xl font-light tracking-wider mb-4 group-hover:text-[#B08682] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-90 transition-opacity text-center">
                  {step.description}
                </p>
              </div>

              {/* Desktop Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-6 w-12 h-[1px] bg-gradient-to-r from-[#B08682]/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Centered Footer Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-[#B08682] to-transparent w-full mb-12" />
          <p className="text-[#7A4A4D]/60 max-w-3xl mx-auto text-sm uppercase tracking-[0.2em]">
            Transparent Execution • Budget Awareness • Quality Excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
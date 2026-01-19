import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Ms. Nikita Lokhande",
    role: "Interior Design Expert",
    experience: "5+ Years Practical Experience",
    qualification: "Graduate in Political Science | Professional Diploma in Interior Designing",
    description: "At Nivastu Interiors, she plays a key role in planning, designing, and executing residential and commercial interior projects with a strong emphasis on functionality, space efficiency, and long-term usability. Her expertise includes interior design conceptualization, space planning, material and finish selection, coordination with execution teams, and on-site supervision to ensure quality and consistency at every stage.",
    philosophy: "Focuses on interiors that are visually balanced, structurally sound, and aligned with budget realities."
  },
  {
    name: "Mr. Vikas Kale",
    role: "Technical & HVAC Expert",
    experience: "5+ Years Industry Experience",
    qualification: "BE Chemical Engineer | Specialized HVAC Training",
    description: "Mr. Vikas Kale gained hands-on exposure to HVAC design principles and execution standards during his tenure at Blue Star. His background combines strong technical education with real-world experience, enabling him to understand mechanical systems, performance requirements, and operational reliability. He ensures HVAC planning and execution are aligned with safety norms and long-term performance expectations.",
    philosophy: "Strengthens the technical backbone where engineering precision and dependable planning are critical."
  }
];

const Team = () => {
  return (
    <section className="bg-[#EBE0D8] text-[#7A4A4D] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[#B08682] uppercase tracking-[0.4em] text-xs mb-4 font-bold">Expertise</p>
          <h2 className="text-[#7A4A4D] text-4xl md:text-5xl font-extralight tracking-[0.15em] uppercase">
            Design & Technical Experts
          </h2>
          <div className="h-[1px] w-32 bg-[#B08682] mx-auto mt-8"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 border border-[#B08682]/20 bg-[#EBE0D8] hover:bg-[#B08682]/5 transition-colors duration-500 group"
            >
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#B08682]/40 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#B08682]/10"></div>

              {/* Title & Role */}
              <div className="mb-8">
                <span className="text-[#B08682] text-xs font-mono mb-2 block uppercase tracking-tighter">
                  Expert Profile 0{index + 1}
                </span>
                <h3 className="text-3xl font-light tracking-tight text-[#7A4A4D] mb-2 uppercase">
                  {member.name}
                </h3>
                <p className="text-[#B08682] text-sm font-bold uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </div>

              {/* Qualifications & Experience */}
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-[#B08682] uppercase font-bold tracking-widest mb-1">Credentials</p>
                  <p className="text-sm font-medium leading-relaxed italic">{member.qualification}</p>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-[#B08682]/40 to-transparent"></div>

                {/* Main Bio */}
                <div>
                  <p className="text-[10px] text-[#B08682] uppercase font-bold tracking-widest mb-2">Professional Background</p>
                  <p className="text-[#7A4A4D]/90 text-sm leading-relaxed text-justify">
                    {member.description}
                  </p>
                </div>

                {/* Philosophy/Approach */}
                <div className="pt-6">
                  <blockquote className="border-l-2 border-[#B08682] pl-4">
                    <p className="text-sm italic text-[#7A4A4D]/80">
                      "{member.philosophy}"
                    </p>
                  </blockquote>
                </div>

                {/* Experience Footer */}
                <div className="pt-8 flex items-center gap-4">
                  <div className="px-3 py-1 bg-[#7A4A4D] text-[#EBE0D8] text-[10px] font-bold uppercase tracking-widest">
                    {member.experience}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Branding Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-[#B08682]/50 font-serif italic text-lg italic">
            Process-driven solutions. Engineering precision.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
import React from 'react';
import { Paintbrush, Briefcase, Home } from 'lucide-react';

const services = [
  {
    title: "Interior Design",
    description: "Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    icon: <Paintbrush className="w-6 h-6 text-[#11120D]" />,
  },
  {
    title: "Design Consultancy",
    description: "Design consultancy involves providing expert advice and guidance on design-related projects, helping clients achieve their goals through strategic planning.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    icon: <Briefcase className="w-6 h-6 text-[#11120D]" />,
  },
  {
    title: "Residential Design",
    description: "Residential design focuses on creating functional and aesthetically pleasing living spaces within homes, tailored to the unique needs and preferences of residents.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    icon: <Home className="w-6 h-6 text-[#11120D]" />,
  },
  {
    title: "Commercial Design",
    description: "Commercial design involves planning and designing spaces for businesses, ensuring they are functional, efficient, and aligned with the brand's identity.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    icon: <Briefcase className="w-6 h-6 text-[#11120D]" />,
  },
  {
    title: "Space Planning",
    description: "Space planning is the process of organizing furniture and design elements within a space to optimize functionality and flow.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800",
    icon: <Briefcase className="w-6 h-6 text-[#11120D]" />,
  },
  {
    title: "Environmental Design",
    description: "Environmental design focuses on creating sustainable and eco-friendly spaces that minimize environmental impact while enhancing user experience.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    icon: <Home className="w-6 h-6 text-[#11120D]" />,
  },
];

const Services = () => {
  return (
    <section className="bg-black text-[#D8CFBC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-20 text-[#FFFBF4] text-4xl font-extralight tracking-[0.3em] uppercase mb-8">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#565449] group overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 rounded-2xl border border-[#565449]/50"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                />
                {/* Dark Overlay with Title */}
                <div className="absolute inset-0 bg-[#11120D]/40 flex flex-col justify-end p-6">
                  <h3 className="text-[#FFFBF4] text-2xl font-bold mb-2">{service.title}</h3>
                </div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-[#FFFBF4] p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <p className="text-[#D8CFBC] leading-relaxed opacity-90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
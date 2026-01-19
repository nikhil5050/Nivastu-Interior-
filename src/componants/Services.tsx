import { Paintbrush, Briefcase, Home, Utensils, Layout, Layers } from 'lucide-react';

const services = [
  {
    title: "Residential Design",
    description: "Expert interior design for 1 BHK and compact flats in Pune. We focus on daily usage, maintenance, and long-term comfort for modern lifestyles.",
    features: [
      "1 BHK home interior design",
      "Space planning and layout optimization",
      "Modular kitchen design and execution",
      "Wardrobe and storage solutions",
      "Living room interior design",
      "Bedroom interior design",
      "Practical material selection within budget"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    icon: <Home className="w-6 h-6 text-[#F5F1EF]" />,
  },
  {
    title: "Modular Kitchens",
    description: "Efficiency-driven layouts with durable materials. We provide budget-friendly modular solutions that focus on smart storage and ease of use.",
    features: [
      "Space-efficient kitchen layouts",
      "Budget-friendly modular kitchen options",
      "Durable materials suitable for daily cooking",
      "Smart storage planning"
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    icon: <Utensils className="w-6 h-6 text-[#F5F1EF]" />,
  },
  {
    title: "Wardrobes & Storage",
    description: "Customized storage solutions that are customized according to room size and usage to keep your spaces organized without clutter.",
    features: [
      "Bedroom wardrobes",
      "Loft storage",
      "Compact storage for small homes",
      "Practical internal layout planning"
    ],
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    icon: <Layers className="w-6 h-6 text-[#F5F1EF]" />,
  },
  {
    title: "Commercial Solutions",
    description: "Functional interiors for small businesses in Pune who need clean, professional spaces without heavy investment.",
    features: [
      "Small office interiors",
      "Retail shop interior design",
      "Café and small commercial space interiors"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    icon: <Briefcase className="w-6 h-6 text-[#F5F1EF]" />,
  },
  {
    title: "Space Planning",
    description: "The process of organizing furniture and design elements within a space to optimize functionality and flow in compact homes.",
    features: [
      "Layout optimization",
      "Maximizing usability",
      "Furniture placement strategy"
    ],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800",
    icon: <Layout className="w-6 h-6 text-[#F5F1EF]" />,
  },
  {
    title: "Design Consultancy",
    description: "Expert advice and guidance on design-related projects, suggesting practical options that align with your budget awareness.",
    features: [
      "Budget-aware material selection",
      "Practical design options",
      "Lifestyle-based planning"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    icon: <Paintbrush className="w-6 h-6 text-[#F5F1EF]" />,
  },
];

const Services = () => {
  return (
    <section className="bg-[#F5F1EF] text-[#7A4A4D] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#7A4A4D] text-4xl font-extralight tracking-[0.2em] uppercase mb-6">
            Home Interior Services in Pune
          </h2>
          <p className="max-w-3xl mx-auto text-[#7A4A4D] text-base leading-relaxed">
            Nivastu Interiors focuses primarily on residential home interiors in Pune, 
            especially compact homes and flats. We have strong experience in 1 BHK and 
            small flat design, where space planning plays a crucial role.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#EBE0D8] group flex flex-col overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border border-[#B08682]/30"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A4A4D] via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-[#F5F1EF] text-2xl font-semibold mb-2">{service.title}</h3>
                </div>
                
                <div className="absolute top-4 right-4 bg-[#B08682] p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex-grow">
                <p className="text-[#7A4A4D] leading-relaxed opacity-90 text-sm mb-6">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 border-t border-[#B08682]/30 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-xs text-[#7A4A4D]/80 italic">
                      <span className="mr-2 text-[#B08682]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-8 bg-[#B08682]/20 rounded-2xl border border-[#B08682]/50 text-center">
          <p className="text-[#7A4A4D] italic text-sm md:text-base">
            "Every design decision is taken keeping daily usage, maintenance, and long-term comfort in mind. 
            Our goal is to deliver functional home interiors that fit your budget and lifestyle."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
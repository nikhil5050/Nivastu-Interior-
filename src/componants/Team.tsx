import React from 'react';

const teamMembers = [
  {
    name: "Aisha Sharma",
    role: "Founder & CEO",
    exprience: "15 Years",
    email: "aisha.s@nivastu.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Raj Patel",
    role: "Architect & Designer",
    exprience: "10 Years",
    email: "raj.p@nivastu.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Priya Singh",
    role: "Consultant",
    exprience: "8 Years",
    email: "priya.s@nivastu.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Vikram Mehta",
    role: "Kitchen Expert",
    exprience: "12 Years",
    email: "vikram.m@nivastu.io",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
  },
];

const Team = () => {
  return (
    <section className="bg-black text-[#D8CFBC] py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-left">
          <p className="text-center text-[#565449] uppercase tracking-[0.4em] text-xs mb-3 font-bold">Nivastu</p>
          <h2 className="text-center text-[#FFFBF4] text-4xl font-extralight tracking-[0.3em] uppercase mb-8">Our People</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Image Container with Floral White Blob Background */}
              <div className="relative w-64 h-64 mb-10 flex items-center justify-center">
                
                {/* Updated Floral White Organic Blob */}
                <div 
                  className="absolute inset-0 bg-[#FFFBF4]/10 blur-xl transition-all duration-700 group-hover:bg-[#FFFBF4]/20 group-hover:scale-110" 
                  style={{ 
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    transform: `rotate(${index * 90}deg)`, 
                  }}
                ></div>

                {/* Secondary Solid Blob for "Cut-out" feel using Olive Drab */}
                <div 
                   className="absolute inset-4 bg-[#565449] opacity-20" 
                   style={{ 
                     borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                     transform: `rotate(${index * -45}deg)`
                   }}
                ></div>
                
                {/* Profile Image - Grayscale */}
                <div className="relative w-48 h-48 overflow-hidden rounded-full z-10 border border-[#565449]/30">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                  />
                </div>
              </div>

              {/* Member Details */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-[#FFFBF4]">{member.name}</h3>
                <p className="text-[#565449] text-sm font-bold uppercase tracking-widest">{member.role}</p>
                <p className="text-[#D8CFBC]/80 text-sm font-mono">{member.exprience} Experience</p>
                <p className="text-[#D8CFBC]/60 text-sm pt-2 font-mono group-hover:text-[#FFFBF4] transition-colors">
                  {member.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
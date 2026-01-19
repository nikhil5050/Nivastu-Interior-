
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <div className="space-y-4">
          <p>We collect information to give better services and a smooth user experience. The types of information we may collect include:</p>
          <div>
            <h4 className="font-bold mb-2">a) Personal Information</h4>
            <p className="mb-2">We may collect, when you freely communicate with us through forms, WhatsApp, email, or phone:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Telephone No.</li>
              <li>City or design position</li>
              <li>Design-related information, such as property type, budget range, and design preferences</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">b) Non-Personal Information</h4>
            <p className="mb-2">As you visit our website, certain unidentified data may be collected automatically, such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address, browser types, and device information</li>
              <li>Pages visited, time spent on site, and referring URLs</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Replying to enquiries, requests, or discussion bookings</li>
          <li>Interior design, turnkey, and similar services</li>
          <li>Preparing offers, citations, and design discussions</li>
          <li>Improving our content, layout, and user experience</li>
          <li>Communicating updates or service information</li>
          <li>Marketing/Promotional conditioning (only when permissible)</li>
          <li><strong>Note:</strong> We do not sell or trade your personally identifiable information with third parties.</li>
        </ul>
      )
    },
    {
      title: "3. Cookies and Tracking Technologies",
      content: "Nivastu Interiors adopts cookies and shadowing technology to provide a better browsing experience. You can opt to switch off cookies from your browser settings; however, this could influence certain website features."
    },
    {
      title: "4. Third-Party Services",
      content: "We may employ credible third-party tools like Google Analytics, Google Search Console, and social networking sites (Instagram, Facebook). These third parties process information in accordance with their own policies. We are not responsible for the privacy practices of external sites."
    },
    {
      title: "5. How We Protect Your Information",
      content: "We take reasonable specialized measures to cover your information against unauthorized access, misuse, or loss. Security measures include restricted access and secure hosting. However, no internet transmission is 100% secure."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EF] text-[#7A4A4D] p-8 md:p-16 font-sans">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16 border-b border-[#B08682]/30 pb-8">
          <span className="text-[#B08682] text-sm mb-4 uppercase tracking-widest font-bold block">Transparency & Trust</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Privacy Policy</h1>
          <p className="text-[#B08682] font-semibold mb-8 uppercase tracking-wide">
            Last Streamlined: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            At Nivastu Interiors, which can be accessed at <a href="https://nivastuinteriors.in/" className="underline">https://nivastuinteriors.in/</a>, 
            we appreciate your trust and are committed to protecting your privacy. This policy describes how we collect, utilize, store, and protect your personal information.
          </p>
        </motion.div>

        {/* Content Body */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section key={index} variants={itemVariants} className="group">
              <h2 className="text-2xl font-serif mb-4 text-[#7A4A4D] group-hover:text-[#B08682] transition-colors">
                {section.title}
              </h2>
              <div className="text-sm md:text-base leading-relaxed opacity-80 pl-4 border-l-2 border-[#B08682]/20">
                {section.content}
              </div>
            </motion.section>
          ))}

          {/* Additional Sections */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-4">6. Data Retention</h2>
              <p className="opacity-80">We retain information only as long as required for ongoing communication, design documentation, or legal requirements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">7. Your Rights</h2>
              <p className="opacity-80">You have the right to request access, correction, or exclusion of your individual data. Contact us to exercise these rights.</p>
            </div>

            <div className="bg-[#EBE0D8] p-8 rounded-3xl border border-[#B08682]/30">
              <h2 className="text-2xl font-serif mb-4">12. Contact Information</h2>
              <p className="mb-2"><strong>Website:</strong> www.nivastuinteriors.in</p>
              <p className="mb-2"><strong>Address:</strong> Haveli, Darsh Apartments, Sahajanand Society Part 1, Mahatma Society, Kothrud, Pune, Maharashtra 411038</p>
              <p className="mb-6"><strong>Phone:</strong> +91 90759 87598</p>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#B08682' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#7A4A4D] text-[#F5F1EF] rounded-full text-sm font-medium transition-colors"
              >
                Email Support
              </motion.button>
            </div>
          </motion.section>
        </div>

        <motion.footer variants={itemVariants} className="mt-20 pt-8 border-t border-[#B08682]/30 text-center italic opacity-60 text-xs">
          This Privacy Policy is designed to comply with data protection requirements under Indian law.
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
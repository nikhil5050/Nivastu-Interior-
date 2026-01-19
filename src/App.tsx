import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componants/Header";
import Hero from "./componants/Hero";
import AboutUs from "./componants/AboutUs";
import Features from "./componants/Features";
import Services from "./componants/Services";
import Process from "./componants/Process";
import Gallery from "./componants/Gallery";
import Team from "./componants/Team";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import PrivacyPolicy from "./componants/PrivacyPolicy";
import ScrollToTop from "./componants/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="bg-[#F5F1EF] antialiased">
        <Header />
        
        <Routes>
          {/* Main Landing Page Route */}
          <Route 
            path="/" 
            element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <AboutUs />
                </section>
                <section id="features">
                  <Features />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="process">
                  <Process />
                </section>
                <section id="gallery">
                  <Gallery />
                </section>
                <section id="team">
                  <Team />
                </section>
                <section id="contact">
                  <Contact />
                </section>
                
              </>

            } 
          />

          {/* Example: Separate Gallery Page if a user visits /portfolio */}
          <Route path="/portfolio" element={<Gallery />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
        </Routes>
        
        <Footer />
      </main>
    </Router>
  );
}

export default App;
import React from "react";
import Header from "./componants/Header";
import Hero from "./componants/Hero";
import AboutUs from "./componants/AboutUs";
import Features from "./componants/Features";
import Services from "./componants/Services";
import Gallery from "./componants/Gallery";
import Team from "./componants/Team";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";

function App() {
  return (
    <main className="bg-black antialiased">
      <Header />
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
      <section id="gallery">
        <Gallery />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default App;

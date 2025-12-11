import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyCartagena from './components/WhyCartagena';
import Services from './components/Services';
import Web3Section from './components/Web3Section';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-cartagena-dark text-white font-sans selection:bg-cartagena-teal selection:text-cartagena-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyCartagena />
        <Services />
        <Web3Section />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
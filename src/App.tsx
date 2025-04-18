import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './components/animations.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Brainbox - Where AI meets your toolbox';
    
    // Implement scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="animate-fadeIn">
          <Hero />
        </div>
        
        <div className="reveal-on-scroll">
          <Features />
        </div>
        
        <div className="reveal-on-scroll">
          <HowItWorks />
        </div>
        
        <div className="reveal-on-scroll">
          <Testimonials />
        </div>
        
        <div className="reveal-on-scroll">
          <FAQ />
        </div>
        
        <div className="reveal-on-scroll">
          <CTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
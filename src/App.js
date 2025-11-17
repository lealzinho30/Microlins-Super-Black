import React from 'react';
import FixedCTA from './components/FixedCTA';
import UrgencyBar from './components/UrgencyBar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import HowToGet from './components/HowToGet';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import MouseFollower from './components/MouseFollower';
import HoverGlow from './components/HoverGlow';

function App() {
  return (
    <div className="App relative">
      {/* Efeitos de mouse interativos */}
      <InteractiveBackground />
      <MouseFollower />
      <HoverGlow />
      
      {/* Conteúdo */}
      <UrgencyBar />
      <FixedCTA />
      <Hero />
      <SocialProof />
      <Courses />
      <Stats />
      <HowToGet />
      <Benefits />
      <Comparison />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

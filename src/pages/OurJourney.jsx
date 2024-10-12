import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../utils/particles.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../utils/ourjourney.css";
import { HeroSection } from '../components/hero-section';
import { TimelineSection } from '../components/timeline-section';
import BVideo from '../components/journey_vid';

const OurJourney = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="relative">
      <Particles
        options={particlesOptions}
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%" }}
      />
      <div className="relative z-10">
        <Navbar />
        <div className="text-4xl font-extrabold leading-tight tracking-tight sm:text-4xl  mx-auto text-center p-5 text-white">
          <br /> Our Journey
        </div>
        <div>
        <HeroSection />
        <TimelineSection />
        <BVideo />
        
        </div>




        <Footer />
      </div>
    </div>
  );
};

export default OurJourney;

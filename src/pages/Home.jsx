import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../utils/particles.json";

import Content from "../components/Content";

const Home = () => {
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
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

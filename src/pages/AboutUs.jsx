import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../utils/particles.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutimg from '../assets/groupphoto.png';


const AboutUs = () => {
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
      <div className="relative z-10" >
      <Navbar />

      <div className="text-4xl font-extrabold leading-tight tracking-tight sm:txt-4xl text-white mx-auto text-center p-5 ">
          <br /> About Us 
       </div>

      <div className=" grid-row-1 mt-12 text-justify sm:mt-16 gap-x-20 gap-y-12 sm:grid-row-2 lg:grid-row-3 px-20"> 
            <p className="text-lg font-normal text-gray-200 ">
            <p>Welcome,<br />
            Greetings and welcome to the Phoenix Cybersecurity Forum, where creativity and experience come together to address the always-changing problems of the digital era. As we traverse the complexities of our linked world, protecting our digital assets and maintaining our privacy become critical needs.</p><br />
            <ul class="list-disc">
              <li>Leading authorities, business titans, and fervent enthusiasts come together in our forum, which acts as a knowledge crucible, to analyse the newest trends, exchange best practices, and map out the path for a more secure future.</li><br />
              <li>We cover a wide range of subjects in our workshops, from emerging technology and regulatory compliance to threat intelligence and risk mitigation techniques. Our objective is to foresee and adjust to the issues of the future in addition to comprehending the cybersecurity landscape as it exists today.</li><br />
              <li>To foster a collaborative and shared learning environment, we cordially invite you to fully engage in the discussions, establish meaningful relationships, and depart with practical insights. As we set out on this shared path to a safer digital world, let's fan the flames of creativity and adaptability together.</li><br />
              <li>The forum is a place to share ideas, share experiences, and share knowledge.</li><br />
            </ul>
           </p>
        </div> 

        {/* <div className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:txt-4xl dark:text-white mx-auto text-center p-5 ">
          <br /><br /> Objective <br />
       </div> */}

       
          <figure class="max-w-2xl mx-auto">
            <img class="h-auto max-w-full rounded-lg" src={aboutimg} alt="Our Team"/> 
            <figcaption class="mt-2 text-sm text-center text-gray-400">Our Team</figcaption>
          </figure>

       
      <Footer />
      </div>
    </div>
  );
};

export default AboutUs;

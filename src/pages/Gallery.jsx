import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../utils/particles.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
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
      
      <div>
          <div><br />
            <br />
            <br />
            <h1 className="text-5xl font-bold text-white text-center"> Mobile Exploitation Workshop</h1> <br />
         </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6" >
          <div>
                <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/moblie%20security%20workshop/WhatsApp%20Image%202024-10-01%20at%2022.08.47_4ccc51aa.jpg?raw=true" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/moblie%20security%20workshop/WhatsApp%20Image%202024-10-01%20at%2022.08.47_6213395d.jpg?raw=true" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/moblie%20security%20workshop/WhatsApp%20Image%202024-10-01%20at%2022.08.47_b23231c2.jpg?raw=true" alt="" />
            </div>
          </div>

      </div>




      <div>
          <div><br />
            <br />
            <br />
            <h1 className="text-5xl font-bold text-white text-center">Forum Estabilishment</h1> <br />
         </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6" >
          <div>
                <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/inaguration/WhatsApp%20Image%202024-10-01%20at%2022.07.05_b3af165a.jpg?raw=true" alt="" />
            </div>

            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/inaguration/WhatsApp%20Image%202024-10-01%20at%2022.07.05_f5b4ea31.jpg?raw=true" alt="" />
              </div>
          </div>

      </div>
      


      <div>
             <div><br />
                <br />
                <br />
                <h1 className="text-5xl font-bold text-white text-center">EncipherX 2.0</h1> <br />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/encipherx2/WhatsApp%20Image%202024-10-01%20at%2022.07.05_a660627a.jpg?raw=true" alt="" />
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/encipherx2/WhatsApp%20Image%202024-10-01%20at%2022.07.05_b78c306f.jpg?raw=true" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src=".\src\assets\media\WhatsApp Image 2024-06-26 at 19.40.26_fcaabe2e.jpg" alt="" />
              </div>
              {/* <div>
                <img className="h-auto max-w-full rounded-lg" src="./src/assets/media/WhatsApp Image 2024-06-26 at 19.43.17_e746d48a.jpg" alt="" />
              </div> */}
              <div>
                <img className="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
          </div>
      </div> 



        <div>
          <div>
          <div>
            <h1 className="text-5xl font-bold text-white text-center">EncipherX 1.0</h1> <br />
          </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">       
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/encipherx1/WhatsApp%20Image%202024-10-01%20at%2022.10.44_6fd853b9.jpg?raw=true" alt="encipherx1" />
          </div>

          <div>
            <img className="h-auto w-auto max-w-full rounded-lg" src="https://github.com/cutiepie2468/phxwebpic/blob/main/encipherx1/WhatsApp%20Image%202024-10-01%20at%2022.11.57_ae00aef4.jpg?raw=true" alt="encipherx1" />
          </div>
          </div>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default Gallery;

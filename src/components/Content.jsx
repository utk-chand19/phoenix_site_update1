import React, { useState, useEffect, useMemo } from "react";
import VM from "./VM";
import Video from "./Video";"./Video"
import img1 from '../assets/colagenemf.png'
import img2 from '../assets/banner.png'


const Content = () => {
  return (
      <div>

        <section className="" >
                {/* <img src={bg} alt="" className="h-screen w-full" /> */}
                <div className="max-w-screen-xl pt-10 lg:pt-0 xl:pt-0 md:pt-0 px-4 mx-auto lg:px-6 ">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="w-auto h-auto ">
                      <img src={img1} alt="Phoenix" />
                    </div>
                    <div className="text-3xl font-extrabold leading-tight tracking-tight sm:txt-xl md:txt-xl text-white">
                        Department of Computer Science and Engineering <br />(Cyber Security) <br />
                    </div>
                    
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:txt-4xl text-white">
                      <img
                        src={img2}
                        alt="Phoenix"
                      />{" "}
                      Welcome to Phoenix Cybersecurity
                    </h1>
                  
                    
                    <h3 className="mt-1 text-4xl font-semibold sm:text-xl text-gray-400 p-4">
                    
                      "Elevating the Cyber Space"
                    </h3>
                  </div>
                  < VM />

                  
                  <Video />
                </div>
            </section>

      </div>

    

  );
};

export default Content;

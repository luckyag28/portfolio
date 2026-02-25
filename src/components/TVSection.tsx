"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TVSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top", 
      end: "+=500",     
      scrub: true,      
      animation: gsap.to(arrowRef.current, { opacity: 0, y: 20 }),
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
      
     
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
       
        <div className="relative w-[80vw] max-w-[1000px] aspect-video flex items-center justify-center">
          
         
          <video
            className="absolute top-[5%] left-[5%] w-[90%] h-[90%] object-cover z-0"
            src="/videos/tv-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          
         
          <img
            className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
            src="/images/tv-frame.png"
            alt="TV Frame"
          />
        </div>

       
        <div className="absolute inset-0 z-20 pointer-events-none mix-blend-difference text-white">
          
          
          <div className="absolute top-8 left-8 md:top-12 md:left-12">
            <h3 className="font-serif text-2xl md:text-3xl uppercase">Left Top</h3>
          </div>

         
          <div className="absolute top-8 right-8 md:top-12 md:right-12 text-right">
            <h3 className="font-serif text-2xl md:text-3xl uppercase">Right Top</h3>
          </div>

         
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h2 className="font-serif text-6xl md:text-[8rem] leading-none uppercase tracking-tight">
              Main Hero Title
            </h2>
          </div>

          
          <div 
            ref={arrowRef}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="mb-3 font-body text-xs tracking-[0.3em] uppercase opacity-70">
              Scroll
            </span>
           
            <div className="w-px h-16 bg-white opacity-70"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
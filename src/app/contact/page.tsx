"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { markLandingPlayed } from "@/app/page";

export default function ContactPage() {
  const container = useRef(null);

  useGSAP(() => {
   
    gsap.fromTo(container.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );

    
    gsap.from(".reveal-item", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3
    });

  }, { scope: container });

  return (
    <main ref={container} className="relative w-full h-screen bg-[#111111] text-white font-instrument-regular overflow-hidden opacity-0">
      
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        src="/videos/contact.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      
     
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

      {/* Nav Bar */}
      <nav className="absolute top-8 left-10 right-10 md:top-10 md:left-12 md:right-12 flex justify-between items-start z-50 text-white uppercase tracking-widest drop-shadow-md">
        <div className="w-1/3 text-left text-[14px] md:text-[20px]">
       <Link href="/" onClick={markLandingPlayed} className="hover:text-gray-300 transition-colors">LUCKY NAVIN AGRAWAL</Link>
        </div>
        <div className="w-1/3 flex justify-center gap-12 text-[14px] md:text-[20px] text-gray-200">
          <Link href="/about" className="hover:text-white transition-opacity">ABOUT</Link>
          <Link href="/#work" className="hover:text-white transition-opacity">WORK</Link>
          <Link href="/contact" className="hover:text-white transition-opacity">CONTACT</Link>
        </div>
        <div className="w-1/3 text-right text-[14px] md:text-[20px] text-gray-200">PORTFOLIO 2026</div>
      </nav>

     
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
        
        <h1 className="reveal-item font-instrument-italic text-[32px] sm:text-[40px] md:text-[55px] lg:text-[60px] text-white drop-shadow-2xl mb-6 pointer-events-auto">
          Open to collaborations and conversations.
        </h1>

       
        <div className="reveal-item w-[50%] md:w-[30%] max-w-[400px] border-t border-white/40 mb-6 drop-shadow-lg"></div>

       
        <div className="flex flex-col items-center gap-1 md:gap-2 pointer-events-auto">
          
          <div className="reveal-item">
            <a 
              href="mailto:luckynavinagrawal@gmail.com" 
              className="inline-block font-instrument-regular text-[28px] sm:text-[45px] md:text-[55px] leading-[1.1] text-white hover:text-gray-300 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 drop-shadow-2xl cursor-pointer"
            >
              luckynavinagrawal@gmail.com
            </a>
          </div>

          <div className="reveal-item">
            <a 
              href="https://www.linkedin.com/in/luckynavin/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block font-instrument-regular text-[28px] sm:text-[45px] md:text-[55px] leading-[1.1] text-white hover:text-gray-300 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 drop-shadow-2xl cursor-pointer"
            >
              LinkedIn
            </a>
          </div>

          <div className="reveal-item">
            <a 
              href="https://www.instagram.com/lucky_ag28" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block font-instrument-regular text-[28px] sm:text-[45px] md:text-[55px] leading-[1.1] text-white hover:text-gray-300 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 drop-shadow-2xl cursor-pointer"
            >
              Instagram
            </a>
          </div>

        </div>

      </div>

      {/* Footer text */}
      <div className="absolute bottom-8 left-10 right-10 md:bottom-8 md:left-12 md:right-12 z-10 flex justify-between items-center border-t border-white/40 pt-4 text-white drop-shadow-md pointer-events-none">
        <span className="font-instrument-regular text-[14px] md:text-[18px]">2026</span>
        <span className="font-instrument-regular text-[14px] md:text-[18px]">LNA</span>
      </div>

    </main>
  );
}
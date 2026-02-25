"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { markLandingPlayed } from "@/app/page";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const NextProjectItem = ({ src, title, href }: { src: string, title: string, href: string }) => (
  <Link href={href} className="reveal-next-projects group flex flex-col gap-4 cursor-pointer">
    <div className="relative w-full aspect-square border border-white/5 overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="px-1">
      <h3 className="font-instrument-regular text-[16px] md:text-[20px] leading-none text-white">
        {title}
      </h3>
    </div>
  </Link>
);

export default function DieselPage() {
  const container = useRef(null);
  
  
  const [isFlipped, setIsFlipped] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
   
    gsap.fromTo(container.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );

    
    gsap.delayedCall(0.5, () => ScrollTrigger.refresh());
    gsap.delayedCall(1.5, () => ScrollTrigger.refresh());

    
    gsap.from(".reveal-text", {
      y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2
    });

   
    gsap.fromTo(".reveal-video", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".video-section", start: "top 85%" } }
    );

    
    gsap.fromTo(".reveal-grid", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".grid-section", start: "top 85%" } }
    );

  
    gsap.fromTo(".reveal-grid-4", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".grid-4-section", start: "top 85%" } }
    );

   
    gsap.fromTo(".reveal-tools", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".tools-section", start: "top 85%" } }
    );


    gsap.fromTo(".reveal-next-projects", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".next-projects-section", start: "top 85%" } }
    );

  }, { scope: container });

  return (
    <main ref={container} className="relative w-full bg-[#111111] text-white font-instrument-regular min-h-screen opacity-0 overflow-x-hidden">
      
      {/* Nav Bar */}
      <nav className="absolute top-8 left-10 right-10 md:top-10 md:left-12 md:right-12 flex justify-between items-start z-[100] text-white uppercase tracking-widest drop-shadow-md">
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

      {/* --- SECTION 1: HEADER --- */}
      <section className="relative w-full min-h-[60vh] pt-32 md:pt-48 px-10 md:px-12 pb-16 flex flex-col justify-end border-none">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div className="mb-12">
              <h3 className="reveal-text text-white text-[20px] md:text-[26px] mb-2">/ Selected Work</h3>
              <h1 className="reveal-text font-instrument-regular text-[80px] md:text-[120px] leading-[0.8] tracking-tighter uppercase">
                DIESEL
              </h1>
            </div>
            
            <div className="reveal-text">
              <h3 className="text-white text-[20px] md:text-[26px] mb-4">/ Role</h3>
              <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6]">
                Art Direction, Concept Development, Visual Design, Motion & Film<br/>Direction, Campaign Systems
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col md:pl-10 h-full">
            <h3 className="reveal-text text-white text-[20px] md:text-[26px] mb-6">/ About the Project</h3>
            <div className="reveal-text text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6] flex flex-col gap-6 text-justify">
              <p>An unofficial conceptual campaign reimagining the Diesel 1DR bag through cinematic storytelling and speculative visual design. The project explores resilience, movement, and survival within contemporary fashion culture.</p>
              <p>Anchored by a short film, posters, and large-scale mockups, the campaign transforms the bag from an accessory into a symbol of adaptability and strength.</p>
              <p>Inspired by the centipede as a metaphor for persistence and evolution, the visual system blends organic and mechanical elements across physical and digital spaces.</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: VIDEO PREVIEW --- */}
      <section className="video-section relative w-full bg-[#111111] px-10 md:px-12 pt-8 pb-16 z-10 border-none">
        <div className="reveal-video relative w-full max-w-[1400px] mx-auto">
          <div className="relative w-full border border-[#2a2a2a] p-1 md:p-2 bg-[#0a0a0a]">
            <video className="w-full h-auto object-cover" src="/videos/diesel-preview.mp4" autoPlay loop muted playsInline />
            <a href="https://youtu.be/1vMyyaEkHHY" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black text-white text-[16px] md:text-[20px] px-4 md:px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 z-10 drop-shadow-xl">
              Watch Full Film
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: IMAGE GRID & PALETTE --- */}
      <section className="grid-section relative w-full bg-[#111111] px-10 md:px-12 pt-10 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full">
            <div className="reveal-grid relative aspect-[2/3] w-full border border-white/10">
              <Image src="/images/diesel-1.avif" alt="Built To Survive Poster" fill className="object-cover" />
            </div>
            <div className="reveal-grid relative aspect-[2/3] w-full border border-white/10">
              <Image src="/images/diesel-2.avif" alt="A Cinematic Campaign Poster" fill className="object-cover" />
            </div>
            <div className="reveal-grid md:col-span-2 relative w-full h-full min-h-[300px] border border-white/10">
              <Image src="/images/diesel-3.avif" alt="Diesel 1DR Display" fill className="object-cover object-top" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mt-2 md:mt-4 w-full">
            <div className="reveal-grid md:col-span-8 relative w-full border border-white/5">
              <Image src="/images/diesel-4.avif" alt="Diesel Color Palette" width={1000} height={200} className="w-full h-auto object-cover" />
            </div>
            <div className="reveal-grid md:col-span-4 flex items-start">
              <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6] text-justify">
                A visual system built on industrial storytelling, monochrome tones, and bold red accents, exploring movement and resilience. The project blends structure and atmosphere to create a cohesive, cinematic identity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: LARGE MOCKUP GRID --- */}
      <section className="grid-4-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 md:gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[300px] md:h-[500px]">
             <div className="reveal-grid-4 md:col-span-8 relative w-full h-full border border-white/10">
               <Image src="/images/diesel-5.avif" alt="Diesel Billboard Wide" fill className="object-cover" />
             </div>
             <div className="reveal-grid-4 md:col-span-4 relative w-full h-full border border-white/10">
               <Image src="/images/diesel-6.avif" alt="Diesel Billboard Vertical" fill className="object-cover" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[400px] md:h-[600px]">
             <div className="reveal-grid-4 md:col-span-4 relative w-full h-full border border-white/10 cursor-pointer overflow-hidden group" onClick={() => setIsFlipped(!isFlipped)} title="Click to flip image">
               <Image src="/images/diesel-7-1.avif" alt="Diesel Bag Concept 1" fill className={`object-cover transition-opacity duration-1000 ${isFlipped ? 'opacity-0' : 'opacity-100'}`} />
               <Image src="/images/diesel-7-2.avif" alt="Diesel Bag Concept 2" fill className={`object-cover transition-opacity duration-1000 ${isFlipped ? 'opacity-100' : 'opacity-0'}`} />
             </div>

           <div className="reveal-grid-4 md:col-span-2 relative w-full h-full pb-8">
               <Image 
                 src="/images/diesel-8.avif" 
                 alt="Diesel Red Logo" 
                 fill 
                 className="object-contain object-bottom translate-x-4 md:translate-x-0" 
               />
             </div>

             <div className="reveal-grid-4 md:col-span-6 relative w-full h-full border border-white/10">
               <Image src="/images/diesel-9.avif" alt="Diesel Subway Campaign" fill className="object-cover" />
             </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4.5: TOOLS & SKILLS --- */}
      <section className="tools-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-8">
          <div className="reveal-tools">
            <h3 className="text-white text-[20px] md:text-[24px] mb-2">/ Tools</h3>
            <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6]">
              Blender, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premiere Pro, Medibang Paint Pro
            </p>
          </div>
          <div className="reveal-tools">
            <h3 className="text-white text-[20px] md:text-[24px] mb-2">/ Skills</h3>
            <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6]">
              Art Direction, Creative Direction, Visual Storytelling, Brand Systems, 3D Visualization, Motion Design, Typography, Campaign Design
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: OTHER PROJECTS --- */}
      
      <section className="next-projects-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 flex flex-col items-center z-20 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-10">
          
          <div className="reveal-text">
             <h2 className="text-[35px] md:text-[50px] text-white leading-none">
               Other <span className="font-instrument-italic">Projects</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
        <NextProjectItem href="/lucent" src="/images/lucent.avif" title="02. lucent" />
            <NextProjectItem href="/solae" src="/images/solae.avif" title="03. Solaé" />
            <NextProjectItem href="/parallel-titles" src="/images/pixel-4.jpg" title="04. Parallel Titles" />
          </div>

        </div>
      </section>

     {/* --- SECTION 5: CONTACT --- */}
      <section id="contact" className="contact-section relative w-full h-screen bg-[#111111] overflow-hidden flex items-center justify-center">
        
        <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-[#111111] to-transparent z-[5] pointer-events-none"></div>

        <div className="contact-container w-full h-full relative overflow-hidden">
          
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover z-0" 
            src="/videos/contact-bg.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          
          <div className="absolute inset-0 bg-[#111111]/10 z-0 pointer-events-none"></div>

          <div className="absolute top-24 right-10 md:top-24 md:right-16 z-10 text-right pointer-events-none">
            <p className="font-instrument-italic text-[35px] md:text-[50px] text-white drop-shadow-lg">
              Open to collaborations and conversations.
            </p>
          </div>

          <div className="absolute bottom-28 left-10 md:bottom-32 md:left-16 z-10 flex flex-col items-start gap-1">
            <a 
              href="mailto:luckynavinagrawal@gmail.com" 
              className="font-instrument-regular text-[28px] sm:text-[40px] md:text-[55px] leading-[1.1] text-white hover:text-gray-300 transition-colors drop-shadow-lg"
            >
              luckynavinagrawal@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/luckynavin/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-instrument-regular text-[28px] sm:text-[40px] md:text-[55px] leading-[1.1] text-white hover:text-gray-300 transition-colors drop-shadow-lg"
            >
              LinkedIn
            </a>
          </div>

          <div className="absolute bottom-8 left-10 right-10 md:bottom-8 md:left-16 md:right-16 z-10 flex justify-between items-center border-t border-white/40 pt-4 text-white drop-shadow-md">
            <span className="font-instrument-regular text-[14px] md:text-[18px]">2026</span>
            <span className="font-instrument-regular text-[14px] md:text-[18px]">LNA</span>
          </div>

        </div>
      </section>

    </main>
  );
}
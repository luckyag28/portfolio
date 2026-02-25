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

export default function LucentPage() {
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

 
    gsap.from(".reveal-img", {
      y: 50, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", 
      scrollTrigger: { trigger: ".grid-section", start: "top 80%" }
    });

    
    gsap.from(".reveal-img-2", {
      y: 50, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", 
      scrollTrigger: { trigger: ".grid-section-2", start: "top 80%" }
    });

    
    gsap.fromTo(".reveal-billboard", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".billboard-section", start: "top 85%" } }
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
              <h1 className="reveal-text font-instrument-regular text-[80px] md:text-[120px] leading-[0.8] tracking-tighter lowercase">
                lucent
              </h1>
            </div>
            
            <div className="reveal-text">
              <h3 className="text-white text-[20px] md:text-[26px] mb-4">/ Role</h3>
              <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6]">
                Art Direction, Brand Strategy, Concept Development, Visual Design, Motion &amp; Film Direction, Packaging Design, Campaign Systems
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col md:pl-10 h-full">
            <h3 className="reveal-text text-white text-[20px] md:text-[26px] mb-6">/ About the Project</h3>
            <div className="reveal-text text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6] flex flex-col gap-6 text-justify">
              <p>
                Lucent is a conceptual brand and cinematic campaign exploring stillness, memory, and emotional sustainability through everyday rituals.
              </p>
              <p>
                The project reimagines a modern lifestyle brand focused on home and self-care essentials including candles, fragrances, skincare, and wellness products. Each item is designed as a quiet source of comfort, encouraging slower living.
              </p>
              <p>
                At the heart of the campaign is an original short film following a glowing solitary figure through abandoned urban and natural spaces. Through visual storytelling and narration, the film reflects themes of loss, resilience, and reconnection, revealing the human presence beneath artificial brightness.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: VIDEO PREVIEW --- */}
      <section className="video-section relative w-full bg-[#111111] px-10 md:px-12 pt-8 pb-16 z-10 border-none">
        <div className="reveal-video relative w-full max-w-[1400px] mx-auto aspect-video">
          <div className="relative w-full h-full border border-white/10 bg-[#0a0a0a]">
            <video 
              className="w-full h-full object-cover" 
              src="/videos/lucent-preview.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
            <a 
              href="https://youtu.be/Z_e5fLul0Ew" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/80 backdrop-blur-sm text-white text-[14px] md:text-[18px] px-4 md:px-6 py-2 border border-white/40 hover:bg-white hover:text-black transition-colors duration-300 z-10 drop-shadow-xl"
            >
              Watch Full Film
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: VISUAL IDENTITY GRID --- */}
      <section className="grid-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-8">
          
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6 items-start">
            <div className="reveal-img relative w-full md:w-1/4 border border-white/5">
              <Image src="/images/1.avif" alt="Lucent Poster 1" width={600} height={900} className="w-full h-auto object-cover" />
            </div>
            <div className="reveal-img relative w-full md:w-1/2 border border-white/5">
              <Image src="/images/2.avif" alt="Lucent Typography" width={1200} height={900} className="w-full h-auto object-cover" />
            </div>
            <div className="reveal-img relative w-full md:w-1/4 border border-white/5">
              <Image src="/images/3.avif" alt="Lucent Poster 2" width={600} height={900} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-stretch w-full gap-8 md:gap-6 mt-4">
            <div className="reveal-img relative w-full md:w-2/3 border border-white/5 flex">
              <Image src="/images/4.avif" alt="Lucent Color Palette" width={1200} height={400} className="w-full h-auto object-cover" />
            </div>
            
            <div className="reveal-img w-full md:w-1/3 flex flex-col justify-between md:pl-4 py-1">
              <p className="text-[#b3b3b3] text-[15px] md:text-[17px] leading-[1.6] text-justify">
                The visual system combines muted earthy palettes, soft typography, and restrained motion with moments of warmth and luminosity. Packaging, posters, digital layouts, and environmental mockups extend this narrative into physical and digital spaces, creating a cohesive brand universe.
              </p>
              <p className="text-[#b3b3b3] text-[15px] md:text-[17px] leading-[1.6] text-justify mt-8 md:mt-0">
                Lucent positions self-care not as luxury, but as remembrance, presence, and emotional grounding. A reminder that comfort, healing, and belonging can exist in the smallest daily rituals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: PRODUCT & PACKAGING GRID --- */}
      <section className="grid-section-2 relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 md:gap-6">
          
         
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[400px] md:h-[600px]">
             
             <div className="reveal-img-2 md:col-span-4 relative w-full h-full border border-white/10">
               <Image src="/images/5.avif" alt="Lucent Perfume" fill className="object-cover" />
             </div>
             
             <div className="reveal-img-2 md:col-span-3 relative w-full h-full">
               <Image src="/images/6.avif" alt="Lucent Tall Box" fill className="object-contain" />
             </div>
             
             <div className="reveal-img-2 md:col-span-5 relative w-full h-full cursor-pointer overflow-hidden group" onClick={() => setIsFlipped(!isFlipped)} title="Click to flip image">
               <Image src="/images/7 (1).avif" alt="Lucent Box 1" fill className={`object-contain transition-opacity duration-1000 ${isFlipped ? 'opacity-0' : 'opacity-100'}`} />
               <Image src="/images/7 (2).avif" alt="Lucent Box 2" fill className={`object-contain transition-opacity duration-1000 ${isFlipped ? 'opacity-100' : 'opacity-0'}`} />
             </div>

          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[300px] md:h-[500px]">
             
             <div className="reveal-img-2 md:col-span-6 relative w-full h-full border border-white/10">
               <Image src="/images/8.avif" alt="Lucent Billboard" fill className="object-cover" />
             </div>
             
             <div className="reveal-img-2 md:col-span-5 relative w-full h-full border border-white/10">
               <Image src="/images/9.avif" alt="Lucent Candles" fill className="object-cover" />
             </div>
             
             <div className="reveal-img-2 md:col-span-1 relative w-full h-full pb-8">
               <Image src="/images/lucent_logo.avif" alt="Lucent Logo" fill className="object-contain object-right object-bottom" />
             </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 5: LARGE BILLBOARD --- */}
      <section className="billboard-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="reveal-billboard relative w-full max-w-[1400px] mx-auto">
          <div className="relative w-full border border-white/10 bg-[#0a0a0a] overflow-hidden">
            <Image 
              src="/images/11.avif" 
              alt="Lucent Large Billboard" 
              width={1920} 
              height={1080} 
              className="w-full h-auto block" 
              unoptimized
            />
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
            <NextProjectItem href="/diesel" src="/images/pixel-1.jpg" title="01. DIESEL" />
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
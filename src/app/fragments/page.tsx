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


const rhodeImages = [
  "/images/fragments-1-1.jpg",
  "/images/fragments-1-2.jpg",
  "/images/fragments-1-3.jpg"
];

export default function FragmentsPage() {
  const container = useRef(null);

 
  const [rhodeIndex, setRhodeIndex] = useState(0);
  const [isTypeFlipped, setIsTypeFlipped] = useState(false);

  useEffect(() => {
    const rhodeInterval = setInterval(() => {
      setRhodeIndex((prev) => (prev + 1) % rhodeImages.length);
    }, 2500);

    const typeInterval = setInterval(() => {
      setIsTypeFlipped((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(rhodeInterval);
      clearInterval(typeInterval);
    };
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

   
    gsap.from(".reveal-grid", {
      y: 50, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", 
      scrollTrigger: { trigger: ".grid-section", start: "top 80%" }
    });

    
    gsap.from(".reveal-type", {
      y: 50, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", 
      scrollTrigger: { trigger: ".type-section", start: "top 80%" }
    });

   
    gsap.fromTo(".reveal-diesel", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".diesel-section", start: "top 85%" } }
    );

   
    gsap.fromTo(".reveal-tools", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".tools-section", start: "top 85%" } }
    );

   
    gsap.fromTo(".reveal-next-projects", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".next-projects-section", start: "top 85%" } }
    );

    
    gsap.fromTo(".contact-container", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, scrollTrigger: { trigger: ".contact-section", start: "top 85%", end: "center center", scrub: 1.5 } }
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
              <h1 className="reveal-text font-instrument-regular text-[70px] md:text-[110px] lg:text-[120px] leading-[0.8] tracking-tighter">
                Fragments
              </h1>
            </div>
            
            <div className="reveal-text">
              <h3 className="text-white text-[20px] md:text-[26px] mb-4">/ Role</h3>
              <p className="text-[#b3b3b3] text-[18px] md:text-[20px] leading-[1.6] max-w-[500px]">
                Art Direction, Concept Development, Visual Design, Typography, Motion Design, 2D &amp; 3D Exploration
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col md:pl-10 h-full">
            <h3 className="reveal-text text-white text-[20px] md:text-[26px] mb-6">/ About the Project</h3>
            <div className="reveal-text text-[#b3b3b3] text-[18px] md:text-[20px] leading-[1.6] flex flex-col gap-6 text-justify max-w-[850px]">
              <p>
                Fragments is a collection of miscellaneous works and exploratory design pieces created outside structured projects. It includes typography explorations, motion design, 2D and 3D compositions, poster design, and visual experiments across different mediums.
              </p>
              <p>
                These works focus on testing ideas, refining visual language, and exploring composition, movement, and materiality. Most are process-driven, created to experiment with form, rhythm, and interaction rather than final outcomes.
              </p>
              <p>
                This section reflects an ongoing practice of exploration, contributing to a broader understanding of visual design and creative direction.
              </p>
            </div>
          </div>

        </div>
      </section>

  
      <section className="video-section relative w-full bg-[#111111] px-10 md:px-12 pt-8 pb-16 z-10 border-none">
        <div className="reveal-video relative w-full max-w-[1400px] mx-auto border border-white/10 bg-[#0a0a0a] overflow-hidden">
          
          <video 
            className="w-full h-auto block" 
            src="/videos/fragments-film.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          
       
          <a 
            href="https://youtu.be/Yx8iMlX-Avw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 border border-white/80 bg-[#111111] px-4 md:px-6 py-1.5 md:py-2 text-white font-instrument-regular text-[16px] md:text-[22px] transition-all hover:bg-white hover:text-black shadow-lg"
          >
            Watch Full Film
          </a>

        </div>
      </section>

      {/* --- SECTION 3: MASONRY EXPLORATION GRID --- */}
      <section className="grid-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-12 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 md:gap-6">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[400px] md:h-[500px]">
             <div className="reveal-grid md:col-span-3 relative w-full h-full border border-white/10 overflow-hidden cursor-pointer">
                {rhodeImages.map((src, i) => (
                  <Image key={i} src={src} alt={`Rhode Concept ${i+1}`} fill className={`object-cover transition-opacity duration-1000 ${rhodeIndex === i ? 'opacity-100' : 'opacity-0'}`} />
                ))}
             </div>
             <div className="reveal-grid md:col-span-5 relative w-full h-full border border-white/10">
               <Image src="/images/fragments-3.avif" alt="Mannequin on Bed" fill className="object-cover" />
             </div>
             <div className="reveal-grid md:col-span-4 relative w-full h-full border border-white/10">
               <Image src="/images/fragments-2.avif" alt="Hand & Wine" fill className="object-cover" />
             </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[400px] md:h-[500px]">
             <div className="reveal-grid md:col-span-4 relative w-full h-full border border-white/10">
               <Image src="/images/fragments-4.avif" alt="Lying Mannequin" fill className="object-cover" />
             </div>
             <div className="reveal-grid md:col-span-5 relative w-full h-full border border-white/10 bg-black overflow-hidden">
               <video src="/videos/fragments-5.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-[1.05]" />
             </div>
             <div className="reveal-grid md:col-span-3 relative w-full h-full border border-white/10">
               <Image src="/images/fragments-6.avif" alt="Mirror Mannequin" fill className="object-cover" />
             </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: TYPOGRAPHY EXPLORATION GRID --- */}
      <section className="type-section relative w-full bg-[#111111] px-10 md:px-12 pt-8 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16 lg:gap-x-20 lg:gap-y-20 items-center justify-items-center">
           
           <div className="reveal-type relative w-full h-[120px] sm:h-[180px] md:h-[250px] lg:h-[300px]">
              <Image src="/images/fragments-7-1.avif" alt="Typography 7" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-0' : 'opacity-100'}`} />
              <Image src="/images/fragments-7-2.avif" alt="Typography 7 Alt" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-100' : 'opacity-0'}`} />
           </div>

           <div className="reveal-type relative w-full h-[120px] sm:h-[180px] md:h-[250px] lg:h-[300px]">
              <Image src="/images/fragments-8-1.avif" alt="Typography 8" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-0' : 'opacity-100'}`} />
              <Image src="/images/fragments-8-2.avif" alt="Typography 8 Alt" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-100' : 'opacity-0'}`} />
           </div>

           <div className="reveal-type relative w-full h-[120px] sm:h-[180px] md:h-[250px] lg:h-[300px]">
              <Image src="/images/fragments-10-1.avif" alt="Typography 10" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-0' : 'opacity-100'}`} />
              <Image src="/images/fragments-10-2.avif" alt="Typography 10 Alt" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-100' : 'opacity-0'}`} />
           </div>

           <div className="reveal-type relative w-full h-[120px] sm:h-[180px] md:h-[250px] lg:h-[300px]">
              <Image src="/images/fragments-9-1.avif" alt="Typography 9" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-0' : 'opacity-100'}`} />
              <Image src="/images/fragments-9-2.avif" alt="Typography 9 Alt" fill className={`object-contain transition-opacity duration-1000 ${isTypeFlipped ? 'opacity-100' : 'opacity-0'}`} />
           </div>

        </div>
      </section>

      {/* --- SECTION 5: DIESEL VIDEO BANNER --- */}
      <section className="diesel-section relative w-full bg-[#111111] px-10 md:px-12 pt-8 pb-16 z-10 border-none">
        <div className="reveal-diesel relative w-full max-w-[1400px] mx-auto border border-white/10 bg-[#0a0a0a] overflow-hidden">
          <video 
            className="w-full h-auto block" 
            src="/videos/fragments-diesel.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>
      </section>

      {/* --- SECTION 6: TOOLS & SKILLS --- */}
      <section className="tools-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-8">
          <div className="reveal-tools">
            <h3 className="text-white text-[20px] md:text-[24px] mb-2">/ Tools</h3>
            <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6]">
               Blender, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premiere Pro, After Effects, Medibang Paint Pro, Canva
            </p>
          </div>
          <div className="reveal-tools">
            <h3 className="text-white text-[20px] md:text-[24px] mb-2">/ Skills</h3>
            <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6]">
              Art Direction, Creative Direction, Visual Storytelling, Brand Identity Systems, 3D Visualization, Motion & Film Design, Typography, Packaging Design
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: OTHER PROJECTS --- */}
      <section className="next-projects-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 flex flex-col items-center z-20 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-10">
          
          <div className="reveal-text">
             <h2 className="text-[35px] md:text-[50px] text-white leading-none">
               Other <span className="font-instrument-italic">Projects</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
            <NextProjectItem href="/diesel" src="/images/pixel-1.jpg" title="01. DIESEL" />
            <NextProjectItem href="/lucent" src="/images/lucent.avif" title="02. lucent" />
            <NextProjectItem href="/solae" src="/images/pixel-3.jpg" title="03. Solaé" />
          </div>

        </div>
      </section>

      {/* --- SECTION 8: CONTACT --- */}
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
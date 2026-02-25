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

export default function SolaePage() {
  const container = useRef(null);

  
  const [isFlipped12, setIsFlipped12] = useState(false);
  const [isFlipped13, setIsFlipped13] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped12((prev) => !prev);
      setIsFlipped13((prev) => !prev);
    }, 2500);
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
              <h1 className="reveal-text font-instrument-regular text-[80px] md:text-[120px] leading-[0.8] tracking-tighter">
                Solaé
              </h1>
            </div>
            
            <div className="reveal-text">
              <h3 className="text-white text-[20px] md:text-[26px] mb-4">/ Role</h3>
              <p className="text-[#b3b3b3] text-[18px] md:text-[20px] leading-[1.6]">
                Art Direction, Brand Identity, Concept Development, Visual Design, Packaging Design, Campaign Systems, Environmental &amp; Spatial Visualization
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col md:pl-10 h-full">
            <h3 className="reveal-text text-white text-[20px] md:text-[26px] mb-6">/ About the Project</h3>
            <div className="reveal-text text-[#b3b3b3] text-[18px] md:text-[20px] leading-[1.6] flex flex-col gap-6 text-justify max-w-[780px]">
              <p>
                Solaé is a conceptual café brand rooted in slowness, warmth, and everyday rituals, positioning the café as a space for pause, comfort, and quiet connection. The project explores how simple moments can carry emotional depth.
              </p>
              <p>
                The visual direction blends artisanal sensibilities with a cinematic approach, using natural light, organic textures, and restrained typography to create a calm and immersive presence.
              </p>
              <p>
                Across packaging, posters, and environmental applications, the system feels tactile and lived-in, where materials, shadows, and imperfections become part of the narrative.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: CINEMATIC VIDEO --- */}
      <section className="video-section relative w-full bg-[#111111] px-10 md:px-12 pt-8 pb-16 z-10 border-none">
     
        <div className="reveal-video relative w-full max-w-[1400px] mx-auto">
          <div className="relative w-full border border-white/10 bg-[#0a0a0a] overflow-hidden">
            <video 
              className="w-full h-auto block" 
              src="/videos/solae-video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 3: VISUAL IDENTITY GRID --- */}
      <section className="grid-section relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-8">
          
         
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-0 w-full h-[400px] md:h-[450px] lg:h-[480px]">
            
           
            <div className="reveal-img relative w-full h-full border border-white/5">
              <Image src="/images/solae-1.avif" alt="Solae Tree" fill className="object-cover" />
            </div>
            
            
            <div className="reveal-img flex flex-col w-full h-full border border-white/5">
              <div className="relative w-full h-1/2">
                <Image src="/images/solae-2.avif" alt="Solae Logo Brown" fill className="object-cover" />
              </div>
              <div className="relative w-full h-1/2">
                <Image src="/images/solae-4.avif" alt="Solae Logo Light Green" fill className="object-cover" />
              </div>
            </div>
            
           
            <div className="reveal-img flex flex-col w-full h-full border border-white/5">
              <div className="relative w-full h-1/2">
                <Image src="/images/solae-3.avif" alt="Solae Logo Beige" fill className="object-cover" />
              </div>
              <div className="relative w-full h-1/2">
                <Image src="/images/solae-5.avif" alt="Solae Logo Dark Green" fill className="object-cover" />
              </div>
            </div>
            
            
            <div className="reveal-img relative w-full h-full border border-white/5">
              <Image src="/images/solae-6.avif" alt="Solae Sky" fill className="object-cover" />
            </div>

          </div>

         
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch w-full mt-2">
            
           
            <div className="reveal-img w-full md:w-1/2 relative flex items-start">
              <Image 
                src="/images/solae-7.avif" 
                alt="Solae Color Palette" 
                width={1200} 
                height={400} 
                className="w-full h-auto object-contain object-top" 
              />
            </div>
            
            
            <div className="reveal-img w-full md:w-1/2 flex flex-col justify-between py-1 md:pl-6">
              <p className="text-[#b3b3b3] text-[15px] md:text-[17px] leading-[1.6] text-justify">
                The color palette of Solaé is rooted in warmth and material depth, drawing from elements of wood, coffee, and natural textures. Deep tones like Midnight Ash and Pine Shadow create a grounded base, while Dark Cedar and Rust Ember introduce a subtle warmth that adds richness without overpowering the visuals.
              </p>
              <p className="text-[#b3b3b3] text-[15px] md:text-[17px] leading-[1.6] text-justify mt-6 md:mt-0">
                Lighter tones such as Antique Gold, Parchment, Sage Mist, and Soft Linen bring softness and balance, reflecting light, paper, and natural surfaces. Together, the palette forms a calm and cohesive system that feels organic, timeless, and quietly expressive.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 4: PRODUCT & PACKAGING GRID --- */}
      <section className="grid-section-2 relative w-full bg-[#111111] px-10 md:px-12 pt-4 pb-16 z-10 border-none">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 md:gap-6">
          
         
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[400px] md:h-[600px]">
             
             <div className="reveal-img-2 md:col-span-8 relative w-full h-full border border-white/10">
               <Image src="/images/solae-8.jpg" alt="Solae Billboard" fill className="object-cover" />
             </div>
             
             <div className="reveal-img-2 md:col-span-4 relative w-full h-full border border-white/10">
               <Image src="/images/solae-9.avif" alt="Solae Coffee Beans" fill className="object-cover" />
             </div>

          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[300px] md:h-[400px]">
             
             <div className="reveal-img-2 md:col-span-4 relative w-full h-full border border-white/10">
               <Image src="/images/solae-10.avif" alt="Solae Pouches" fill className="object-cover" />
             </div>
             
             <div className="reveal-img-2 md:col-span-5 relative w-full h-full border border-white/10">
               <Image src="/images/solae-11.avif" alt="Solae Coaster" fill className="object-cover" />
             </div>
             
             <div className="reveal-img-2 md:col-span-3 relative w-full h-full cursor-pointer overflow-hidden group border border-white/10" onClick={() => setIsFlipped12(!isFlipped12)} title="Click to flip image">
               <Image src="/images/solae-12-1.avif" alt="Solae Iced Coffee 1" fill className={`object-cover transition-opacity duration-1000 ${isFlipped12 ? 'opacity-0' : 'opacity-100'}`} />
               <Image src="/images/solae-12-2.avif" alt="Solae Iced Coffee 2" fill className={`object-cover transition-opacity duration-1000 ${isFlipped12 ? 'opacity-100' : 'opacity-0'}`} />
             </div>

          </div>

          {/* Row 3: Tote/Cup Toggle (6 cols), Croissant Bag (6 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full h-[400px] md:h-[500px]">
             
             <div className="reveal-img-2 md:col-span-6 relative w-full h-full cursor-pointer overflow-hidden group border border-white/10" onClick={() => setIsFlipped13(!isFlipped13)} title="Click to flip image">
               <Image src="/images/solae-13-1.avif" alt="Solae Tote" fill className={`object-cover transition-opacity duration-1000 ${isFlipped13 ? 'opacity-0' : 'opacity-100'}`} />
               <Image src="/images/solae-13-2.avif" alt="Solae Cup on Log" fill className={`object-cover transition-opacity duration-1000 ${isFlipped13 ? 'opacity-100' : 'opacity-0'}`} />
             </div>
             
             <div className="reveal-img-2 md:col-span-6 relative w-full h-full border border-white/10">
               <Image src="/images/solae-14.avif" alt="Solae Croissant" fill className="object-cover" />
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
               Blender, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premiere Pro,After Effects, Medibang Paint Pro
            </p>
          </div>
          <div className="reveal-tools">
            <h3 className="text-white text-[20px] md:text-[24px] mb-2">/ Skills</h3>
            <p className="text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6]">
              Art Direction, Creative Direction, Brand Identity Systems,Visual Storytelling, Packaging & Print Design,Spatial Visualization,Typography, Campaign Systems
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
            <NextProjectItem href="/lucent" src="/images/lucent.avif" title="02. lucent" />
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
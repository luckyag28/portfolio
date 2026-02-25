"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "@/components/Landing";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


export let hasPlayedLanding = false;

export const markLandingPlayed = () => {
  hasPlayedLanding = true;
};


const WorkImage = ({ src, title, category, id, aspect = "aspect-square", isUppercase = true, isFullScreen = false, href }: { src: string, title: string, category: string, id: number, aspect?: string, isUppercase?: boolean, isFullScreen?: boolean, href?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    containerRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  
  const glitchBlocks: { c: number, r: number, dur: string, tx: number }[] = [
    { c: 0, r: 0, dur: "0.6s", tx: -15 },
    { c: 1, r: 0, dur: "1.2s", tx:  20 },
    { c: 2, r: 0, dur: "1.7s", tx: -25 },
    { c: 0, r: 1, dur: "0.8s", tx:  15 },
    { c: 1, r: 1, dur: "2.1s", tx: -10 }, 
    { c: 2, r: 1, dur: "1.3s", tx:  25 },
    { c: 0, r: 2, dur: "1.5s", tx: -20 },
    { c: 1, r: 2, dur: "2.0s", tx:  30 },
    { c: 2, r: 2, dur: "1.0s", tx:  10 },
  ];

  const handleProjectClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div 
      onClick={handleProjectClick} 
      className={`work-item-${id} flex flex-col w-full group cursor-pointer`}
    >
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
        className={`relative w-full ${aspect} bg-[#111111] overflow-hidden`}
      >
        <Image src={src} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        
        <div className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {glitchBlocks.map((block, i) => {
            const w = 60; 
            const h = 30;
            const ox = (block.c - 1.5) * w;
            const oy = (block.r - 1.5) * h;
            
            const clipPath = `inset(calc(var(--y) + ${oy}px) calc(100% - (var(--x) + ${ox + w}px)) calc(100% - (var(--y) + ${oy + h}px)) calc(var(--x) + ${ox}px))`;
            
            return (
              <div key={i} className="absolute inset-0" style={{ clipPath, transition: `clip-path ${block.dur} cubic-bezier(0.25, 1, 0.5, 1)` }}>
                <Image src={src} alt="" fill className="object-cover" style={{ transform: `translateX(${block.tx}px) scale(1.05)` }} unoptimized />
              </div>
            );
          })}
        </div>
      </div>

      <div className={`flex justify-between items-end mt-5 w-full ${isFullScreen ? 'px-10 md:px-12 max-w-[1400px] mx-auto' : 'px-1'}`}>
         <h3 className={`font-instrument-regular ${isUppercase ? 'uppercase' : ''} text-[24px] md:text-[32px] leading-none`}>
           0{id}. {title}
         </h3>
         <p className="font-instrument-regular text-[16px] md:text-[18px] text-gray-400 capitalize text-right pb-1">
           {category}
         </p>
      </div>
    </div>
  );
};


export default function Home() {
  const [showLanding, setShowLanding] = useState(!hasPlayedLanding);
  const arrowRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const didNavigate = useRef(hasPlayedLanding);

  const handleLandingComplete = () => {
    hasPlayedLanding = true;
    setShowLanding(false);
  };

  useGSAP(() => {
    if (showLanding) return;

    
    if (didNavigate.current) {
      gsap.from(mainRef.current, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
    }

   
    gsap.delayedCall(0.5, () => ScrollTrigger.refresh());
    gsap.delayedCall(1.5, () => ScrollTrigger.refresh());

    
    ScrollTrigger.create({ trigger: ".hero-section", start: "top top", end: "+=200", scrub: true, animation: gsap.to(arrowRef.current, { opacity: 0, y: 20 }) });

  
    gsap.fromTo(".tv-container", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".tv-section", start: "top 85%" } }
    );

    gsap.fromTo(".work-container", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".work-section", start: "top 85%" } }
    );

    gsap.fromTo(".fragments-container", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".fragments-section", start: "top 85%" } }
    );

    gsap.fromTo(".contact-container", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".contact-section", start: "top 85%" } }
    );

  }, { dependencies: [showLanding], scope: mainRef });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) { 
      target.scrollIntoView({ behavior: 'smooth' }); 
      
      const updateScroll = () => ScrollTrigger.update();
      gsap.ticker.add(updateScroll);
      gsap.delayedCall(1.5, () => gsap.ticker.remove(updateScroll));
    }
  };

  return (
    <main ref={mainRef} className="relative w-full bg-[#111111] text-white font-instrument-regular">
      
      {showLanding && <Landing onComplete={handleLandingComplete} />}

      {/* --- SECTION 1: HERO --- */}
      <section id="about" className="hero-section relative w-full h-screen overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0" src="/videos/hero.mp4" autoPlay loop muted playsInline />
        
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111111] to-transparent z-[5] pointer-events-none"></div>

        <nav className="absolute top-8 left-10 right-10 md:top-10 md:left-12 md:right-12 flex justify-between items-start z-10 mix-blend-difference text-white uppercase tracking-widest">
          <div className="w-1/3 text-left text-[14px] md:text-[20px]">
             <Link href="/" className="hover:text-gray-300 transition-colors">LUCKY NAVIN AGRAWAL</Link>
          </div>
          <div className="w-1/3 flex justify-center gap-12 text-[14px] md:text-[20px] text-gray-200">
            <Link href="/about" className="hover:text-white transition-opacity">ABOUT</Link>
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-white transition-opacity">WORK</a>
            <Link href="/contact" className="hover:text-white transition-opacity">CONTACT</Link>
          </div>
          <div className="w-1/3 text-right text-[14px] md:text-[20px] text-gray-200">PORTFOLIO 2026</div>
        </nav>
        <div className="absolute top-28 right-10 md:top-47 md:right-12 z-10 text-right mix-blend-difference text-white">
          <p className="text-[20px] md:text-[34px] leading-snug text-gray-200">Visual design shaped by structure,<br />clarity, and thoughtful restraint</p>
        </div>
        <div className="absolute bottom-12 left-10 md:bottom-12 md:left-12 z-10 mix-blend-difference text-white">
          <h1 className="font-instrument-italic text-[70px] md:text-[85px] leading-[0.85] tracking-tight mb-2">Lucky Navin Agrawal</h1>
          <p className="text-[18px] md:text-[30px] tracking-wide ml-1 text-gray-200">a Visual Designer</p>
        </div>
        <div ref={arrowRef} className="absolute bottom-12 right-10 md:bottom-12 md:right-12 z-10 mix-blend-difference text-white flex items-end pb-2">
          <svg className="w-6 h-12 md:w-8 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m0 0l-6-6m6 6l6-6" /></svg>
        </div>
      </section>

      {/* --- SECTION 2: TV LOOP --- */}
      <section className="tv-section relative w-full h-screen bg-[#111111] flex items-center justify-center overflow-hidden pb-20 mt-24 md:mt-40">
      
        <div className="tv-container relative flex items-center justify-center" style={{ width: "min(1000px, 85vw, 135vh)" }}>
          <video className="absolute z-0 object-cover rounded-[3%]" style={{ top: "14%", left: "5%", width: "77%", height: "70%" }} src="/videos/tv-loop.mp4" autoPlay loop muted playsInline />
          <Image src="/images/tv.png" alt="Retro TV" width={1200} height={800} className="relative z-10 w-full h-auto pointer-events-none" priority />
        </div>
      </section>

      {/* --- SECTION 3: SELECTED WORK (GRID) --- */}
      <section id="work" className="work-section relative w-full bg-[#111111] px-10 md:px-12 pt-24 md:pt-32 pb-16 overflow-hidden flex flex-col items-center">
        <div className="work-container w-full max-w-[1400px]">
          <div className="flex items-start gap-4 mb-12 md:mb-20">
            <h2 className="text-[50px] md:text-[80px] leading-none">
              Selected <span className="font-instrument-italic">Work</span>
            </h2>
            <span className="text-[20px] md:text-[30px] text-gray-400 font-instrument-regular mt-2 md:mt-4">(05)</span>
          </div>

          <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-16 md:gap-y-24 w-full">
            <WorkImage id={1} src="/images/pixel-1.jpg" title="DIESEL" category="Flagship" href="/diesel" />
            <WorkImage id={2} src="/images/pixel-2.jpg" title="lucent" category="Conceptual" isUppercase={false} href="/lucent" />
            <WorkImage id={3} src="/images/pixel-3.jpg" title="Solaé" category="Direction" isUppercase={false} href="/solae" />
            <WorkImage id={4} src="/images/pixel-4.jpg" title="Parallel Titles" category="Localization" isUppercase={false} href="/parallel-titles" />
            
          </div>
        </div>
      </section>

      {/* --- SECTION 4: FRAGMENTS (HORIZONTAL BANNER) --- */}
      <section className="fragments-section relative w-full min-h-[80vh] bg-[#111111] px-10 md:px-12 pt-10 pb-24 md:pb-32 overflow-hidden flex items-center justify-center">
        <div className="fragments-container w-full max-w-[1400px]">
          <WorkImage 
            id={5} 
            src="/images/pixel-5.avif" 
            title="Fragments" 
            category="Visual Notes" 
            aspect="aspect-[2.5/1] md:aspect-[3/1]" 
            isUppercase={false} 
            href="/fragments"
          />
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
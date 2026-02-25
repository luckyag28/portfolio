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

const posters = [
  { src: "/images/bugonia-poster.jpg", title: "BUGONIA" },
  { src: "/images/frankenstein-poster.jpg", title: "FRANKENSTEIN" },
  { src: "/images/hament-poster.jpg", title: "HAMNET" },
  { src: "/images/marty-supreme-poster.avif", title: "MARTY SUPREME" },
  { src: "/images/one-battle-after-another-poster.jpg", title: "ONE BATTLE AFTER ANOTHER" },
  { src: "/images/sentimental-value-poster.jpg", title: "SENTIMENTAL VALUE" },
  { src: "/images/sinners-poster.jpg", title: "SINNERS" },
  { src: "/images/the-secret-agent-poster.jpg", title: "THE SECRET AGENT" },
  { src: "/images/train-dreams-poster.jpg", title: "TRAIN DREAMS" }
];

export default function ParallelTitlesPage() {
  const container = useRef(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % posters.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useGSAP(() => {
    gsap.fromTo(container.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );

    gsap.from(".reveal-text", {
      y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2
    });

    gsap.fromTo(".carousel-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".carousel-section", start: "top 85%" } }
    );

    gsap.fromTo(".reveal-next-projects", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".next-projects-section", start: "top 85%" } }
    );

    gsap.fromTo(".contact-container", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".contact-section", start: "top 85%" } }
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
                Parallel Titles
              </h1>
            </div>
            
            <div className="reveal-text">
              <h3 className="text-white text-[20px] md:text-[26px] mb-4">/ Role</h3>
              <p className="text-[#b3b3b3] text-[18px] md:text-[20px] leading-[1.6] max-w-[500px]">
                Art Direction, Concept Development, Typography, Poster Design, Visual Translation
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col md:pl-10 h-full">
            <h3 className="reveal-text text-white text-[20px] md:text-[26px] mb-6">/ About the Project</h3>
            <div className="reveal-text text-[#b3b3b3] text-[18px] md:text-[20px] leading-[1.6] flex flex-col gap-6 text-justify max-w-[850px]">
              <p>
                Parallel Titles explores the localization of contemporary cinema through Hindi typography and visual language. The project reinterprets a selection of films nominated for Best Picture at the 2026 Academy Awards by redesigning their titles in Devanagari, creating a parallel visual identity shaped by language.
              </p>
              <p>
                Each poster responds to the tone and narrative of its film, balancing translation with reinterpretation. Typography becomes the primary medium, exploring form, composition, and meaning across scripts.
              </p>
              <p>
                Rather than direct adaptation, the project focuses on building a visual language where global cinema is experienced through a different cultural lens.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: CINEMATIC POSTER CAROUSEL --- */}
      <section className="carousel-section relative w-full bg-[#111111] pt-6 pb-16 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden z-10 border-none">
        
        <div className="relative w-full max-w-[1400px] h-[320px] md:h-[420px] lg:h-[480px] flex items-center justify-center">

          <button onClick={prev} className="absolute left-4 md:left-12 z-30 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-2xl">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>

          <button onClick={next} className="absolute right-4 md:right-12 z-30 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-2xl">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            {posters.map((poster, i) => {
              
              const offset = (i - currentIndex + posters.length) % posters.length;
              let normalizedOffset = offset;
              if (offset > Math.floor(posters.length / 2)) {
                normalizedOffset = offset - posters.length;
              }

              const isCenter = normalizedOffset === 0;
              const isLeft = normalizedOffset === -1;
              const isRight = normalizedOffset === 1;

              let positionClass = '';
              if (isCenter) {
                positionClass = 'z-20 scale-100 opacity-100 translate-x-0 shadow-2xl';
              } else if (isLeft) {
                positionClass = 'z-10 scale-[0.85] -translate-x-[110%] md:-translate-x-[125%] opacity-100';
              } else if (isRight) {
                positionClass = 'z-10 scale-[0.85] translate-x-[110%] md:translate-x-[125%] opacity-100';
              } else if (normalizedOffset < -1) {
                positionClass = 'z-0 scale-75 opacity-0 -translate-x-[200%]';
              } else {
                positionClass = 'z-0 scale-75 opacity-0 translate-x-[200%]';
              }

              return (
                <div 
                  key={i} 
                  className={`absolute w-[200px] md:w-[280px] lg:w-[320px] aspect-[2/3] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${positionClass}`}
                >
                  <div className="relative w-full h-full border border-white/5 overflow-hidden">
                    <Image src={poster.src} alt={poster.title} fill className="object-cover" />
                    <div className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${isCenter ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#111111] from-30% via-[#111111]/90 via-60% to-transparent transition-opacity duration-1000 ${isLeft ? 'opacity-100' : 'opacity-0'}`} />
                    <div className={`absolute inset-0 bg-gradient-to-l from-[#111111] from-30% via-[#111111]/90 via-60% to-transparent transition-opacity duration-1000 ${isRight ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center mt-6 md:mt-8 text-center z-20 relative px-6">
           <h2 key={currentIndex} className="font-instrument-regular text-[40px] md:text-[60px] lg:text-[70px] leading-none uppercase tracking-wide text-white animate-fade-in">
             {posters[currentIndex].title}
           </h2>
           <p className="font-instrument-italic text-[#b3b3b3] text-[15px] md:text-[17px] mt-4 max-w-[650px] text-center leading-[1.4]">
             All films and original titles belong to their respective creators. This is an independent conceptual project.
           </p>
        </div>
      </section>

      {/* --- SECTION 3: OTHER PROJECTS --- */}
      <section className="next-projects-section relative w-full bg-[#111111] px-10 md:px-12 pt-24 pb-16 flex flex-col items-center z-20 border-none">
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
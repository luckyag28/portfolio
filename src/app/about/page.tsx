"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { markLandingPlayed } from "@/app/page";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const container = useRef(null);
  const router = useRouter();

  useGSAP(() => {
   
    gsap.fromTo(container.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );

   
    gsap.fromTo(".reveal-image", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, scrollTrigger: { trigger: ".about-section", start: "top 85%", end: "center center", scrub: 1.5 } }
    );

    
    gsap.fromTo(".reveal-text", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.1, scrollTrigger: { trigger: ".about-section", start: "top 85%", end: "center center", scrub: 1.5 } }
    );

    
    gsap.fromTo(".reveal-more-title", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, scrollTrigger: { trigger: ".section-three", start: "top 85%", end: "center center", scrub: 1.5 } }
    );

    gsap.fromTo(".reveal-more-left", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, scrollTrigger: { trigger: ".section-three", start: "top 80%", end: "center center", scrub: 1.5 } }
    );

    gsap.fromTo(".reveal-more-right", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, scrollTrigger: { trigger: ".section-three", start: "top 80%", end: "center center", scrub: 1.5 } }
    );

    
    gsap.fromTo(".contact-container", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, scrollTrigger: { trigger: ".contact-section", start: "top 85%", end: "center center", scrub: 1.5 } }
    );

  }, { scope: container });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) { 
      target.scrollIntoView({ behavior: 'smooth' }); 
      const updateScroll = () => ScrollTrigger.update();
      gsap.ticker.add(updateScroll);
      gsap.delayedCall(1.5, () => gsap.ticker.remove(updateScroll));
    } else {
      router.push(`/#${targetId}`);
    }
  };

  return (
    <main ref={container} className="relative w-full bg-[#111111] text-white font-instrument-regular min-h-screen">
      
      {/* --- SECTION 1: HERO --- */}
      
      <section className="relative w-full h-screen overflow-hidden">
        
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          src="/videos/hero.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
        />
        
        <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111111] to-transparent z-[5] pointer-events-none"></div>

        <nav className="absolute top-8 left-10 right-10 md:top-10 md:left-12 md:right-12 flex justify-between items-start z-50 mix-blend-difference text-white uppercase tracking-widest">
          <div className="w-1/3 text-left text-[14px] md:text-[20px]">
             <Link href="/" onClick={markLandingPlayed} className="hover:text-gray-300 transition-colors">LUCKY NAVIN AGRAWAL</Link>
          </div>
          <div className="w-1/3 flex justify-center gap-12 text-[14px] md:text-[20px] text-gray-200">
            <Link href="/" className="hover:text-white transition-opacity">HOME</Link>
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-white transition-opacity">WORK</a>
            <Link href="/contact" className="hover:text-white transition-opacity">CONTACT</Link>
          </div>
          <div className="w-1/3 text-right text-[14px] md:text-[20px] text-gray-200">PORTFOLIO 2026</div>
        </nav>

        <div className="absolute top-32 left-10 md:top-36 md:left-12 z-20 mix-blend-difference text-white">
          <h1 className="font-instrument-italic text-[50px] md:text-[60px] leading-[1.05] tracking-tight">
            Crafting visual narratives that<br />resonate and inspire.
          </h1>
        </div>

        <div className="absolute bottom-12 right-10 md:bottom-12 md:right-12 z-20 text-white text-right drop-shadow-lg pointer-events-none">
          <p className="font-instrument-regular text-[18px] md:text-[37px] text-gray-200 leading-snug">
            A multidisciplinary designer focused on creating clean,<br />structured, and thoughtful digital experiences.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: ABOUT & CAREER --- */}
      <section className="about-section relative w-full bg-[#111111] px-10 md:px-12 pt-8 md:pt-12 pb-16 flex flex-col items-center z-10">
        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          <div className="reveal-image relative w-full aspect-[4/5] max-w-[600px] mx-auto md:mx-0 overflow-hidden group cursor-pointer">
            <Image 
              src="/images/Profile Photo.avif" 
              alt="Lucky Navin Agrawal" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              priority
            />
          </div>

          <div className="flex flex-col text-[#b3b3b3] text-[16px] md:text-[18px] leading-[1.6] tracking-wide pt-4 md:pt-2 text-justify">
            
            <div className="reveal-text flex flex-col gap-6 mb-16">
              <h2 className="text-[26px] md:text-[32px] text-white text-left">/ About Me</h2>
              <p>
                I&apos;m Lucky Navin Agrawal, a visual designer with a background in computer science engineering and formal training in fashion design. My work focuses on building clear, structured visual systems across graphic, digital, and motion mediums.
              </p>
              <p>
                I approach design as both a creative and analytical practice, balancing visual expression with consistency, hierarchy, and intent, with a growing focus on art and creative direction.
              </p>
            </div>

            <div className="reveal-text flex flex-col gap-6">
              <h2 className="text-[26px] md:text-[32px] text-white text-left">/ My Career</h2>
              <p>
                With 3.5+ years of freelance experience, I&apos;ve worked with clients worldwide across branding, advertising, social media, motion, and digital design, handling projects from concept and direction to execution.
              </p>
              <p>
                I&apos;m currently pursuing a degree in Computer Science Engineering under Savitribai Phule Pune University (SPPU), which shapes my systems-first approach to problem-solving and workflows.
              </p>
              <p>
                I bring curiosity, adaptability, and strong attention to detail to every collaboration, with a focus on creating thoughtful work that solves real problems.
              </p>
            </div>

          </div>
        </div>
        
        <div className="w-full max-w-[1400px] border-b border-white/10 mt-12 md:mt-16"></div>
      </section>

      {/* --- SECTION 3: MORE ABOUT ME --- */}
      <section className="section-three relative w-full bg-[#111111] px-10 md:px-12 pt-10 pb-32 flex flex-col items-center z-10">
        <div className="w-full max-w-[1400px]">
          
          <div className="reveal-more-title mb-16">
            <h2 className="text-[40px] md:text-[55px] text-white leading-none">
              <span className="font-instrument-italic">More</span> About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            <div className="reveal-more-left flex flex-col gap-12 text-[16px] md:text-[18px] tracking-wide">
              
              <div>
                <h3 className="text-[24px] md:text-[28px] text-white mb-6">/ Education</h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-white">Bachelor of Computer Science Engineering (Pursing)</p>
                    <p className="text-[#b3b3b3]">Savitribai Phule Pune University (SPPU)</p>
                  </div>
                  <div>
                    <p className="text-white">Fashion Designing</p>
                    <p className="text-[#b3b3b3]">Formal Training (2 years)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] md:text-[28px] text-white mb-6">/ Tools</h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-white">Design & Prototyping</p>
                    <p className="text-[#b3b3b3]">Figma, Canva, Affinity, Webflow</p>
                  </div>
                  <div>
                    <p className="text-white">Adobe Suite</p>
                    <p className="text-[#b3b3b3]">Photoshop, Illustrator, InDesign, After Effects, Premiere Pro</p>
                  </div>
                  <div>
                    <p className="text-white">3D & Motion</p>
                    <p className="text-[#b3b3b3]">Blender, Cinema 4D, Spline</p>
                  </div>
                  <div>
                    <p className="text-white">Illustration & Painting</p>
                    <p className="text-[#b3b3b3]">MediBang Paint</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="reveal-more-right flex flex-col h-full text-[16px] md:text-[18px] tracking-wide">
              
              <div>
                <h3 className="text-[24px] md:text-[28px] text-white mb-6">/ Skills</h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-white">Design</p>
                    <p className="text-[#b3b3b3]">Graphic Design (2D & 3D), Branding, Brand Identity, Typography, Custom Typeface Design</p>
                  </div>
                  <div>
                    <p className="text-white">Motion & Visual Storytelling</p>
                    <p className="text-[#b3b3b3]">Animation, Short Films, Advertising, Social Media Content</p>
                  </div>
                  <div>
                    <p className="text-white">Creative Direction</p>
                    <p className="text-[#b3b3b3]">Visual Systems, Concept Development, Art Direction Foundations</p>
                  </div>
                  <div>
                    <p className="text-white">Audio & Video Production</p>
                    <p className="text-[#b3b3b3]">Video Editing, Sound Design, Audio Mixing, Short Film Post-Production</p>
                  </div>
                  <div>
                    <p className="text-white">Additional</p>
                    <p className="text-[#b3b3b3]">Fashion Design Fundamentals</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-16 md:pt-0">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block border border-white/40 px-6 py-2 text-white uppercase tracking-widest text-[16px] md:text-[18px] hover:bg-white hover:text-black transition-colors duration-300"
                >
                  DOWNLOAD RESUME
                </a>
              </div>

            </div>
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
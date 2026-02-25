"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface LandingProps {
  onComplete: () => void;
}

export default function Landing({ onComplete }: LandingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 2.5, 
      ease: "power2.inOut",
      onComplete: () => onComplete(),
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/videos/landing.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
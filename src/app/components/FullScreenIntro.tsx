"use client";
import React from 'react';

export default function FullScreenIntro() {
  const handleScrollTo = (e: React.MouseEvent, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Aspect-ratio preserving container matching the native 1672x820 video */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          aspectRatio: '1672 / 820',
          maxWidth: 'calc(100vh * (1672 / 820))',
          maxHeight: '100vh',
        }}
      >
        <video
          src="/videos/herooo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain pointer-events-none"
        />

        {/* Invisible overlay buttons perfectly matching the video at all screen sizes */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Explore Projects clickable hotspot */}
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            title="Explore Projects"
            aria-label="Explore Projects"
            className="absolute pointer-events-auto cursor-pointer block select-none rounded-full"
            style={{
              left: '2.8%',
              top: '63.2%',
              width: '15%',
              height: '15%',
            }}
          />

          {/* Contact clickable hotspot */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            title="Contact"
            aria-label="Contact"
            className="absolute pointer-events-auto cursor-pointer block select-none rounded-full"
            style={{
              left: '24.8%',
              top: '63.2%',
              width: '15%',
              height: '15%',
            }}
          />
        </div>
      </div>
    </div>
  );
}

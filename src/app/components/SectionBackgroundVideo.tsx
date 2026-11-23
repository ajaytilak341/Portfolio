"use client";
import React from 'react';

type Props = { children: React.ReactNode };

export default function SectionBackgroundVideo({ children }: Props) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        src="/videos/section-particles.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

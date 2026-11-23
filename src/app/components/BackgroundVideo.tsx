"use client";
import React from 'react';

export default function BackgroundVideo() {
  return (
    <video
      src="/videos/hero.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 w-full h-full object-cover z-0 opacity-90"
    />
  );
}

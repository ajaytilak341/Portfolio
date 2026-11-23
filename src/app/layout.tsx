import './globals.css';
import Navbar from './components/Navbar';
import FullScreenIntro from './components/FullScreenIntro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import React, { Suspense } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased relative">
        {/* Client‑only sections wrapped in Suspense */}
        <Suspense fallback={<div className="h-screen w-full bg-black" />}> <FullScreenIntro /> </Suspense>
        <Suspense fallback={<div className="h-16 w-full bg-black" />}> <Navbar /> </Suspense>
        <main className="flex-1 relative z-10 pt-0">
          <Suspense fallback={<div className="h-96 w-full bg-black" />}> <About /> </Suspense>
          <Suspense fallback={<div className="h-96 w-full bg-black" />}> <Skills /> </Suspense>
          <Suspense fallback={<div className="h-96 w-full bg-black" />}> <Projects /> </Suspense>
          <Suspense fallback={<div className="h-96 w-full bg-black" />}> <Experience /> </Suspense>
          <Suspense fallback={<div className="h-96 w-full bg-black" />}> <Achievements /> </Suspense>
          <Suspense fallback={<div className="h-96 w-full bg-black" />}> <Contact /> </Suspense>
          {children}
        </main>
      </body>
    </html>
  );
}

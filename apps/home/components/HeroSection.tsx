"use client";

import { ButtonLink } from "@repo/ui";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-[#F4F3F5] text-center overflow-hidden mb-3 py-12 md:py-16">
      {/* Floating Hearts and Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Outline Heart */}
        <div className="absolute top-[15%] left-[5%] animate-float-slow">
          <svg width="65" height="65" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Top Left - Pink Dot */}
        <div className="absolute top-[10%] left-[3%] w-3 h-3 bg-pink-400 rounded-full animate-pulse-slow"></div>

        {/* Top Center Left - Curved Shape */}
        <div className="absolute top-[12%] left-[18%] animate-float-delayed" style={{ transform: 'rotate(-25deg)' }}>
          <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
            <path d="M5 35 Q20 5, 65 20" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Top Center Left - Red Dot */}
        <div className="absolute top-[25%] left-[12%] w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse-delayed"></div>

        {/* Left Side - Large Outline Heart */}
        <div className="absolute top-[45%] left-[3%] animate-float">
          <svg width="75" height="75" viewBox="0 0 24 24" fill="none" className="text-pink-300">
            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Left Side - Filled Heart */}
        <div className="absolute top-[35%] left-[15%] animate-float-delayed">
          <svg width="55" height="55" viewBox="0 0 24 24" className="text-red-400">
            <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Bottom Left - Curved Ribbon */}
        <div className="absolute bottom-[18%] left-[3%] animate-float-slow" style={{ transform: 'rotate(30deg)' }}>
          <svg width="60" height="45" viewBox="0 0 60 45" fill="none">
            <path d="M5 5 Q30 40, 55 10" stroke="#a855f7" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom Left - Red Dots */}
        <div className="absolute bottom-[25%] left-[12%] w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[28%] left-[10%] w-2 h-2 bg-red-400 rounded-full animate-pulse-delayed"></div>

        {/* Top Right - Squiggle */}
        <div className="absolute top-[15%] right-[8%] animate-float" style={{ transform: 'rotate(-15deg)' }}>
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
            <path d="M5 25 Q20 5, 40 25 T75 25" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Top Right - Curved Shape */}
        <div className="absolute top-[18%] right-[2%] animate-float-slow" style={{ transform: 'rotate(45deg)' }}>
          <svg width="70" height="45" viewBox="0 0 70 45" fill="none">
            <path d="M5 40 Q35 5, 65 35" stroke="#a855f7" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </div>

        {/* Right Side - Filled Heart */}
        <div className="absolute top-[35%] right-[7%] animate-float-delayed">
          <svg width="58" height="58" viewBox="0 0 24 24" className="text-pink-400">
            <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Right Side - Curved Shape */}
        <div className="absolute top-[40%] right-[15%] animate-float">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path d="M5 5 Q30 35, 55 15" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Right Side - Red Dot */}
        <div className="absolute top-[48%] right-[5%] w-3 h-3 bg-red-500 rounded-full animate-pulse-slow"></div>

        {/* Bottom Right - Outline Heart */}
        <div className="absolute bottom-[15%] right-[2%] animate-float-slow">
          <svg width="68" height="68" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Bottom Right - Filled Heart */}
        <div className="absolute bottom-[25%] right-[12%] animate-float-delayed">
          <svg width="52" height="52" viewBox="0 0 24 24" className="text-pink-300">
            <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Bottom Right - Squiggle */}
        <div className="absolute bottom-[20%] right-[8%] animate-float" style={{ transform: 'rotate(20deg)' }}>
          <svg width="75" height="45" viewBox="0 0 75 45" fill="none">
            <path d="M5 25 Q20 5, 40 25 T70 20" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom Right - Purple Dot */}
        <div className="absolute bottom-[32%] right-[5%] w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse-delayed"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 pt-8 pb-12 max-w-3xl mx-auto px-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="mt-2 text-3xl md:text-6xl font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">
          Valentine's Day
        </h2>
        <h3 className="mt-3 text-xl md:text-[28px] font-normal text-[#1d1d1f] transition-all duration-1000 delay-200" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(8px)' }}>
          There's still time to get gifts they'll love.
        </h3>
        <div className="mt-5 flex items-center justify-center gap-5 transition-all duration-1000 delay-300" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(8px)' }}>
          <ButtonLink href='/store' variant='blue' size='lg'>Shop</ButtonLink>
        </div>

        {/* Central Gift Illustration - Built from scattered shapes */}
        <div className="mt-10 flex justify-center transition-all duration-1000 delay-500" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'scale(0.95)' : 'scale(1)' }}>
          <div className="relative w-[260px] h-[280px] md:w-[300px] md:h-[320px]">
            <svg viewBox="0 0 200 220" fill="none" className="w-full h-full">
              {/* Gift Box - made from simple shapes */}
              {/* Main box body - red rectangle */}
              <rect x="60" y="100" width="80" height="90" fill="#ef4444" rx="2" />

              {/* Vertical ribbon stripe */}
              <rect x="95" y="100" width="10" height="90" fill="#dc2626" />

              {/* Box lid */}
              <rect x="55" y="90" width="90" height="12" fill="#f87171" rx="2" />

              {/* Horizontal ribbon on lid */}
              <ellipse cx="100" cy="96" rx="45" ry="6" fill="#dc2626" />

              {/* Bow made from hearts and curves - using same shapes as decorations */}
              {/* Left bow piece - pink heart shape */}
              <path d="M90 85 Q65 65, 70 80 Q68 88, 82 86 Z" fill="#ec4899" opacity="0.9" />

              {/* Right bow piece - purple heart shape */}
              <path d="M110 85 Q135 65, 130 80 Q132 88, 118 86 Z" fill="#a855f7" opacity="0.9" />

              {/* Top decorative piece - orange curve */}
              <path d="M95 75 Q100 55, 105 75" stroke="#fb923c" strokeWidth="5" strokeLinecap="round" fill="none" />

              {/* Center knot - small circle */}
              <circle cx="100" cy="85" r="6" fill="#ef4444" />
              <circle cx="100" cy="85" r="4" fill="#dc2626" />

              {/* Ribbon tails */}
              <path d="M82 88 Q75 100, 70 115" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M118 88 Q125 100, 130 115" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Decorative elements ON the gift - using same shapes */}
              {/* Small hearts on box */}
              <path d="M75 125 L74 124 Q73 123, 74 122 Q75 123, 76 122 Q77 123, 76 124 Z" fill="#fca5a5" opacity="0.7" />
              <path d="M118 145 L117 144 Q116 143, 117 142 Q118 143, 119 142 Q120 143, 119 144 Z" fill="#fca5a5" opacity="0.7" />
              <path d="M82 165 L81 164 Q80 163, 81 162 Q82 163, 83 162 Q84 163, 83 164 Z" fill="#fca5a5" opacity="0.7" />

              {/* Curves on box */}
              <path d="M110 160 Q115 155, 120 160" stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M75 140 Q80 135, 85 140" stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />

              {/* Small dots */}
              <circle cx="95" cy="130" r="1.5" fill="#fef3c7" opacity="0.8" />
              <circle cx="108" cy="155" r="1.5" fill="#fef3c7" opacity="0.8" />
              <circle cx="88" cy="175" r="1.5" fill="#fef3c7" opacity="0.8" />

              {/* Around the gift - same decorative shapes */}
              {/* Top decorations */}
              <circle cx="100" cy="60" r="2" fill="#a855f7" opacity="0.8" />
              <path d="M85 70 L84 69 Q83 68, 84 67 Q85 68, 86 67 Q87 68, 86 69 Z" fill="#fb923c" opacity="0.7" />
              <path d="M115 70 L114 69 Q113 68, 114 67 Q115 68, 116 67 Q117 68, 116 69 Z" fill="#fbbf24" opacity="0.7" />

              {/* Side decorations */}
              <path d="M45 120 Q50 115, 55 120" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="42" cy="135" r="2" fill="#ef4444" />

              <path d="M145 140 Q150 135, 155 140" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="158" cy="120" r="2" fill="#ec4899" />

              {/* Bottom decorations */}
              <path d="M70 200 L68 198 Q66 196, 68 194 Q70 196, 72 194 Q74 196, 72 198 Z" fill="#ec4899" opacity="0.8" />
              <path d="M130 205 L128 203 Q126 201, 128 199 Q130 201, 132 199 Q134 201, 132 203 Z" fill="#f472b6" opacity="0.8" />
              <circle cx="90" cy="205" r="2.5" fill="#ef4444" />
              <circle cx="115" cy="200" r="2" fill="#a855f7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
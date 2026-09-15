"use client";
import { useEffect, useState } from "react";

export default function ClientLottie() {
  const [bowing, setBowing] = useState(false);
  useEffect(() => {
    // bow once on mount, then subtle loop
    setBowing(true);
    const t = setTimeout(() => setBowing(false), 800);
    const iv = setInterval(() => {
      setBowing(true);
      setTimeout(() => setBowing(false), 800);
    }, 3200);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transformOrigin: "50% 82%", transform: bowing ? "rotate(9deg)" : "rotate(0deg)" }}
      >
        {/* Respectful, warm illustration — not cartoonish: soft gradients, saree, bindi, folded hands */}
        <svg viewBox="0 0 260 320" width="260" height="300" className="drop-shadow-sm">
          <defs>
            <linearGradient id="saree" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9f1239" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
            <linearGradient id="border" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f6c9a8" />
              <stop offset="100%" stopColor="#e8a882" />
            </linearGradient>
          </defs>
          {/* shadow */}
          <ellipse cx="130" cy="304" rx="56" ry="10" fill="#000" opacity="0.08" />
          {/* saree pleats */}
          <path d="M78 285 C78 295 92 310 130 310 C168 310 182 295 182 285 L176 190 L84 190 Z" fill="url(#saree)" />
          <path d="M84 190 L176 190 L170 285 L90 285 Z" fill="#991b1b" opacity="0.35" />
          {/* gold border drape */}
          <path d="M86 198 C 62 215, 64 258, 92 287" stroke="url(#border)" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M174 198 C 198 215, 196 258, 168 287" stroke="url(#border)" strokeWidth="10" strokeLinecap="round" fill="none" />
          {/* blouse */}
          <path d="M92 138 L168 138 L164 198 L96 198 Z" fill="url(#saree)" />
          <path d="M92 138 Q130 150 168 138 L162 156 Q130 168 98 156 Z" fill="#7f1d1d" />
          {/* arms - folded */}
          <path d="M94 148 C 72 162, 78 202, 108 212" stroke="url(#skin)" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M166 148 C 188 162, 182 202, 152 212" stroke="url(#skin)" strokeWidth="13" strokeLinecap="round" fill="none" />
          {/* hands folded */}
          <g>
            <ellipse cx="130" cy="210" rx="20" ry="24" fill="url(#skin)" />
            <path d="M118 194 C120 192 140 192 142 194" stroke="#c07a54" strokeWidth="1.2" fill="none" opacity="0.6" />
            <path d="M124 204 L130 218 L136 204" stroke="#c07a54" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M130 186 L130 218" stroke="#c07a54" strokeWidth="1" fill="none" opacity="0.35" />
          </g>
          {/* neck */}
          <rect x="121" y="122" width="18" height="20" rx="8" fill="url(#skin)" />
          {/* face - soft, respectful */}
          <ellipse cx="130" cy="88" rx="44" ry="48" fill="url(#skin)" />
          {/* hair - neat, covered style */}
          <path d="M86 78 C86 28, 174 28, 174 78 C174 66, 166 46, 130 40 C94 46, 86 66, 86 78" fill="#1f2328" />
          <path d="M86 80 C84 98, 88 112, 96 124 L86 78 Z" fill="#1f2328" />
          <path d="M174 80 C176 98, 172 112, 164 124 L174 78 Z" fill="#1f2328" />
          {/* bindi */}
          <circle cx="130" cy="76" r="3.2" fill="#b91c1c" />
          <circle cx="130" cy="76" r="1" fill="#fecaca" opacity="0.9" />
          {/* eyes - gentle, downcast (respectful bow) */}
          <g opacity="0.95">
            <path d="M110 95 Q118 98 122 95" stroke="#1f2328" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M138 95 Q146 98 154 95" stroke="#1f2328" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            {/* eyelashes/downcast */}
            <path d="M112 97 C114 101 120 101 122 97" fill="#1f2328" opacity="0.9" />
            <path d="M142 97 C144 101 150 101 152 97" fill="#1f2328" opacity="0.9" />
          </g>
          {/* nose subtle */}
          <path d="M130 88 L128 102 Q130 104 132 102" stroke="#b77959" strokeWidth="1" fill="none" opacity="0.45" strokeLinecap="round" />
          {/* gentle smile */}
          <path d="M122 112 Q130 116 138 112" stroke="#7c3a2d" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.9" />
          {/* earrings - small gold */}
          <circle cx="90" cy="103" r="4.5" fill="#fbbf24" stroke="#a16207" strokeWidth="0.7" />
          <circle cx="170" cy="103" r="4.5" fill="#fbbf24" stroke="#a16207" strokeWidth="0.7" />
          {/* necklace subtle */}
          <path d="M112 132 Q130 142 148 132" stroke="#fbbf24" strokeWidth="1.2" fill="none" opacity="0.9" />
          <circle cx="130" cy="140" r="2.5" fill="#fbbf24" />
        </svg>
      </div>
    </div>
  );
}

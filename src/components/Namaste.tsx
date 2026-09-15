"use client";
import { useEffect, useState } from "react";

export default function Namaste({ message, sub }: { message?: string; sub?: string }) {
  const [bowing, setBowing] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setBowing(true);
      setTimeout(() => setBowing(false), 900);
    }, 3200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative transition-transform duration-700 ease-in-out origin-[50%_85%]"
        style={{ transform: bowing ? "rotate(9deg)" : "rotate(0deg)" }}
      >
        <svg viewBox="0 0 180 220" width={168} height={205} className="drop-shadow-sm">
          <path d="M62 170 C62 190 70 210 90 210 C110 210 118 190 118 170 L115 120 L65 120 Z" fill="#c2410c" />
          <path d="M65 120 L115 120 L108 170 L72 170 Z" fill="#fb923c" opacity=".9" />
          <path d="M68 78 L112 78 L110 128 L70 128 Z" fill="#dc2626" />
          <path d="M68 78 Q90 88 112 78 L108 98 Q90 108 72 98 Z" fill="#991b1b" />
          <path d="M70 78 C 48 92, 52 138, 68 168" stroke="#fbbf24" strokeWidth={10} strokeLinecap="round" fill="none" opacity=".95" />
          <path d="M110 78 C 132 92, 128 138, 112 168" stroke="#fbbf24" strokeWidth={10} strokeLinecap="round" fill="none" opacity=".95" />
          <path d="M68 90 C 50 102, 58 132, 80 140" stroke="#f8b195" strokeWidth={10} strokeLinecap="round" fill="none" />
          <path d="M112 90 C 130 102, 122 132, 100 140" stroke="#f8b195" strokeWidth={10} strokeLinecap="round" fill="none" />
          <ellipse cx="90" cy="138" rx="14" ry="16" fill="#f8b195" />
          <rect x="84" y="68" width="12" height="14" rx="4" fill="#f8b195" />
          <ellipse cx="90" cy="52" rx="28" ry="30" fill="#f8b195" />
          <path d="M62 48 C62 18, 118 18, 118 48 C118 38, 112 28, 90 26 C68 28, 62 38, 62 48" fill="#1f2937" />
          <circle cx="90" cy="46" r="2.2" fill="#dc2626" />
          <ellipse cx="80" cy="56" rx="3.5" ry="2.2" fill="#1f2937" />
          <ellipse cx="100" cy="56" rx="3.5" ry="2.2" fill="#1f2937" />
          <path d="M86 66 Q90 69 94 66" stroke="#9a4a2f" strokeWidth={1.2} fill="none" strokeLinecap="round" />
          <circle cx="64" cy="62" r="3" fill="#fbbf24" stroke="#d97706" strokeWidth={0.8} />
          <circle cx="116" cy="62" r="3" fill="#fbbf24" stroke="#d97706" strokeWidth={0.8} />
        </svg>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90px] h-3 bg-black/10 blur-[4px] rounded-full" />
      </div>
      <div className="mt-3 bg-slate-900 text-white px-4 py-2.5 rounded-2xl rounded-bl-sm text-xs font-semibold leading-relaxed text-center max-w-[260px]">
        <span className="text-amber-300">{message || "Namaste! 🙏"}</span> {sub || "— Ready to scan?"}
        <div className="font-medium opacity-80" style={{ fontFamily: "Noto Sans Devanagari" }}>आपकी यात्रा मंगलमय हो</div>
      </div>
      <button
        onClick={() => { setBowing(true); setTimeout(()=>setBowing(false),900)}}
        className="mt-2 text-[11px] font-semibold text-slate-500 hover:text-slate-700"
      >
        🙏 Bow again
      </button>
    </div>
  );
}

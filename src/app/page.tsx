"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import namasteData from "../../public/namaste.json";

// dynamic import to avoid SSR issue
const Lottie: any = dynamic(() => import("lottie-react") as any, { ssr: false });

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [fading, setFading] = useState(false);
  const [name, setName] = useState("Shahid");

  // Read ?name= from URL for personalization
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const n = params.get("name") || params.get("n");
    if (n) setName(n);
    else {
      // try localStorage
      const saved = localStorage.getItem("yatra_name");
      if (saved) setName(saved);
    }
  }, []);

  useEffect(() => {
    // Exactly 2 seconds splash, then fade
    const t1 = setTimeout(() => setFading(true), 2000);
    const t2 = setTimeout(() => setShowSplash(false), 2500); // 500ms fade
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="min-h-screen bg-[#fffaf3] font-sans antialiased flex flex-col">
      {/* Splash */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fffaf3] transition-opacity duration-500 ease-in-out ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <div className="flex flex-col items-center px-6">
            <div className="w-[280px] h-[320px] md:w-[320px] md:h-[360px]">
              <Lottie animationData={namasteData} loop autoplay style={{ width: "100%", height: "100%" }} />
            </div>
            <p className="mt-2 text-center text-[15px] font-medium tracking-wide text-[#4a2c0a] leading-relaxed">
              Dhanyavaad, aapka safar shubh ho
            </p>
            <p className="text-[12px] text-[#8b6a3d] mt-1 font-medium opacity-70">Thank you, may your journey be auspicious</p>
          </div>
        </div>
      )}

      {/* Main Page - appears after splash */}
      <div className={`flex-1 flex flex-col items-center justify-center px-6 py-10 transition-opacity duration-500 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        <div className="w-full max-w-sm flex flex-col items-center text-center gap-6">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Namaste, <span className="text-[#c2410c]">{name}</span>
          </h1>

          <button
            className="w-full py-3.5 rounded-full bg-[#0f172a] text-white font-semibold text-[15px] shadow-lg active:scale-[0.98] transition-transform"
            onClick={() => {
              // visual feedback only - no backend
              const btn = document.getElementById("scanBtn");
              if (btn) {
                btn.textContent = "Recorded! ✓";
                setTimeout(() => (btn.textContent = "Scan Recorded ✅"), 1200);
              }
            }}
            id="scanBtn"
          >
            Scan Recorded ✅
          </button>

          <div className="inline-flex items-center gap-2 bg-white border border-amber-200 px-4 py-2 rounded-full shadow-sm">
            <span className="text-amber-500">🔥</span>
            <span className="text-sm font-bold text-slate-800">Streak: 1 day</span>
          </div>

          <p className="text-[11px] text-slate-400 mt-2">No backend • No login • Just front-end</p>

          {/* Optional: tap name to personalize - minimal, no backend */}
          <button
            onClick={() => {
              const v = prompt("Enter your name:", name);
              if (v && v.trim()) {
                setName(v.trim());
                localStorage.setItem("yatra_name", v.trim());
                const url = new URL(window.location.href);
                url.searchParams.set("name", v.trim());
                window.history.replaceState({}, "", url.toString());
              }
            }}
            className="text-[11px] text-slate-400 underline decoration-dotted underline-offset-4 mt-1"
          >
            change name
          </button>
        </div>
      </div>
    </div>
  );
}

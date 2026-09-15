"use client";
import { useState } from "react";
import Link from "next/link";
import Namaste from "@/components/Namaste";

export default function ScanPage() {
  const [phase, setPhase] = useState<"idle"|"verifying"|"success">("idle");
  const [pts, setPts] = useState(120);
  const [streak, setStreak] = useState(3);

  function scan(){
    if(phase!=="idle") return;
    setPhase("verifying");
    setTimeout(()=>{
      setPhase("success");
      setPts(p=>p+10);
      setStreak(s=>s+1);
    },1400);
  }
  function reset(){ setPhase("idle"); }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-5xl flex items-center justify-between text-white mb-4">
        <Link href="/" className="text-sm font-bold">← Yatra Rewards</Link>
        <span className="text-xs bg-white/10 border border-white/15 px-3 py-1 rounded-full">PWA • Supabase • Bhashini</span>
      </div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="w-[320px] h-[620px] bg-black rounded-[36px] p-2.5 shadow-2xl">
            <div className="w-full h-full bg-slate-50 rounded-[28px] overflow-hidden flex flex-col relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10" />
              <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white px-4 pt-8 pb-3 flex justify-between items-center">
                <div><div className="font-bold text-sm">Scan to Earn 🎫</div><div className="text-[11px] opacity-90">QR-based commute rewards</div></div>
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full font-semibold">🇮🇳 हिंदी</span>
              </div>
              <div className="bg-white border-b px-3 py-2.5 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-slate-500">7-DAY STREAK</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5,6,7].map(i=>{
                    const done = i<=streak;
                    const today = i===streak+1 && phase!=="success";
                    return <div key={i} className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold border-2 ${done?"bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow":today?"bg-blue-50 text-blue-600 border-blue-500 animate-pulse":"bg-white text-slate-400 border-slate-200"}`}>{done?"✓":i}</div>
                  })}
                </div>
              </div>

              <div className="flex-1 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                {/* QR bg */}
                <svg viewBox="0 0 100 100" className="w-36 h-36 opacity-20 invert"><rect width="100" height="100" fill="white"/><g fill="black"><rect x="10" y="10" width="30" height="30"/><rect x="15" y="15" width="20" height="20" fill="white"/><rect x="20" y="20" width="10" height="10"/><rect x="60" y="10" width="30" height="30"/><rect x="65" y="15" width="20" height="20" fill="white"/><rect x="70" y="20" width="10" height="10"/><rect x="10" y="60" width="30" height="30"/><rect x="15" y="65" width="20" height="20" fill="white"/><rect x="20" y="70" width="10" height="10"/><rect x="60" y="60" width="6" height="6"/><rect x="70" y="60" width="6" height="6"/><rect x="60" y="70" width="6" height="6"/></g></svg>
                <div className="absolute w-[200px] h-[200px] rounded-2xl">
                  <div className="absolute w-8 h-8 border-4 border-white rounded-md top-0 left-0 border-r-0 border-b-0" />
                  <div className="absolute w-8 h-8 border-4 border-white rounded-md top-0 right-0 border-l-0 border-b-0" />
                  <div className="absolute w-8 h-8 border-4 border-white rounded-md bottom-0 left-0 border-r-0 border-t-0" />
                  <div className="absolute w-8 h-8 border-4 border-white rounded-md bottom-0 right-0 border-l-0 border-t-0" />
                  <div className={`absolute left-2 right-2 h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] ${phase==="verifying"?"animate-[scan_1.2s_ease-in-out_infinite] top-4":"top-4 opacity-70"}`} style={phase==="verifying"?{}:{}} />
                </div>
                <div className="absolute bottom-4 bg-black/60 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full backdrop-blur">
                  {phase==="idle"&&"Align QR inside frame"}
                  {phase==="verifying"&&"Detecting QR..."}
                  {phase==="success"&&"Verified ✓"}
                </div>

                {phase==="success" && (
                  <div className="absolute inset-0 bg-slate-50/95 flex flex-col items-center justify-center p-6 text-center animate-[pop_.3s_ease]">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center text-2xl shadow-lg">✓</div>
                    <div className="font-extrabold mt-3">Verified! Bus #DL-04 202</div>
                    <div className="text-xs text-slate-500 mt-1">Streak extended to {streak} days 🔥</div>
                    <div className="mt-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full font-extrabold text-sm">+10 points earned</div>
                    <div className="mt-2 text-[11px] bg-slate-100 border px-3 py-1 rounded-full">WhatsApp: “बधाई! 10 पॉइंट मिले” ✓ sent</div>
                    <button onClick={reset} className="mt-4 text-xs font-semibold text-blue-600">Scan again →</button>
                  </div>
                )}
              </div>

              <div className="p-3 bg-white border-t">
                <button onClick={scan} disabled={phase!=="idle"} className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-sm shadow disabled:opacity-60">
                  {phase==="idle"?"◉ Scan QR Code":phase==="verifying"?"⟳ Verifying...":"✓ Done"}
                </button>
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium"><span>Today: <b className="text-slate-900">{pts} pts</b></span><span>⛽ ₹18 saved</span><span>🏆 Rank #12</span></div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button onClick={scan} className="px-4 py-2 rounded-full bg-white font-bold text-xs shadow">▶ Play scan flow</button>
            <button onClick={reset} className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 font-semibold text-xs">↺ Reset</button>
            <Link href="/admin" className="px-4 py-2 rounded-full bg-amber-400 font-bold text-xs">Admin →</Link>
          </div>
        </div>

        {/* Right card with Namaste */}
        <div className="bg-white rounded-2xl p-5 shadow-xl border h-fit">
          <h2 className="font-extrabold text-sm">🙏 Namaste Welcome — <span style={{fontFamily:"Noto Sans Devanagari"}}>नमस्ते</span></h2>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">Woman bowing in Namaste — shown on onboarding & after successful scan. Bhashini switches HI/EN.</p>
          <div className="mt-4 bg-gradient-to-b from-orange-50 to-orange-100 border border-orange-200 rounded-2xl py-4 flex flex-col items-center">
            <Namaste message={phase==="success"?"Dhanyavaad! 🙏":"+10 points added"} sub={phase==="success"?"बधाई हो! — WhatsApp sent ✓":"Ready to scan?"} />
          </div>
          <div className="mt-3 flex gap-2 flex-wrap text-[11px] font-bold">
            <span className="bg-slate-100 border px-2.5 py-1 rounded-full">Supabase streak logic</span>
            <span className="bg-blue-50 border-blue-200 border px-2.5 py-1 rounded-full text-blue-700">WhatsApp API</span>
            <span className="bg-amber-50 border-amber-200 border px-2.5 py-1 rounded-full text-amber-700">OpenAI / Gemini</span>
          </div>
        </div>
      </div>

      <style>{`@keyframes scan{0%{top:16px}50%{top:176px}100%{top:16px}} @keyframes pop{0%{transform:scale(.9);opacity:0}100%{transform:scale(1);opacity:1}}`}</style>
    </div>
  );
}

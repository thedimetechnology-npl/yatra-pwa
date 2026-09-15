import Link from "next/link";

export default function Admin(){
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="font-extrabold">Yatra Rewards — Admin Dashboard</div>
        <Link href="/scan" className="text-xs bg-white text-slate-900 px-3 py-1.5 rounded-full font-bold">Back to Scan →</Link>
      </div>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["12.4k","Total Scans","from-amber-500 to-orange-500"],
            ["3.2k","Active Users","from-blue-500 to-indigo-500"],
            ["68%","Streak 7d","from-emerald-500 to-teal-500"],
            ["₹1.8L","Rewards Given","from-violet-500 to-purple-500"],
          ].map(([v,l,g])=>(
            <div key={l} className={`bg-gradient-to-br ${g} text-white rounded-2xl p-4 shadow`}>
              <div className="text-2xl font-extrabold">{v}</div><div className="text-xs opacity-90">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-white rounded-2xl border shadow p-4">
          <div className="font-bold text-sm">Recent Scans</div>
          <table className="w-full text-sm mt-3">
            <thead className="text-[11px] tracking-widest text-slate-400"><tr><th className="text-left py-2">USER</th><th className="text-left">ROUTE</th><th className="text-left">TIME</th><th className="text-left">POINTS</th><th>STATUS</th></tr></thead>
            <tbody className="text-xs">
              {[
                ["Aarav S.","DL-04 202 — CP to Dwarka","2 min ago","+10","Verified"],
                ["Priya K.","DL-01 101 — Lajpat Nagar","8 min ago","+10","Verified"],
                ["Rohit M.","DL-07 303 — Rohini","15 min ago","+10","Verified"],
              ].map(r=>(
                <tr key={r[0]} className="border-t"><td className="py-2.5 font-semibold">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="font-bold text-emerald-600">{r[3]}</td><td><span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-bold text-[11px]">{r[4]}</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

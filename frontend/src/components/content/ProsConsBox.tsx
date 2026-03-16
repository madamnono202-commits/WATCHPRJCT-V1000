interface ProsConsBoxProps {
  pros: string[];
  cons: string[];
}

export default function ProsConsBox({ pros, cons }: ProsConsBoxProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
      {/* Pros */}
      <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
        <h4 className="text-emerald-700 text-[0.65rem] uppercase tracking-[0.2em] font-semibold mb-5 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          What We Love
        </h4>
        <ul className="space-y-3.5">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-[1.7]">
              <span className="text-emerald-400 mt-0.5 shrink-0 text-base leading-none font-light">+</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
        <h4 className="text-rose-700 text-[0.65rem] uppercase tracking-[0.2em] font-semibold mb-5 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          Could Be Better
        </h4>
        <ul className="space-y-3.5">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-[1.7]">
              <span className="text-rose-400 mt-0.5 shrink-0 text-base leading-none font-light">&minus;</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

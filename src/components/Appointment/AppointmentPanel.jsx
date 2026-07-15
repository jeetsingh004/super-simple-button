export default function AppointmentPanel() {
  return (
    <aside className="relative overflow-hidden rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-white/95 to-stone-50/95 p-7 shadow-[0_20px_60px_rgba(212,175,55,0.12)] backdrop-blur-sm">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50/80 px-3 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-amber-700">
        Fast booking
      </div>
      <h3 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
        Get a tailored plan in minutes
      </h3>
      <p className="mb-6 text-base leading-7 text-slate-600">
        Complete the form and Fitpal will set up a session designed around your fitness goals.
      </p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
          <span className="mt-0.5 text-base text-amber-600">✦</span>
          <span>Personalized workout focus</span>
        </li>
        <li className="flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
          <span className="mt-0.5 text-base text-amber-600">✦</span>
          <span>Nutrition-friendly recommendations</span>
        </li>
        <li className="flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
          <span className="mt-0.5 text-base text-amber-600">✦</span>
          <span>Flexible times that fit your schedule</span>
        </li>
      </ul>
    </aside>
  )
}

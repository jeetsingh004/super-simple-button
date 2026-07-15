import { useState } from 'react'

export default function AppointmentForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState('')

  function submit(e) {
    e.preventDefault()
    const appt = { name, email, msg, created: Date.now() }
    try {
      const list = JSON.parse(localStorage.getItem('fitpal_appts') || '[]')
      list.push(appt)
      localStorage.setItem('fitpal_appts', JSON.stringify(list))
      setOk('Appointment saved — we will contact you.')
      setName('')
      setEmail('')
      setMsg('')
      setTimeout(() => setOk(''), 3500)
    } catch (error) {
      setOk('Could not save appointment')
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-slate-700">Name</span>
          <input className="rounded-2xl border border-stone-200 bg-white/95 px-4 py-3.5 text-sm shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-slate-700">Email</span>
          <input className="rounded-2xl border border-stone-200 bg-white/95 px-4 py-3.5 text-sm shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-slate-700">Notes</span>
        <textarea className="min-h-[140px] rounded-2xl border border-stone-200 bg-white/95 px-4 py-3.5 text-sm shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100" placeholder="Tell us your goals, preferences, and any health notes" value={msg} onChange={e => setMsg(e.target.value)} />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 px-5 py-3.5 font-semibold text-slate-900 shadow-lg shadow-amber-200 transition hover:-translate-y-0.5 hover:shadow-xl">
          Book session
        </button>
        {ok && <span className="text-sm font-semibold text-slate-700">{ok}</span>}
      </div>
    </form>
  )
}

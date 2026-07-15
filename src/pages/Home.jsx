// src/pages/Home.jsx
import { useEffect, useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('fitpal_chat') || 'null') || [{ from: 'bot', text: "Hi! I'm Fitpal.AI assistant. Ask about workouts or diets." }]
    } catch (error) {
      return [{ from: 'bot', text: "Hi! I'm Fitpal.AI assistant. Ask about workouts or diets." }]
    }
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem('fitpal_chat', JSON.stringify(messages.slice(-40)))
    } catch (error) {
      // ignore storage errors
    }
  }, [messages])

  const send = () => {
    if (!input.trim()) return
    setMessages(m => [...m, { from: 'user', text: input }])
    const q = input
    setInput('')
    setTimeout(() => setMessages(m => [...m, { from: 'bot', text: replyFor(q) }]), 700)
  }

  const replyFor = t => {
    const s = t.toLowerCase()
    if (s.includes('workout')) return 'Try a 3-day split: push/pull/legs.'
    if (s.includes('diet') || s.includes('calorie')) return 'Aim for a small calorie deficit with high protein.'
    if (s.includes('hi') || s.includes('hello')) return 'Hello — how can I help?'
    return 'I can help with workouts, diets, and appointments.'
  }

  return (
    <section className="animate-fade-up rounded-[2rem] border border-stone-200/80 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8 lg:p-12">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="mb-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Welcome
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Ask Fitpal for workout, nutrition, or session guidance in a quick chat.
          </p>
        </div>
        <div className="max-w-xl rounded-[1.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 to-stone-50 p-5 text-sm font-medium leading-7 text-slate-700 shadow-sm">
          Type a question and get smart, actionable fitness advice instantly.
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/95 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:p-5">
        <div className="max-h-[420px] overflow-auto rounded-[1.5rem] border border-stone-200/70 bg-stone-50/80 p-4">
          {messages.map((m, i) => (
            <div key={i} className={`mb-3 max-w-[78%] rounded-[1.25rem] px-4 py-3 text-sm font-medium leading-6 break-words shadow-sm ${m.from === 'user' ? 'ml-auto bg-gradient-to-r from-amber-500 to-amber-700 text-white' : 'border border-stone-200 bg-white text-slate-800'}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input className="flex-1 rounded-[1.25rem] border border-stone-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about workouts, diets, or bookings..." onKeyDown={e => e.key === 'Enter' && send()} />
          <button className="rounded-[1.25rem] bg-gradient-to-r from-amber-500 to-amber-700 px-5 py-3.5 font-semibold text-slate-900 shadow-lg shadow-amber-200 transition hover:-translate-y-0.5" onClick={send}>
            Send
          </button>
        </div>
      </div>
    </section>
  )
}

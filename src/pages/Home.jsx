// src/pages/Home.jsx
import { useEffect, useState } from 'react'

export default function Home(){
  const [messages, setMessages] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem('fitpal_chat')||'null') || [{from:'bot',text:"Hi! I'm Fitpal.AI assistant. Ask about workouts or diets."}] }catch(e){return [{from:'bot',text:"Hi! I'm Fitpal.AI assistant. Ask about workouts or diets."}]}
  })
  const [input, setInput] = useState('')

  useEffect(()=>{ try{ localStorage.setItem('fitpal_chat', JSON.stringify(messages.slice(-40))) }catch(e){} },[messages])

  const send = ()=>{
    if(!input.trim()) return
    setMessages(m=>[...m, {from:'user',text:input}])
    const q = input; setInput('')
    setTimeout(()=> setMessages(m=>[...m, {from:'bot',text:replyFor(q)}]), 700)
  }

  const replyFor = (t)=>{ const s=t.toLowerCase(); if(s.includes('workout')) return 'Try a 3-day split: push/pull/legs.'; if(s.includes('diet')||s.includes('calorie')) return 'Aim for a small calorie deficit with high protein.'; if(s.includes('hi')||s.includes('hello')) return 'Hello — how can I help?'; return 'I can help with workouts, diets, and appointments.' }

  return (
    <section className="page">
      <div className="page-head">
        <div>
          <h2>Welcome</h2>
          <p className="muted">Ask Fitpal for workout, nutrition, or session guidance in a quick chat.</p>
        </div>
        <div className="appoint-hero chat-hero">
          <span>Type a question and get smart, actionable fitness advice instantly.</span>
        </div>
      </div>

      <div className="chatbot">
        <div className="messages">
          {messages.map((m,i)=> <div key={i} className={"msg "+m.from}>{m.text}</div>)}
        </div>
        <div className="chat-input">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about workouts, diets, or bookings..." onKeyDown={e=>e.key==='Enter'&&send()} />
          <button className="send" onClick={send}>Send</button>
        </div>
      </div>
    </section>
  )
}

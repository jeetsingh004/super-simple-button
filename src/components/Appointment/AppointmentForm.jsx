import { useState } from 'react'

export default function AppointmentForm() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [msg,setMsg]=useState('')
  const [ok,setOk]=useState('')

  function submit(e){
    e.preventDefault()
    const appt={name,email,msg,created:Date.now()}
    try{
      const list=JSON.parse(localStorage.getItem('fitpal_appts')||'[]')
      list.push(appt); localStorage.setItem('fitpal_appts',JSON.stringify(list))
      setOk('Appointment saved — we will contact you.')
      setName('');setEmail('');setMsg('')
      setTimeout(()=>setOk(''),3500)
    }catch(e){setOk('Could not save appointment')}
  }

  return (
    <form className="appoint-form" onSubmit={submit}>
      <div className="form-grid">
        <label className="form-field">
          <span>Name</span>
          <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </label>
      </div>

      <label className="form-field">
        <span>Notes</span>
        <textarea placeholder="Tell us your goals, preferences, and any health notes" value={msg} onChange={e=>setMsg(e.target.value)} />
      </label>

      <div className="form-row">
        <button type="submit" className="btn">Book session</button>
        {ok && <span className="ok">{ok}</span>}
      </div>
    </form>
  )
}

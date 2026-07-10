// src/pages/Appoint.jsx
import AppointmentLayout from '../components/Appointment/AppointmentLayout.jsx'
import AppointmentPanel from '../components/Appointment/AppointmentPanel.jsx'
import AppointmentForm from '../components/Appointment/AppointmentForm.jsx'

export default function Appoint(){
  return (
    <AppointmentLayout>
      <div className="page-head">
        <div>
          <h2>Book a session</h2>
          <p className="muted">Share a few details so we can prepare a plan just for you.</p>
        </div>
        <div className="appoint-hero">
          <span>Tell us your goals, experience level, and preferred timing.</span>
        </div>
      </div>

      <div className="appoint-grid">
        <AppointmentPanel />
        <AppointmentForm />
      </div>
    </AppointmentLayout>
  )
}

// src/pages/Appoint.jsx
import AppointmentLayout from '../components/Appointment/AppointmentLayout.jsx'
import AppointmentPanel from '../components/Appointment/AppointmentPanel.jsx'
import AppointmentForm from '../components/Appointment/AppointmentForm.jsx'

export default function Appoint() {
  return (
    <AppointmentLayout>
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="mb-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Book a session
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Share a few details so we can prepare a plan just for you.
          </p>
        </div>
        <div className="max-w-xl rounded-[1.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 to-stone-50 p-5 text-sm font-medium leading-7 text-slate-700 shadow-sm">
          Tell us your goals, experience level, and preferred timing.
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <AppointmentPanel />
        <AppointmentForm />
      </div>
    </AppointmentLayout>
  )
}

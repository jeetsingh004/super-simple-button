import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', iconPath: 'M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z' },
  { to: '/workout', label: 'Workout', iconPath: 'M21 7h-2l-1 3-3 1-1-1-3 1-2-2-2 1v6h18z' },
  { to: '/diet', label: 'Diet', iconPath: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z' },
  { to: '/appoint', label: 'Appoint', iconPath: 'M7 10h10v2H7zM5 6h2v2H5zM17 6h2v2h-2zM5 18h14v-6H5z' },
]

function NavIcon({ path }) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path fill="currentColor" d={path} />
    </svg>
  )
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-stone-200/80 bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <h1 className="m-0 text-2xl font-bold tracking-[-0.02em] text-amber-600" style={{ fontFamily: 'var(--font-display)' }}>
          Fitpal.AI
        </h1>

        <button
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200/70 bg-white/95 text-slate-700 transition hover:scale-105 hover:border-amber-400 hover:bg-white md:hidden ${menuOpen ? 'shadow-md' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span className={`block h-0.5 w-4 rounded-full bg-slate-700 transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`my-1 block h-0.5 w-4 rounded-full bg-slate-700 transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-4 rounded-full bg-slate-700 transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        <nav className={menuOpen ? 'flex w-full flex-col gap-3 rounded-3xl border border-stone-200/80 bg-white/95 p-4 shadow-lg md:flex md:w-auto md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none' : 'hidden md:flex md:items-center md:gap-2'}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-amber-50 hover:text-slate-900 ${
                  isActive
                    ? 'border-transparent bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-lg shadow-amber-200'
                    : 'border-transparent bg-white/80 text-slate-600'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              <NavIcon path={item.iconPath} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

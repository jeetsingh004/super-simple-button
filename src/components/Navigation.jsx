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
    <svg className="icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path fill="currentColor" d={path} />
    </svg>
  )
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="app-header">
      <div className="container header-row">
        <h1 className="logo">Fitpal.AI</h1>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
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

// App.jsx
import { HashRouter } from 'react-router-dom'
import './App.css'

import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import AppRoutes from './components/AppRoutes.jsx'

export default function App() {
  return (
    <HashRouter>
      <div className="theme-light min-h-screen bg-stone-50 text-slate-900">{/* force light mode */}
        <Navigation />

        <main className="container main-content mx-auto flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </HashRouter>
  )
}

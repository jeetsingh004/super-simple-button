// App.jsx
import { HashRouter } from 'react-router-dom'
import './App.css'

import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import AppRoutes from './components/AppRoutes.jsx'

export default function App() {
  return (
    <HashRouter>
      <div className="theme-light">{/* force light mode */}
        <Navigation />

        <main className="container main-content">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </HashRouter>
  )
}

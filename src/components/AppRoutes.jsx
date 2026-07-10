import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import WorkoutPlan from '../pages/WorkoutPlan.jsx'
import DietPlan from '../pages/DietPlan.jsx'
import Appoint from '../pages/Appoint.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout" element={<WorkoutPlan />} />
      <Route path="/diet" element={<DietPlan />} />
      <Route path="/appoint" element={<Appoint />} />
    </Routes>
  )
}

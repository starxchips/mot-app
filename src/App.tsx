import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Onboarding from './pages/Onboarding'
import Home from './pages/Home'
import ExhibitDetails from './pages/ExhibitDetails'
import Congratulations from './pages/Congratulations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exhibit/:id" element={<ExhibitDetails />} />
        <Route path="/congratulations" element={<Congratulations />} />

        {/* Fallback: unknown routes go to onboarding */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

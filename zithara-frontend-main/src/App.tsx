import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import CompanyDashboard from './pages/CompanyDashboard'
import Navbar from './components/Navbar'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/company-dashboard" element={<CompanyDashboard />} />
    </Routes>
  </BrowserRouter>
)

export default App

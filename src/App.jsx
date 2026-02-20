import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PricesPage from './pages/PricesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

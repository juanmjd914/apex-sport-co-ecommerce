import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-on-background antialiased overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Cart side panel drawer */}
      <CartDrawer />

      {/* Main Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* WhatsApp Chat Floating Trigger */}
      <WhatsAppButton />
    </div>
  )
}

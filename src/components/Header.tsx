import { Link, useLocation } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const { cart, toggleCart } = useCartStore()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="w-full flex flex-col sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
      <div className="max-w-[1280px] mx-auto w-full px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-headline-md font-headline-md font-black text-primary tracking-tight select-none">
            APEX SPORT CO.
          </Link>
        </div>

        {/* Search Bar (desktop) */}
        <div className="hidden md:flex flex-1 max-w-xs mx-6 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-body-sm focus:ring-2 focus:ring-primary outline-none"
            placeholder="Buscar equipamiento..."
            type="text"
          />
        </div>

        {/* Navigation Links (desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-body-md transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-primary border-b-2 border-primary font-bold pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Trailing Icons */}
        <div className="flex items-center gap-6 ml-6">
          <button className="text-primary hover:opacity-80 transition-opacity hidden sm:block p-1">
            <User size={22} className="stroke-[1.5]" />
          </button>
          
          <button onClick={toggleCart} className="relative text-primary hover:opacity-80 transition-opacity p-1">
            <ShoppingCart size={22} className="stroke-[1.5]" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary p-1 hover:bg-surface-container rounded-md"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface-container-lowest border-t border-outline-variant py-3 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body-md py-2 border-b border-surface-container last:border-0 ${
                isActive(link.path)
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

import { Link } from 'react-router-dom'
import { Share2, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface py-20 px-6 mt-auto text-surface-variant">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6 text-left">
          <span className="text-headline-md font-headline-md text-surface-container-lowest font-black tracking-tight">
            APEX SPORT CO.
          </span>
          <p className="text-body-sm text-surface-variant max-w-xs">
            Equipamiento técnico para atletas que desafían sus propios límites. Calidad sueca, rendimiento global.
          </p>
        </div>

        {/* Categories */}
        <div className="text-left">
          <h4 className="text-label-caps text-primary-fixed mb-6">DEPORTES</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/tienda" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Surf
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Alpinismo
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Snowboard
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Montaña
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="text-left">
          <h4 className="text-label-caps text-primary-fixed mb-6">ATENCIÓN AL CLIENTE</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/contacto" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Envíos y Devoluciones
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Guía de Tallas
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="text-body-sm text-surface-variant hover:text-surface-bright transition-colors">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        {/* Social/Legal */}
        <div className="space-y-12 text-left">
          <div>
            <h4 className="text-label-caps text-primary-fixed mb-6">SÍGUENOS</h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-surface-variant hover:text-surface-bright hover:border-surface-bright transition-all">
                <Share2 size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-surface-variant hover:text-surface-bright hover:border-surface-bright transition-all">
                <Globe size={18} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-body-sm text-surface-variant opacity-60">
              © 2026 APEX SPORT CO. Todos los derechos reservados.
            </p>
            <p className="text-body-sm text-surface-variant">
              Desarrollado por{' '}
              <a
                href="https://technecreativ.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold hover:text-primary transition-colors text-white"
              >
                Techne Creativ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

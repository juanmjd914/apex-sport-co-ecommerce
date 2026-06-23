import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, Waves, ShieldAlert, Award, ShoppingCart, Check } from 'lucide-react'
import { useCartStore } from '../store/useCartStore'

const BEST_SELLERS = [
  {
    id: '14',
    name: "Traction-Pro Carbon Cleats",
    price: 160000,
    image: "/asset/producto14.webp",
    category: "Calzado Deportivo",
    sport: "FÚTBOL",
    badge: "NUEVO"
  },
  {
    id: '16',
    name: "Glacier Shield Down Jacket",
    price: 280000,
    image: "/asset/producto16.webp",
    category: "Textil Técnico",
    sport: "ALPINISMO",
    badge: "POPULAR"
  },
  {
    id: '21',
    name: "Wave-Cutter Fish Board 5'10\"",
    price: 720000,
    image: "/asset/producto21.webp",
    category: "Tablas de Surf",
    sport: "SURF"
  },
  {
    id: '25',
    name: "Apex Snowboard Goggles V2",
    price: 120000,
    image: "/asset/producto25.webp",
    category: "Accesorios Técnicos",
    sport: "SNOWBOARD"
  }
]

export default function Home() {
  const { addToCart, setCartOpen } = useCartStore()
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({})

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    })
    setCartOpen(true)

    setAddedItems(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }))
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  }

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-surface-container flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/hero_surf.png"
            alt="Apex Sport Hero"
            className="w-full h-full object-cover object-right select-none"
          />
        </div>

        <div className="max-w-[1700px] mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10 py-20 flex flex-col items-end text-left">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[460px] space-y-6 bg-gradient-to-br from-white/35 to-white/15 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/45 shadow-2xl"
          >
            <span className="text-label-caps bg-primary/10 text-primary px-3 py-1.5 rounded-full inline-block font-bold">
              COLECCIÓN ESCANDINAVA 2026
            </span>
            <h1 className="text-display-lg font-display-lg text-primary tracking-tight uppercase leading-none">
              DISEÑO HONESTO.
              <br />
              ALTO RENDIMIENTO.
            </h1>
            <p className="text-body-md text-on-surface-variant font-medium">
              Equipamiento técnico minimalista concebido en el norte de Europa para resistir las condiciones más extremas del planeta sin decoraciones superfluas.
            </p>
            <div className="pt-4">
              <Link
                to="/tienda"
                className="px-12 py-4 bg-primary text-on-primary rounded-full font-bold text-body-sm hover:bg-primary-container transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Explorar Colección
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Values Block */}
      <section className="relative bg-gradient-to-br from-surface-container-low via-primary/5 to-surface-container-low py-20 px-6 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-white/35 to-white/15 backdrop-blur-xl border border-white/45 rounded-2xl space-y-4 text-left shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              <Waves size={36} className="text-primary" />
              <h3 className="text-headline-md font-bold text-on-surface">Pureza</h3>
              <p className="text-body-sm text-on-surface-variant">
                Eliminamos todo ornamento innecesario. Nos enfocamos únicamente en la ligereza, ergonomía y rendimiento deportivo puro.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-white/35 to-white/15 backdrop-blur-xl border border-white/45 rounded-2xl space-y-4 text-left shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              <ShieldAlert size={36} className="text-primary" />
              <h3 className="text-headline-md font-bold text-on-surface">Resistencia</h3>
              <p className="text-body-sm text-on-surface-variant">
                Materiales de calidad aeroespacial e hilos técnicos de alta densidad probados en cumbres heladas y mareas árticas.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-white/35 to-white/15 backdrop-blur-xl border border-white/45 rounded-2xl space-y-4 text-left shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              <Award size={36} className="text-primary" />
              <h3 className="text-headline-md font-bold text-on-surface">Sustentabilidad</h3>
              <p className="text-body-sm text-on-surface-variant">
                Comprometidos con el entorno: 100% de nuestras fibras técnicas y resinas son recicladas y certificadas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories (Grid layout using actual assets) */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-label-caps text-primary font-bold">CATEGORÍAS DESTACADAS</span>
          <h2 className="text-display-lg-mobile md:text-headline-lg font-black text-on-surface uppercase">
            Equípate para la aventura
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Surf */}
          <div className="group relative aspect-[4/5] bg-surface-container rounded-lg overflow-hidden border border-outline-variant">
            <img
              src="/asset/seccion surf.webp"
              alt="Categoría Surf"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
              <span className="text-label-caps text-secondary-container font-black mb-1">SERIES DE AGUA</span>
              <h3 className="text-headline-md font-bold mb-2">SURF TÉCNICO</h3>
              <p className="text-body-sm text-surface-variant mb-4 opacity-90 line-clamp-2">
                Tablas de carbono de alta densidad y trajes de neopreno con sellado térmico avanzado.
              </p>
              <Link to="/tienda" className="text-body-sm font-bold text-secondary-container hover:underline inline-flex items-center gap-2">
                Ver Equipamiento <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2: Ropa */}
          <div className="group relative aspect-[4/5] bg-surface-container rounded-lg overflow-hidden border border-outline-variant">
            <img
              src="/asset/seccion ropa.webp"
              alt="Categoría Textil"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
              <span className="text-label-caps text-secondary-container font-black mb-1">TEXTIL TÉCNICO</span>
              <h3 className="text-headline-md font-bold mb-2">VESTIMENTA ACTIVA</h3>
              <p className="text-body-sm text-surface-variant mb-4 opacity-90 line-clamp-2">
                Capas térmicas, cortavientos transpirables y prendas ergonómicas ultraligeras.
              </p>
              <Link to="/tienda" className="text-body-sm font-bold text-secondary-container hover:underline inline-flex items-center gap-2">
                Ver Catálogo <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 3: Deportes Colectivos */}
          <div className="group relative aspect-[4/5] bg-surface-container rounded-lg overflow-hidden border border-outline-variant">
            <img
              src="/asset/seccion football.webp"
              alt="Categoría Deportes Colectivos"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
              <span className="text-label-caps text-secondary-container font-black mb-1">COLECTIVOS</span>
              <h3 className="text-headline-md font-bold mb-2">FÚTBOL & RENDIMIENTO</h3>
              <p className="text-body-sm text-surface-variant mb-4 opacity-90 line-clamp-2">
                Calzado de tracción avanzada, balones termoSellados y protecciones ergonómicas.
              </p>
              <Link to="/tienda" className="text-body-sm font-bold text-secondary-container hover:underline inline-flex items-center gap-2">
                Ver Más <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-gradient-to-br from-surface-container-low via-primary/5 to-surface-container-low py-20 px-6 overflow-hidden relative border-t border-b border-outline-variant">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-label-caps text-primary font-bold">RECOMENDADOS</span>
            <h2 className="text-display-lg-mobile md:text-headline-lg font-black text-on-surface uppercase">
              Los Más Vendidos
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Equipamiento técnico premium probado y elegido por atletas de alto rendimiento en condiciones reales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEST_SELLERS.map((product) => (
              <div key={product.id} className="group relative bg-gradient-to-br from-white/35 to-white/15 backdrop-blur-xl border border-white/45 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col text-left">
                <div className="aspect-square w-full bg-surface-container/30 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{product.sport}</span>
                    <h3 className="font-bold text-body-md text-on-surface line-clamp-2 min-h-[48px]">{product.name}</h3>
                    <p className="text-[12px] text-on-surface-variant font-medium">{product.category}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-headline-md font-extrabold text-primary">${product.price.toLocaleString('es-CL')}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`p-2.5 rounded-full transition-colors cursor-pointer flex items-center justify-center ${
                        addedItems[product.id]
                          ? 'bg-emerald-500 text-white'
                          : 'bg-primary text-white hover:bg-primary-container'
                      }`}
                    >
                      {addedItems[product.id] ? <Check size={18} /> : <ShoppingCart size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/tienda"
              className="px-12 py-4 bg-primary text-on-primary rounded-full font-bold text-body-sm hover:bg-primary-container transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Ver Todo el Catálogo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Showroom Spotlight Section (using mostrador.webp) */}
      <section className="w-full py-20 bg-surface-container">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 aspect-video rounded-lg overflow-hidden border border-outline-variant bg-surface-container-low">
            <img src="/asset/mostrador.webp" alt="APEX Showroom" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-label-caps text-primary font-bold">NUESTRO ESPACIO</span>
            <h2 className="text-display-lg-mobile md:text-headline-lg font-black text-on-surface uppercase leading-tight">
              Ingeniería aplicada al deporte
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Cada uno de nuestros productos pasa por pruebas de fatiga en túneles de viento y simulaciones de impacto antes de ser expuestos en nuestra sala de exhibición en Chamonix.
            </p>
            <p className="text-body-sm text-on-surface-variant">
              Creemos que el deportista de alto rendimiento merece herramientas fiables, libres de trucos de marketing. Diseño directo de la fábrica a la montaña.
            </p>
            <div className="pt-4">
              <Link
                to="/nosotros"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold text-body-sm transition-all duration-300 inline-block"
              >
                Conoce Nuestra Filosofía
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

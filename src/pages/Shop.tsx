import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'
import { ShoppingCart, Check, Filter, X, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  sport: string
  onSale?: boolean
  originalPrice?: number
  badge?: string
  specs: string[]
}

const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    name: "Apex Pro Carbon Board 6'2\"",
    price: 849.00,
    image: "/asset/producto1.webp",
    category: "Tablas de Surf",
    sport: "SURF",
    badge: "NUEVO",
    specs: [
      "Construcción en fibra de carbono Pro-Core para máxima flexión y respuesta.",
      "Longitud: 6'2\" | Ancho: 19.5\" | Grosor: 2.5\" | Volumen: 32L.",
      "Sistema de quillas FCS II de tres tapones.",
      "Ideal para surfistas de nivel intermedio a avanzado en olas de 1 a 2.5 metros."
    ]
  },
  {
    id: '2',
    name: "Summit Tech Ice Boots",
    price: 320.00,
    image: "/asset/producto2.webp",
    category: "Calzado de Montaña",
    sport: "ALPINISMO",
    onSale: true,
    originalPrice: 400.00,
    specs: [
      "Compatible con crampones semiautomáticos y automáticos.",
      "Membrana impermeable y transpirable Gore-Tex Duratherm.",
      "Suela Vibram Mont para máxima tracción en hielo y roca húmeda.",
      "Aislamiento térmico de alta densidad para temperaturas de hasta -15°C."
    ]
  },
  {
    id: '3',
    name: "Aero-Shield Pro Helmet",
    price: 189.00,
    image: "/asset/producto3.webp",
    category: "Accesorios Técnicos",
    sport: "SNOWBOARD",
    specs: [
      "Carcasa de ABS de alta resistencia contra impactos de alta energía.",
      "Sistema de protección contra impactos multidireccionales MIPS.",
      "Ventilación activa regulable con 12 canales internos.",
      "Orejeras desmontables compatibles con sistemas de audio."
    ]
  },
  {
    id: '4',
    name: "Thermo-Flex 4/3mm Wetsuit",
    price: 295.00,
    image: "/asset/producto4.webp",
    category: "Trajes de Neopreno",
    sport: "SURF",
    specs: [
      "Neopreno ultra elástico de base calcárea de 4/3mm de espesor.",
      "Cierre Chest-Zip (cremallera en el pecho) para mayor flexibilidad.",
      "Costuras invisibles pegadas y tres veces selladas (GBS).",
      "Forro térmico interno de fibra de secado rápido en pecho y espalda."
    ]
  },
  {
    id: '5',
    name: "Cloud-Splitter 156 Wide",
    price: 540.00,
    image: "/asset/producto5.webp",
    category: "Accesorios Técnicos",
    sport: "SNOWBOARD",
    specs: [
      "Perfil de Camber Híbrido All-Mountain para control y flotabilidad.",
      "Núcleo de madera ligera de álamo y paulownia con refuerzo de carbono.",
      "Cantos de acero reforzados de alta durabilidad contra rocas.",
      "Suela sinterizada de peso ultra-alto molecular para velocidad máxima."
    ]
  },
  {
    id: '6',
    name: "High-Peak Ultralight Tent",
    price: 425.00,
    image: "/asset/producto6.webp",
    category: "Accesorios Técnicos",
    sport: "ALPINISMO",
    badge: "POPULAR",
    specs: [
      "Carpa técnica de 3 estaciones para 2 personas.",
      "Estructura autoportante con varillas de duraluminio DAC.",
      "Cubierta impermeable con columna de agua de 3000mm.",
      "Suelo reforzado de Nylon Ripstop con columna de agua de 5000mm.",
      "Peso total empaquetado de solo 1.8 kg."
    ]
  },
  {
    id: '7',
    name: "Apex Trail Hydration Pack",
    price: 115.00,
    image: "/asset/producto7.webp",
    category: "Accesorios Técnicos",
    sport: "RUNNING",
    specs: [
      "Capacidad total de 12 litros con ajuste de chaleco ergonómico.",
      "Incluye bolsa de hidratación Hydrapak de 2 litros libre de BPA.",
      "Bolsillos frontales elásticos para nutrición y botellas blandas adicionales.",
      "Tejido de malla transpirable y reflectores 3M de 360 grados."
    ]
  },
  {
    id: '8',
    name: "Pro-Climb Vertical Harness",
    price: 98.00,
    image: "/asset/producto8.webp",
    category: "Accesorios Técnicos",
    sport: "ALPINISMO",
    specs: [
      "Arnés de escalada técnica ajustable con cinturón ergonómico.",
      "Hebillas de ajuste rápido DoubleBack en cintura y perneras.",
      "4 porta-materiales moldeados y 2 trabillas para porta-herramientas.",
      "Acolchado de espuma EVA perforada para óptima ventilación."
    ]
  },
  {
    id: '9',
    name: "Kevlar Core Dry Rope 60m",
    price: 180.00,
    image: "/asset/producto9.webp",
    category: "Accesorios Técnicos",
    sport: "ALPINISMO",
    specs: [
      "Cuerda dinámica de 9.8mm con núcleo reforzado con Kevlar.",
      "Tratamiento hidrófugo UIAA Dry en alma y funda.",
      "Fuerza de impacto de 8.2 kN con 8 caídas UIAA garantizadas.",
      "Peso de 62 gramos por metro."
    ]
  },
  {
    id: '10',
    name: "Summit Ice Ax Pro",
    price: 135.00,
    image: "/asset/producto10.webp",
    category: "Accesorios Técnicos",
    sport: "ALPINISMO",
    specs: [
      "Piolet técnico de 50cm para escalada en hielo y mixto.",
      "Hoja de acero forjado tipo T intercambiable.",
      "Mango curvado de aluminio aeronáutico anodizado.",
      "Empuñadura de doble densidad con gatillo de apoyo ajustable."
    ]
  },
  {
    id: '11',
    name: "Pro Polarized Goggles",
    price: 95.00,
    image: "/asset/producto11.webp",
    category: "Accesorios Técnicos",
    sport: "SNOWBOARD",
    specs: [
      "Lente doble cilíndrica de policarbonato polarizada y fotocromática.",
      "Protección 100% UV400 contra reflejos de nieve.",
      "Tratamiento antivaho permanente en cara interna.",
      "Espuma de triple capa hipoalergénica para máximo confort."
    ]
  },
  {
    id: '12',
    name: "Apex Pro-Ride Bindings",
    price: 220.00,
    image: "/asset/producto12.webp",
    category: "Accesorios Técnicos",
    sport: "SNOWBOARD",
    specs: [
      "Fijaciones con chasis de nylon reforzado con 30% de fibra de vidrio.",
      "Correas de tobillo acolchadas 3D con hebillas de aluminio rápido.",
      "Highback inclinado ajustable sin herramientas.",
      "Acolchado de base completo de EVA con canting de 2.5 grados."
    ]
  },
  {
    id: '13',
    name: "Apex Storm 5/4mm Hooded Wetsuit",
    price: 340.00,
    image: "/asset/producto13.webp",
    category: "Trajes de Neopreno",
    sport: "SURF",
    specs: [
      "Neopreno súper elástico de 5/4mm diseñado para aguas muy frías.",
      "Capucha integrada con ajuste ergonómico y visera para evitar el drenaje de agua fría.",
      "Costuras ciegas, pegadas y completamente encintadas internamente con neopreno líquido.",
      "Forro térmico de fibra hueca en el torso para máxima retención de calor."
    ]
  },
  {
    id: '14',
    name: "Traction-Pro Carbon Cleats",
    price: 160.00,
    image: "/asset/producto14.webp",
    category: "Calzado Deportivo",
    sport: "FÚTBOL",
    badge: "NUEVO",
    specs: [
      "Placa de suela de fibra de carbono para una aceleración y respuesta explosiva.",
      "Tacos diseñados para tracción multidireccional en césped natural y artificial de última generación.",
      "Carcasa superior de microfibra de una sola pieza con textura de control Grip-Skin.",
      "Ajuste tipo calcetín Prime-Fit ultra ligero y de perfil bajo."
    ]
  },
  {
    id: '15',
    name: "Vapor-Dry Match Jersey",
    price: 75.00,
    image: "/asset/producto15.webp",
    category: "Textil Técnico",
    sport: "FÚTBOL",
    specs: [
      "Tejido técnico Vapor-Dry ultra transpirable que absorbe el sudor de la piel.",
      "Costuras planas unidas por calor para eliminar el roce durante el movimiento dinámico.",
      "Paneles de ventilación de malla cortados con láser en las zonas de mayor sudoración.",
      "Ajuste atlético ceñido para máxima libertad de movimiento."
    ]
  },
  {
    id: '16',
    name: "Glacier Shield Down Jacket",
    price: 280.00,
    image: "/asset/producto16.webp",
    category: "Textil Técnico",
    sport: "ALPINISMO",
    badge: "POPULAR",
    specs: [
      "Aislamiento de plumón de ganso de 800 cuins certificado RDS.",
      "Tejido exterior Pertex Quantum Ripstop repelente al agua y cortaviento.",
      "Diseño de tabiques cruzados para evitar la migración del plumón y puntos fríos.",
      "Capucha compatible con casco de escalada con ajuste de tres puntos."
    ]
  },
  {
    id: '17',
    name: "Apex Hydration Flask 500ml",
    price: 28.00,
    image: "/asset/producto17.webp",
    category: "Accesorios Técnicos",
    sport: "RUNNING",
    specs: [
      "Botella flexible de 500ml que se comprime a medida que bebes para evitar el rebote.",
      "Válvula de mordida de alto flujo de silicona con sistema de bloqueo de seguridad.",
      "Material TPU duradero y ultra flexible libre de BPA y PVC.",
      "Apertura ancha de 42mm para rellenado rápido y cubos de hielo."
    ]
  },
  {
    id: '18',
    name: "Nordic Grip Trail Shoes",
    price: 145.00,
    image: "/asset/producto18.webp",
    category: "Calzado Deportivo",
    sport: "RUNNING",
    specs: [
      "Suela Vibram Megagrip con tacos de 5mm para tracción extrema en barro y roca húmeda.",
      "Entresuela de espuma Energy-Cell de alta amortiguación y retorno energético.",
      "Malla superior de Kevlar ultra resistente al desgaste y transpirable.",
      "Sistema de cordones rápidos Quick-Lace con bolsillo para cordones en la lengüeta."
    ]
  },
  {
    id: '19',
    name: "Kevlar Guard Shin Guards",
    price: 45.00,
    image: "/asset/producto19.webp",
    category: "Accesorios Técnicos",
    sport: "FÚTBOL",
    specs: [
      "Carcasa rígida reforzada con fibra de Kevlar para máxima protección contra impactos severos.",
      "Respaldo de espuma EVA ventilada de doble densidad para absorción de impactos.",
      "Mangas de compresión transpirables integradas para mantener la espinillera en su lugar.",
      "Diseño anatómico asimétrico izquierdo/derecho para ajuste preciso."
    ]
  },
  {
    id: '20',
    name: "Apex Match Ball Termosellado",
    price: 85.00,
    image: "/asset/producto20.webp",
    category: "Accesorios Técnicos",
    sport: "FÚTBOL",
    specs: [
      "Balón de fútbol de competición con paneles unidos térmicamente sin costuras.",
      "Capa externa texturizada Aero-Control para un vuelo estable y mayor control del balón.",
      "Cámara de látex de alta densidad para máxima retención de aire y rebote consistente.",
      "Certificado FIFA Quality Pro para los más altos estándares de juego profesional."
    ]
  },
  {
    id: '21',
    name: "Wave-Cutter Fish Board 5'10\"",
    price: 720.00,
    image: "/asset/producto21.webp",
    category: "Tablas de Surf",
    sport: "SURF",
    specs: [
      "Diseño de cola de golondrina (Fish tail) clásica para velocidad y maniobrabilidad en olas medianas.",
      "Construcción en resina epoxi ligera de alta densidad con alma de madera técnica.",
      "Configuración de quillas Quad (cuatro tapones) Future System.",
      "Volumen generoso de 35L ideal para olas de 0.5 a 1.8 metros."
    ]
  },
  {
    id: '22',
    name: "Vapor-Lite Windbreaker",
    price: 110.00,
    image: "/asset/producto22.webp",
    category: "Textil Técnico",
    sport: "RUNNING",
    specs: [
      "Chaqueta cortavientos ultra ligera fabricada con Nylon Ripstop transpirable.",
      "Tratamiento DWR repelente al agua para lluvias ligeras.",
      "Se pliega completamente en su propio bolsillo de pecho para un almacenamiento compacto.",
      "Detalles reflectantes de alta visibilidad para carreras con poca luz."
    ]
  },
  {
    id: '23',
    name: "Apex Pro Carbon Paddle",
    price: 195.00,
    image: "/asset/producto23.webp",
    category: "Accesorios Técnicos",
    sport: "SURF",
    specs: [
      "Pala de remo de fibra de carbono de alto rendimiento para SUP.",
      "Pértiga de rigidez media para reducir la fatiga en hombros y brazos.",
      "Pala perfilada de pala diédrica para una remada estable y sin guiñada.",
      "Ajuste telescópico de longitud rápida con sistema de bloqueo Cam-Lock."
    ]
  },
  {
    id: '24',
    name: "Thermo-Active Base Layer",
    price: 65.00,
    image: "/asset/producto24.webp",
    category: "Textil Técnico",
    sport: "SNOWBOARD",
    specs: [
      "Camiseta térmica de manga larga de lana Merino y fibras sintéticas.",
      "Control de humedad activo y propiedades antibacterianas naturales contra olores.",
      "Costuras planas elásticas de bajo perfil para evitar rozaduras con segundas capas.",
      "Corte ergonómico precurvado diseñado para la postura de snowboard."
    ]
  },
  {
    id: '25',
    name: "Apex Snowboard Goggles V2",
    price: 120.00,
    image: "/asset/producto25.webp",
    category: "Accesorios Técnicos",
    sport: "SNOWBOARD",
    specs: [
      "Lente esférica doble sobredimensionada para un campo de visión periférico máximo.",
      "Sistema magnético de cambio rápido de lentes en 3 segundos.",
      "Tratamiento antivaho Fog-Free y revestimiento resistente a arañazos.",
      "Compatible con la mayoría de cascos del mercado y lentes de prescripción (OTG)."
    ]
  },
  {
    id: '26',
    name: "Apex Alpine Crampons Pro",
    price: 160.00,
    image: "/asset/producto26.webp",
    category: "Accesorios Técnicos",
    sport: "ALPINISMO",
    specs: [
      "Crampones técnicos de acero de 12 puntas para alpinismo y glaciar clásico.",
      "Sistema de fijación mixto (semiautomático) compatible con botas técnicas.",
      "Placas antibott integradas para evitar la acumulación de nieve bajo el pie.",
      "Barra de regulación de longitud micrométrica de ajuste fácil."
    ]
  },
  {
    id: '27',
    name: "Apex Trail-Grip Gloves",
    price: 35.00,
    image: "/asset/producto27.webp",
    category: "Accesorios Técnicos",
    sport: "RUNNING",
    specs: [
      "Guantes de running ligeros con palma de silicona antideslizante.",
      "Puntas de los dedos índice y pulgar compatibles con pantallas táctiles.",
      "Tejido elástico cortaviento con forro polar interior cepillado.",
      "Puño elástico extendido para sellado térmico óptimo."
    ]
  },
  {
    id: '28',
    name: "Apex Wave-Rider Leash 6ft",
    price: 29.00,
    image: "/asset/producto28.webp",
    category: "Accesorios Técnicos",
    sport: "SURF",
    specs: [
      "Leash de poliuretano de alta resistencia de 7mm de diámetro y 6 pies de longitud.",
      "Doble giratorio de acero inoxidable con cojinetes de giro libre para evitar enredos.",
      "Tobillera acolchada de neopreno de felpa de 50mm de ancho para máximo confort.",
      "Sistema de desenganche rápido en el tobillo en caso de emergencia."
    ]
  },
  {
    id: '29',
    name: "Apex Pro Snowboard Wax Kit",
    price: 40.00,
    image: "/asset/producto29.webp",
    category: "Accesorios Técnicos",
    sport: "SNOWBOARD",
    specs: [
      "Kit de encerado completo para snowboard y esquís.",
      "Incluye plancha de cera con control de temperatura, raspador y cepillos.",
      "Cera universal All-Temperature de 120g libre de fluorocarbonos.",
      "Estuche de transporte de nylon Ripstop resistente al agua."
    ]
  },
].map(p => ({
  ...p,
  price: p.price < 5000 ? p.price * 1000 : p.price,
  originalPrice: p.originalPrice ? (p.originalPrice < 5000 ? p.originalPrice * 1000 : p.originalPrice) : undefined
}))

export default function Shop() {
  const { addToCart } = useCartStore()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSports, setSelectedSports] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState<number>(1000000)
  const [sortBy, setSortBy] = useState<string>('relevance')
  const [searchQuery, setSearchQuery] = useState<string>('')
  
  // Track selected product for detail modal
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  
  // Track added items to show temporary "Added" feedback
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({})

  const categories = ["Tablas de Surf", "Trajes de Neopreno", "Accesorios Técnicos", "Calzado de Montaña", "Calzado Deportivo", "Textil Técnico"]
  const sports = ["SURF", "ALPINISMO", "SNOWBOARD", "RUNNING", "FÚTBOL"]

  const handleCategoryChange = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const handleSportToggle = (sport: string) => {
    setSelectedSports(prev =>
      prev.includes(sport) ? prev.filter(s => s !== sport) : [...prev, sport]
    )
  }

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation() // Prevent opening modal
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    })
    
    // Set added state
    setAddedItems(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }))
    }, 2000)
  }

  const handleWhatsAppCheckout = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const message = `Hola APEX Sport Co., me interesa comprar este producto:\n- ${product.name} ($${product.price.toLocaleString('es-CL')})`
    window.open(`https://wa.me/56965174454?text=${encodeURIComponent(message)}`, '_blank')
  }

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_DATA]

    // Search query
    if (searchQuery.trim() !== '') {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    // Sport filter
    if (selectedSports.length > 0) {
      result = result.filter(p => selectedSports.includes(p.sport))
    }

    // Price range
    result = result.filter(p => p.price <= maxPrice)

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [selectedCategories, selectedSports, maxPrice, sortBy, searchQuery])

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col">
      {/* Breadcrumbs & Header */}
      <section className="max-w-[1280px] mx-auto px-6 pt-6 pb-2 w-full text-left">
        <nav className="flex items-center gap-2 text-body-sm text-on-surface-variant mb-2">
          <Link to="/" className="hover:text-primary">Inicio</Link>
          <span className="text-[12px] opacity-50">&gt;</span>
          <span className="font-bold text-primary">Tienda</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-6">
          <div>
            <h1 className="text-display-lg font-display-lg text-primary uppercase">Explorar Equipamiento</h1>
            <p className="text-body-md text-on-surface-variant max-w-[576px]">
              Descubre nuestra selección premium de material deportivo diseñado para el máximo rendimiento en condiciones extremas.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Input in shop header */}
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-outline-variant rounded-lg text-body-sm py-1.5 px-3 focus:ring-primary focus:border-primary outline-none bg-white"
            />
            <div className="flex items-center gap-2">
              <span className="text-label-caps text-on-surface-variant text-[11px] font-bold">ORDENAR POR:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-outline-variant rounded-lg text-body-sm py-1.5 pl-3 pr-8 focus:ring-primary focus:border-primary bg-white outline-none cursor-pointer"
              >
                <option value="relevance">Relevancia</option>
                <option value="price-low">Menor precio</option>
                <option value="price-high">Mayor precio</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 text-left">
            <div className="lg:sticky lg:top-28 space-y-12 bg-surface-container-low p-4 rounded-lg border border-outline-variant lg:border-0 lg:bg-transparent lg:p-0">
              
              <div className="flex items-center gap-2 text-primary mb-6 font-black">
                <Filter size={18} />
                <span className="text-label-caps">FILTRAR POR</span>
              </div>

              {/* Category Filter */}
              <div className="space-y-4">
                <h3 className="text-label-caps text-primary text-[11px] font-bold">CATEGORÍAS</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat}>
                      <label className="flex items-center gap-4 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                          className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                        />
                        <span className={`text-body-sm transition-colors ${
                          selectedCategories.includes(cat) ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary'
                        }`}>
                          {cat}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="space-y-4 pt-4">
                <h3 className="text-label-caps text-primary text-[11px] font-bold">PRECIO MÁXIMO</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="50000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-label-caps text-on-surface-variant text-[10px]">
                    <span>$50.000</span>
                    <span className="font-bold text-primary">${maxPrice.toLocaleString('es-CL')}</span>
                    <span>$1.000.000+</span>
                  </div>
                </div>
              </div>

              {/* Sport Filter */}
              <div className="space-y-4 pt-4">
                <h3 className="text-label-caps text-primary text-[11px] font-bold">DEPORTE</h3>
                <div className="flex flex-wrap gap-2">
                  {sports.map(sport => {
                    const active = selectedSports.includes(sport)
                    return (
                      <button
                        key={sport}
                        onClick={() => handleSportToggle(sport)}
                        className={`px-3 py-1 rounded-full text-label-caps text-[10px] font-bold transition-colors cursor-pointer ${
                          active
                            ? 'bg-primary text-on-primary'
                            : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
                        }`}
                      >
                        {sport}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Clear filters button */}
              {(selectedCategories.length > 0 || selectedSports.length > 0 || maxPrice < 1000 || searchQuery !== '') && (
                <button
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedSports([])
                    setMaxPrice(1000)
                    setSearchQuery('')
                  }}
                  className="w-full py-2 border border-outline text-on-surface-variant hover:border-primary hover:text-primary rounded-full text-body-sm font-bold transition-all text-center cursor-pointer"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center text-on-surface-variant">
                <p className="text-body-md font-bold mb-2">No se encontraron productos</p>
                <p className="text-body-sm">Intenta modificando los filtros de búsqueda.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    onClick={() => setActiveProduct(product)}
                    className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* Image Area */}
                    <div className="aspect-square bg-surface-container-low overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container text-label-caps text-[10px] px-2 py-1 rounded font-bold">
                          {product.badge}
                        </span>
                      )}
                      {product.onSale && (
                        <span className="absolute top-3 right-3 bg-error text-on-error text-label-caps text-[10px] px-2 py-1 rounded font-bold">
                          OFERTA
                        </span>
                      )}
                    </div>

                    {/* Info Area */}
                    <div className="p-4 flex flex-col flex-grow text-left">
                      <span className="text-label-caps text-on-surface-variant text-[10px] mb-1 tracking-widest font-black uppercase">
                        {product.sport}
                      </span>
                      <h4 className="font-bold text-body-sm text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      
                      <div className="mt-auto flex items-end gap-2 pt-2">
                        {product.onSale ? (
                          <>
                            <span className="text-body-md text-error font-black">
                              ${product.price.toLocaleString('es-CL')}
                            </span>
                            <span className="text-[12px] text-outline line-through mb-0.5">
                              ${product.originalPrice?.toLocaleString('es-CL')}
                            </span>
                          </>
                        ) : (
                          <span className="text-body-md text-primary font-black">
                            ${product.price.toLocaleString('es-CL')}
                          </span>
                        )}
                      </div>

                      {/* Add button */}
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className={`mt-6 w-full py-3 rounded-full font-bold text-body-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                          addedItems[product.id]
                            ? 'bg-secondary-container text-on-secondary-container scale-[0.98]'
                            : 'bg-primary text-on-primary hover:bg-primary-container'
                        }`}
                      >
                        {addedItems[product.id] ? (
                          <>
                            <Check size={16} />
                            ¡Añadido!
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={16} />
                            Agregar al carrito
                          </>
                        )}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Product Details Modal Overlay */}
      <AnimatePresence>
        {activeProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[768px] md:h-auto md:max-h-[80vh] bg-white rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row border border-outline-variant text-left"
            >
              {/* Product Image Column */}
              <div className="w-full md:w-1/2 bg-surface-container-low relative flex-shrink-0 aspect-square md:aspect-auto">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProduct(null)}
                  className="absolute top-4 left-4 p-2 bg-white/80 hover:bg-white text-on-surface rounded-full shadow-md transition-colors md:hidden"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Product Content Column */}
              <div className="w-full md:w-1/2 p-6 flex flex-col overflow-y-auto justify-between space-y-6">
                
                {/* Header (Top section) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-label-caps text-on-surface-variant text-[10px] tracking-widest font-black uppercase">
                      {activeProduct.sport} SERIES
                    </span>
                    <button
                      onClick={() => setActiveProduct(null)}
                      className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant hover:text-primary transition-colors hidden md:block cursor-pointer"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <h3 className="font-bold text-headline-md text-primary leading-tight">
                    {activeProduct.name}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant font-medium">
                    Categoría: {activeProduct.category}
                  </p>
                </div>

                {/* Price block */}
                <div className="flex items-end gap-xs border-y border-outline-variant/30 py-3">
                  {activeProduct.onSale ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-price-lg text-error font-black">
                        ${activeProduct.price.toLocaleString('es-CL')}
                      </span>
                      <span className="text-body-sm text-outline line-through">
                        ${activeProduct.originalPrice?.toLocaleString('es-CL')}
                      </span>
                      <span className="text-label-caps bg-error-container text-on-error-container px-2 py-0.5 rounded text-[10px]">
                        AHORRAS ${(activeProduct.originalPrice! - activeProduct.price).toLocaleString('es-CL')}
                      </span>
                    </div>
                  ) : (
                    <span className="text-price-lg text-primary font-black">
                      ${activeProduct.price.toLocaleString('es-CL')}
                    </span>
                  )}
                </div>

                {/* Technical Specifications */}
                <div className="space-y-3 flex-grow">
                  <h4 className="text-label-caps text-primary text-[11px] font-black tracking-wider flex items-center gap-xs">
                    <Settings size={14} />
                    ESPECIFICACIONES TÉCNICAS
                  </h4>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant leading-relaxed">
                    {activeProduct.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-xs">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-4 border-t border-outline-variant/30">
                  <button
                    onClick={() => handleAddToCart(activeProduct)}
                    className={`w-full py-3 rounded-full font-bold text-body-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      addedItems[activeProduct.id]
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-primary text-on-primary hover:bg-primary-container'
                    }`}
                  >
                    {addedItems[activeProduct.id] ? (
                      <>
                        <Check size={16} />
                        ¡Añadido!
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        Añadir al carro
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleWhatsAppCheckout(activeProduct)}
                    className="w-full py-3 bg-[#25D366] text-white rounded-full font-bold text-body-sm hover:bg-[#1ebd59] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    Comprar Ahora
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

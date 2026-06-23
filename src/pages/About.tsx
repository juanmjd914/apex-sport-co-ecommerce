import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Ruler, ShieldAlert, Award } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  }

  return (
    <div className="w-full bg-surface flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 space-y-6"
        >
          <h1 className="text-display-lg font-display-lg text-primary uppercase">Nuestra Historia</h1>
          <p className="text-body-md leading-relaxed text-on-surface-variant max-w-[576px]">
            Nacimos en el corazón de Escandinavia con una misión clara: democratizar el acceso a equipamiento deportivo de alto rendimiento sin comprometer la estética. APEX SPORT CO. es el resultado de años de ingeniería y pasión por el movimiento.
          </p>
          <p className="text-body-md leading-relaxed text-on-surface-variant max-w-[576px]">
            Lo que comenzó como un pequeño taller de tablas de surf en 2014 se ha convertido en una referencia global para atletas que buscan honestidad en los materiales y pureza en el diseño. No vendemos solo productos; facilitamos experiencias humanas en la naturaleza.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container border border-outline-variant">
            <img
              className="w-full h-full object-cover"
              src="/asset/seccion 15.webp"
              alt="Mountain climber at peak"
            />
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-surface-container-low py-20 px-6 text-left">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-label-caps font-black text-primary block">EL ADN DE APEX</span>
            <h2 className="text-display-lg-mobile md:text-headline-lg font-black text-on-surface uppercase">Nuestros Valores</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' }}
              className="p-8 bg-white border border-outline-variant rounded-lg space-y-6 transition-all duration-300 group cursor-default"
            >
              <Ruler size={36} className="text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-headline-md font-bold text-on-surface">Minimalismo</h3>
              <p className="text-body-sm text-on-surface-variant">
                Eliminamos lo innecesario para centrarnos en lo que realmente importa: tu rendimiento. El diseño limpio reduce la fatiga visual y mental.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' }}
              className="p-8 bg-white border border-outline-variant rounded-lg space-y-6 transition-all duration-300 group cursor-default"
            >
              <ShieldAlert size={36} className="text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-headline-md font-bold text-on-surface">Funcionalidad</h3>
              <p className="text-body-sm text-on-surface-variant">
                Cada costura, cada material y cada ángulo tiene un propósito técnico. La forma siempre sigue a la función en cada una de nuestras piezas.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' }}
              className="p-8 bg-white border border-outline-variant rounded-lg space-y-6 transition-all duration-300 group cursor-default"
            >
              <Award size={36} className="text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-headline-md font-bold text-on-surface">Durabilidad</h3>
              <p className="text-body-sm text-on-surface-variant">
                Creemos en el consumo responsable. Creamos productos que duran décadas, resistiendo las condiciones más extremas del planeta.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full py-12 bg-primary text-on-primary select-none">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <p className="text-display-lg-mobile md:text-display-lg font-black leading-none">5000+</p>
            <p className="text-label-caps text-[10px] opacity-80 uppercase tracking-widest font-black">Clientes Globales</p>
          </div>
          <div className="space-y-2">
            <p className="text-display-lg-mobile md:text-display-lg font-black leading-none">15</p>
            <p className="text-label-caps text-[10px] opacity-80 uppercase tracking-widest font-black">Países</p>
          </div>
          <div className="space-y-2">
            <p className="text-display-lg-mobile md:text-display-lg font-black leading-none">100%</p>
            <p className="text-label-caps text-[10px] opacity-80 uppercase tracking-widest font-black">Material Reciclado</p>
          </div>
          <div className="space-y-2">
            <p className="text-display-lg-mobile md:text-display-lg font-black leading-none">24/7</p>
            <p className="text-label-caps text-[10px] opacity-80 uppercase tracking-widest font-black">Soporte Técnico</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="w-full py-20 px-6 max-w-[1280px] mx-auto text-left">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-square bg-surface-container relative overflow-hidden rounded-lg border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="/asset/mostrador1.webp"
                alt="Elena Lund y Markus Berg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-display-lg-mobile md:text-headline-lg font-black text-on-surface uppercase">El Equipo Detrás</h2>
            <p className="text-body-md text-on-surface-variant">
              Fundada por Elena Lund y Markus Berg, APEX nació de la frustración por el equipo deportivo excesivamente decorado y de baja calidad. Juntos, reunieron a un grupo de ingenieros textiles y diseñadores industriales para redefinir el estándar.
            </p>
            <div className="flex flex-col gap-2 border-l-2 border-primary pl-6 my-6 py-1 bg-surface-container-low/50 pr-4 rounded-r-md">
              <p className="text-body-md font-bold italic text-primary">
                "No diseñamos para el escaparate, diseñamos para el fin del mundo."
              </p>
              <p className="text-label-caps text-[10px] font-bold text-on-surface-variant">
                — Elena Lund, Co-Fundadora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 px-6 max-w-[1280px] mx-auto">
        <div className="bg-surface-container-high p-8 md:p-12 rounded-xl space-y-6">
          <h2 className="text-display-lg-mobile md:text-headline-lg font-black text-on-surface uppercase text-center">
            Únete a la Revolución
          </h2>
          <p className="text-body-md text-on-surface-variant text-center max-w-2xl mx-auto">
            ¿Estás listo para llevar tu rendimiento al siguiente nivel con el diseño más honesto del mercado? Explora nuestras colecciones actuales.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link
              to="/tienda"
              className="bg-primary text-on-primary rounded-full px-12 py-3 font-bold hover:bg-primary-container transition-colors"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/contacto"
              className="border border-primary text-primary rounded-full px-12 py-3 font-bold hover:bg-primary hover:text-white transition-all"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

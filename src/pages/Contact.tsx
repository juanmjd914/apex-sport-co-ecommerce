import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageSquare, Mail, Share2, MapPin, ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Cuál es el plazo de entrega para pedidos internacionales?',
    answer: 'Los envíos internacionales suelen tardar entre 5 y 10 días laborables, dependiendo de la ubicación y el servicio de aduanas. Todos nuestros envíos incluyen seguimiento en tiempo real.',
  },
  {
    question: '¿Cómo puedo tramitar una devolución?',
    answer: 'Dispones de 30 días naturales para devoluciones gratuitas. Simplemente accede a tu perfil, selecciona el pedido y descarga la etiqueta de retorno. El producto debe estar en su embalaje original.',
  },
  {
    question: '¿Ofrecéis garantía de por vida en vuestro equipamiento de alpinismo?',
    answer: 'Nuestra línea de alpinismo "APEX PRO" cuenta con una garantía limitada de por vida contra defectos de fabricación. Para el resto de productos, ofrecemos la garantía legal de 3 años.',
  },
  {
    question: '¿Dónde puedo ver vuestra guía de tallas?',
    answer: 'Encontrarás un enlace a la guía de tallas específica en cada página de producto, justo debajo de la selección de talla. También puedes encontrarla en el pie de página de nuestro sitio web.',
  },
]

export default function Contact() {
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null)
  const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleFocus = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }))
  }

  const handleBlur = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: false }))
  }

  const handleFAQToggle = (index: number) => {
    setActiveFAQIndex((prev) => (prev === index ? null : index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Perform simulated form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="w-full bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 text-left space-y-6">
        <h1 className="font-display-lg text-display-lg text-on-surface uppercase">Contacto</h1>
        <p className="text-body-md text-on-surface-variant max-w-[672px]">
          Estamos aquí para ayudarte. Ya sea una duda técnica sobre equipamiento o el seguimiento de tu pedido, nuestro equipo de especialistas te responderá en menos de 24 horas.
        </p>
      </section>

      {/* Form & Details Section */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-lg border border-outline-variant shadow-sm">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <span className="text-3xl">✉️</span>
                  <h3 className="font-bold text-headline-md text-primary">¡Mensaje enviado con éxito!</h3>
                  <p className="text-body-sm text-on-surface-variant max-w-[448px] mx-auto">
                    Agradecemos tu contacto. Un especialista de soporte se comunicará contigo al correo indicado en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className={`text-body-sm font-bold transition-colors ${
                        focusedFields.name ? 'text-primary' : 'text-on-surface'
                      }`}>
                        Nombre
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className={`text-body-sm font-bold transition-colors ${
                        focusedFields.email ? 'text-primary' : 'text-on-surface'
                      }`}>
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className={`text-body-sm font-bold transition-colors ${
                      focusedFields.subject ? 'text-primary' : 'text-on-surface'
                    }`}>
                      Asunto
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      onFocus={() => handleFocus('subject')}
                      onBlur={() => handleBlur('subject')}
                      className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className={`text-body-sm font-bold transition-colors ${
                      focusedFields.message ? 'text-primary' : 'text-on-surface'
                    }`}>
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Escribe tu mensaje aquí..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-on-primary font-body-md py-3 px-12 rounded-full hover:bg-primary-container active:scale-[0.98] transition-all inline-flex items-center justify-center cursor-pointer shadow-md"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">Datos de contacto</h2>
              
              <div className="flex items-start space-x-6">
                <div className="p-2.5 bg-primary-fixed text-primary rounded-xl">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-label-caps text-[10px] text-on-surface-variant font-black tracking-wider">WHATSAPP</p>
                  <p className="text-body-md font-bold text-on-surface">+34 600 000 000</p>
                  <p className="text-body-sm text-on-surface-variant">Lunes a Viernes, 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-2.5 bg-primary-fixed text-primary rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-label-caps text-[10px] text-on-surface-variant font-black tracking-wider">EMAIL</p>
                  <p className="text-body-md font-bold text-on-surface">soporte@apexsport.co</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-2.5 bg-primary-fixed text-primary rounded-xl">
                  <Share2 size={20} />
                </div>
                <div>
                  <p className="text-label-caps text-[10px] text-on-surface-variant font-black tracking-wider">SÍGUENOS</p>
                  <div className="flex space-x-4 mt-2 text-body-sm">
                    <a href="#" className="text-on-surface hover:text-primary transition-colors font-semibold">Instagram</a>
                    <span className="text-outline-variant">•</span>
                    <a href="#" className="text-on-surface hover:text-primary transition-colors font-semibold">YouTube</a>
                    <span className="text-outline-variant">•</span>
                    <a href="#" className="text-on-surface hover:text-primary transition-colors font-semibold">Strava</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-outline-variant shadow-sm group">
              <div className="w-full h-full bg-surface-container relative">
                <img
                  src="/asset/seccion5.webp"
                  alt="Flagship Store Map Chamonix"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-6 py-2 rounded-full shadow-lg border border-outline-variant flex items-center space-x-2 select-none">
                    <MapPin size={16} className="text-primary fill-primary" />
                    <span className="text-body-sm font-bold">Flagship Store Chamonix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[896px] mx-auto px-6 py-20 text-left">
        <div className="text-center mb-12 space-y-2">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase">Preguntas Frecuentes</h2>
          <p className="text-label-caps text-[10px] text-on-surface-variant font-black tracking-widest">
            RESOLVIENDO TUS DUDAS AL INSTANTE
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = activeFAQIndex === index
            return (
              <div
                key={faq.question}
                className="border border-outline-variant rounded-lg overflow-hidden transition-all duration-200 hover:border-primary bg-white"
              >
                <button
                  onClick={() => handleFAQToggle(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-body-md font-bold text-on-surface">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-on-surface-variant" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="border-t border-outline-variant bg-surface-container-low"
                    >
                      <div className="px-6 py-4 text-body-sm text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

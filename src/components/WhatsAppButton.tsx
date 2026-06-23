import { motion } from 'motion/react'

export default function WhatsAppButton() {
  const handleClick = () => {
    const text = 'Hola APEX Sport Co., me gustaría realizar una consulta sobre sus productos de alto rendimiento.'
    window.open(`https://wa.me/56965174454?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring' as const, stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-40 flex items-center justify-center hover:bg-[#1ebd59] transition-colors group cursor-pointer"
      title="Contactar por WhatsApp"
    >
      {/* Lucide icon or custom SVG for WhatsApp */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.48 1.97 14.021.943 11.997.943c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.457 3.39 1.32 4.894l-.994 3.63 3.714-.965zm11.367-7.46c-.273-.135-1.617-.788-1.867-.877-.25-.09-.432-.134-.614.136-.182.27-.704.877-.863 1.058-.16.18-.318.2-.59.065-2.73-1.336-3.87-1.837-5.42-4.464-.176-.3-.176-.56-.049-.762.115-.181.272-.317.409-.478.136-.16.182-.272.272-.453.09-.181.046-.34-.023-.475-.069-.136-.614-1.453-.841-1.997-.222-.533-.469-.462-.643-.462-.166-.006-.356-.008-.545-.008-.19 0-.499.07-.76.353-.26.283-.997.962-.997 2.348 0 1.385 1.02 2.72 1.162 2.9 0 .18 2.008 3.036 4.862 4.254.68.29 1.21.463 1.62.593.684.215 1.306.185 1.8.111.55-.083 1.617-.653 1.846-1.25.228-.597.228-1.11.16-1.218-.069-.108-.25-.181-.523-.317z" />
      </svg>
      {/* Notification dot */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full ring-2 ring-white animate-pulse" />
    </motion.button>
  )
}

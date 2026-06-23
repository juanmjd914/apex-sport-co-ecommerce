import { useCartStore } from '../store/useCartStore'
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, clearCart } = useCartStore()

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handleCheckout = () => {
    // Generate order message for WhatsApp
    const orderDetails = cart
      .map((item) => `- ${item.name} x${item.quantity} ($${(item.price * item.quantity).toLocaleString('es-CL')})`)
      .join('\n')
    
    const message = `Hola APEX Sport Co., me gustaría comprar:\n${orderDetails}\n\n*Total: $${subtotal.toLocaleString('es-CL')}*`
    const encodedMessage = encodeURIComponent(message)
    
    // Support Chilean phone number from Techne Creativ WhatsApp list or a mock support number
    const whatsappUrl = `https://wa.me/56965174454?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white z-50 shadow-2xl flex flex-col border-l border-outline-variant"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-outline-variant">
              <div className="flex items-center gap-2 text-primary font-bold">
                <ShoppingBag size={20} />
                <span className="text-body-md font-black">Mi Carrito ({totalItems})</span>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant hover:text-primary"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-on-surface-variant">
                  <ShoppingBag size={48} className="stroke-[1.5] mb-4 opacity-50" />
                  <p className="text-body-md font-bold text-on-surface mb-2">El carrito está vacío</p>
                  <p className="text-body-sm max-w-[320px]">Explora la tienda y añade equipamiento para iniciar tu pedido.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-2 border border-outline-variant rounded-lg bg-surface-container-lowest"
                  >
                    <div className="w-20 h-20 bg-surface-container-low rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-body-sm text-on-surface line-clamp-1">{item.name}</h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-on-surface-variant hover:text-error transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <span className="text-[12px] text-on-surface-variant uppercase font-bold tracking-wider">{item.category}</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-outline-variant rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-body-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-body-md text-primary font-black">
                          ${(item.price * item.quantity).toLocaleString('es-CL')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-4 bg-surface-container border-t border-outline-variant space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-body-sm text-on-surface-variant">
                    <span>Subtotal</span>
                    <span className="font-bold text-on-surface">${subtotal.toLocaleString('es-CL')}</span>
                  </div>
                  <div className="flex justify-between text-body-sm text-on-surface-variant">
                    <span>Envío</span>
                    <span className="text-secondary font-bold uppercase tracking-wider text-[12px]">Gratis</span>
                  </div>
                  <div className="border-t border-outline-variant pt-4 flex justify-between text-body-md font-bold text-primary">
                    <span>Total estimado</span>
                    <span className="font-black text-lg">${subtotal.toLocaleString('es-CL')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 bg-primary text-on-primary rounded-full font-bold text-body-sm hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Confirmar pedido vía WhatsApp</span>
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-2 border border-outline hover:border-error hover:text-error rounded-full font-bold text-body-sm transition-colors text-on-surface-variant text-center"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

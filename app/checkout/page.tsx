"use client"

import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleOrderNow = () => {
    // Here you would typically handle the order submission
    // For now, we'll just set a state to show a success message
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Thank You for Your Order!</h1>
          <p className="text-lg sm:text-xl text-gray-400">Your order has been successfully placed.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12 sm:py-24 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Checkout</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty</p>
        ) : (
          <div className="space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 bg-white/5 p-4 rounded-lg"
              >
                <div className="flex-shrink-0 w-full sm:w-24 h-48 sm:h-24 relative">
                  <Image
                    src="/placeholder.svg"
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="sm:self-start">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row justify-between items-center text-xl font-semibold mt-8 mb-4">
              <span className="mb-4 sm:mb-0">Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button size="lg" className="w-full text-lg py-6" onClick={handleOrderNow}>
              Order Now
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}


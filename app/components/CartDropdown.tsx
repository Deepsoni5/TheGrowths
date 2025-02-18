"use client"

import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"
import Link from "next/link"

export default function CartDropdown() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()

  return (
    <div className="absolute right-0 mt-2 w-80 bg-black border border-gray-700 rounded-lg shadow-lg z-50">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)} className="ml-2">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" passHref>
                <Button className="w-full">Checkout</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}


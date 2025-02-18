"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = "thegrowths_cart"
const EXPIRATION_DAYS = 30

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const loadCart = () => {
      const storedCart = localStorage.getItem(STORAGE_KEY)
      if (storedCart) {
        const { items, expiration } = JSON.parse(storedCart)
        if (new Date().getTime() < expiration) {
          setCart(items)
        } else {
          localStorage.removeItem(STORAGE_KEY)
        }
      }
    }

    loadCart()
  }, [])

  useEffect(() => {
    const saveCart = () => {
      const expiration = new Date().getTime() + EXPIRATION_DAYS * 24 * 60 * 60 * 1000
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: cart, expiration }))
    }

    saveCart()
  }, [cart])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)),
    )
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}


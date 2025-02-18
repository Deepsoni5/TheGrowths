"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const storeItems = [
  {
    id: 1,
    title: "Business Dashboard Template",
    description:
      "A responsive React dashboard template with charts and data visualization components.",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "E-commerce Starter Kit",
    description:
      "Complete e-commerce solution with product listings, cart, and checkout functionality.",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Marketing Landing Page Pack",
    description:
      "Set of 5 customizable landing page templates for various marketing campaigns.",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "API Documentation Template",
    description:
      "Clean and organized template for creating comprehensive API documentation.",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Portfolio Website Template",
    description:
      "Showcase your work with this sleek and customizable portfolio website template.",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "Track and analyze your social media performance with this comprehensive dashboard template.",
    price: 54.99,
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function StorePage() {
  const { addToCart, cart } = useCart();
  const [isStoreReady, setIsStoreReady] = useState(false);
  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email for waitlist:", email);
    alert("Thank you for joining our waitlist!");
    setEmail("");
  };

  if (!isStoreReady) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md w-full px-4">
          <h1 className="text-4xl md:text-5xl text-primary font-bold mb-8 text-center">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-400 mb-8 text-center">
            Our store is under construction. Join the waitlist to be notified
            when we launch!
          </p>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/5 border-white/10 text-white"
            />
            <Button type="submit" className="w-full">
              Join Waitlist
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl text-primary font-bold">
            TheGrowths Store
          </h1>
          <Link href="/checkout" passHref>
            <Button
              variant="outline"
              className="flex items-center text-black space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>
                View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </span>
            </Button>
          </Link>
        </div>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Explore our collection of premium templates and tools to accelerate
          your business growth
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/50 to-black border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 flex flex-col"
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-64">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-3xl font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button
                    className="group/button relative overflow-hidden px-6 py-2"
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                      })
                    }
                  >
                    <span className="relative z-10 flex items-center transition-transform duration-300 group-hover/button:translate-x-[-20px]">
                      Add to Cart
                      <ShoppingCart className="w-4 h-4 ml-2" />
                    </span>
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full transition-transform duration-300 group-hover/button:translate-x-0" />
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

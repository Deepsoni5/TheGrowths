import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">
          About TheGrowths
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Our Mission
            </h2>
            <p className="text-gray-400 mb-4">
              At TheGrowths, our mission is to empower businesses to reach their
              full potential through innovative strategies and expert guidance.
              We believe that every business has the capacity for extraordinary
              growth, and we're here to unlock that potential.
            </p>
            <p className="text-gray-400">
              With a team of seasoned professionals and a track record of
              success, we're committed to delivering tailored solutions that
              drive real results for our clients.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/about.jpg"
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-primary text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Ready to Grow?
          </h2>
          <p className="text-gray-400 mb-6">
            Let's work together to take your business to new heights. Our team
            is ready to help you achieve your goals.
          </p>
          <Button asChild>
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

const values = [
  {
    title: "Innovation",
    description:
      "We constantly seek new and creative solutions to drive business growth.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and ethical behavior in all our interactions.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, delivering outstanding results for our clients.",
  },
];

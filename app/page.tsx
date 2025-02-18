"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Users2,
  Target,
  Linkedin,
  Twitter,
  Mail,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import DynamicBackground from "./components/DynamicBackground";
import {
  Globe,
  Smartphone,
  Palette,
  Blocks,
  Megaphone,
  Server,
} from "lucide-react";

const teamMembers = [
  {
    name: "Usama Ameen",
    role: "Chief Technical Officer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGGdQtVQ_dCaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723538827110?e=1745452800&v=beta&t=5oOFSKUM-0COGbZW5KIqQtkLagTHg6bUHdWb6jzvoGU",
    linkedin: "https://in.linkedin.com/in/noonesociedad",
  },
  {
    name: "Oliver Cingl",
    role: "Business Development Lead",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQFh3aUHUyaBkg/profile-displayphoto-shrink_400_400/B4EZUQUGIXHMAg-/0/1739735458975?e=1745452800&v=beta&t=qtwvpz6i8i30xYc7ru7_mp2aLKGuTObkzFKAOrEj8sc",
    linkedin: "https://www.linkedin.com/in/olivercingl/",
  },
  {
    name: "Deep soni",
    role: "Lead Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEaZosEyiccwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706531977472?e=1745452800&v=beta&t=k5_zuoTIY78lZfQ8NmAVR3ZpC5ibs072ZzptW4SNv8s",
    linkedin: "https://www.linkedin.com/in/deep-soni5/",
  },
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Create responsive and dynamic websites tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Develop cutting-edge mobile applications for iOS and Android platforms.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Design intuitive and visually appealing user interfaces for optimal user experience.",
  },
  {
    icon: Blocks,
    title: "Blockchain Solutions",
    description:
      "Implement secure and transparent blockchain technologies for your business.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Boost your online presence with comprehensive digital marketing strategies.",
  },
  {
    icon: Server,
    title: "Server & IT Infrastructure Management",
    description:
      "Manage and optimize your IT infrastructure for improved performance and security.",
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description:
      "Successfully transformed over 200+ businesses with our strategic solutions.",
    stat: "200+",
  },
  {
    icon: Users2,
    title: "Expert Team",
    description:
      "Our team comprises industry veterans with decades of combined experience.",
    stat: "50+ Years",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description:
      "Customized strategies designed specifically for your business needs and goals.",
    stat: "99.9%",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Dynamic Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <DynamicBackground />
        <div className="relative z-10 text-center space-y-8 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Unlock Your Business Potential
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with TheGrowths' expert consulting services
            and innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Start Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/store">
              <Button
                size="lg"
                variant="outline"
                className="text-lg text-black px-8"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors group"
              >
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-lg transform transition-transform group-hover:scale-105 duration-300 ease-in-out"></div>
                <div className="relative bg-black/50 rounded-lg p-6 h-full backdrop-blur-sm border border-primary/20 flex flex-col justify-between z-10">
                  <div>
                    <item.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <div className="mt-4 text-3xl font-bold text-primary">
                    {item.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our commitment to excellence and innovation has led to
              transformative results for our clients.
            </p>
            <div className="inline-flex items-center justify-center px-8 py-4 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
              <span className="text-4xl font-bold text-primary mr-4">96%</span>
              <span className="text-lg text-gray-300">
                Client Satisfaction Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-400">
              Work with our team of industry experts who are passionate about
              transforming businesses and driving growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col items-center"
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-full">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="text-white hover:text-primary"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already taken the first step
            towards growth
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8">
              Get Started Now
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

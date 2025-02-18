"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "./actions";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const response = await sendEmail({ name, email, subject, message }); // ✅ Receive response
      if (response?.success) {
        setSubmitMessage(
          "Thank you for your message. We'll get back to you soon!"
        ); // ✅ Success message
        form.reset();
      } else {
        setSubmitMessage(
          "There was an issue sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "There was an error sending your message. Please try again."
      ); // ❌ Error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24 max-w-6xl flex justify-center items-center min-h-screen">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl md:text-5xl text-primary font-bold mb-8 text-center">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Get in Touch
              </h2>
              <p className="text-gray-400 mb-6">
                We're here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  rows={5}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {submitMessage && (
                  <p className="text-center text-sm mt-2">{submitMessage}</p>
                )}
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">
                      officialcodewithnexus@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">+91 93699 79951 </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-400">
                      Karlova 8, 110 00 Praha 1
                      <br />
                      Prague, Prague, Czechia
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Business Hours
                </h2>
                <p className="text-gray-400">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-400">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

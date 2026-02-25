"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Facebook, Instagram, Mail } from "lucide-react";
import { useState } from "react";

// export const metadata = {
//   title: "Visit Us | Abish Cafe",
//   description: "Location, hours, and contact — Abish Cafe draft website.",
// };

export default function VisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#1C1917]">
      <Navigation />

      <main className="grow">
        {/* Header */}
        <section className="bg-white border-b border-black/5 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
              Visit & Contact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
              Visit Abish Cafe
            </h1>
            <p className="text-[#1C1917]/70 max-w-2xl text-lg leading-relaxed">
              Draft layout for location, hours, and messaging options.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Info */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-white/70 border border-black/5 p-7">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MapPin className="text-accent" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xl mb-1">
                        Address
                      </p>
                      <p className="text-[#1C1917]/70">
                        [Add full address here]
                      </p>
                      <p className="text-[#1C1917]/50 text-sm mt-2">
                        (Optional: landmarks)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/70 border border-black/5 p-7">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="text-accent" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xl mb-1">Hours</p>
                      <p className="text-[#1C1917]/70">[Add hours here]</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/70 border border-black/5 p-7">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Phone className="text-accent" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xl mb-1">
                        Contact
                      </p>
                      <p className="text-[#1C1917]/70">[Add phone number]</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href="tel:[PHONE]"
                          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-muted transition-colors"
                        >
                          <Phone size={18} /> Call
                        </a>
                        <a
                          href="mailto:[EMAIL]"
                          className="inline-flex items-center gap-2 rounded-lg border border-accent/25 px-5 py-2.5 font-semibold text-accent hover:bg-accent/5 transition-colors"
                        >
                          <Mail size={18} /> Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/70 border border-black/5 p-7">
                  <p className="font-serif font-bold text-xl mb-4">
                    Social Links
                  </p>
                  <div className="space-y-3 space-x-3">
                    <a
                      href="[FACEBOOK_LINK]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      <Facebook size={18} /> Facebook
                    </a>
                    <a
                      href="[INSTAGRAM_LINK]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      <Instagram size={18} /> Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Map + Form */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden border border-black/10 bg-white h-105">
                  {/* Replace src with Google Maps embed */}
                  <iframe
                    title="Abish Cafe Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.2351181438255!2d121.14655975003193!3d13.902506264784165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd13c05a2c0281%3A0x804fdc46f4b45741!2sAbish%20Cafe!5e0!3m2!1sen!2sph!4v1772024379628!5m2!1sen!2sph"
                    className="border-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="rounded-2xl bg-white/70 border border-black/5 p-7">
                  <p className="font-serif font-bold text-2xl mb-2">
                    Send a Message (Draft)
                  </p>
                  <p className="text-[#1C1917]/65 text-sm mb-6">
                    Form is layout-only. This can be wired straight to the abish
                    cafe email!
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(
                        "Draft form — connect this to email/Messenger later.",
                      );
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="space-y-4"
                  >
                    <input
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent/25"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                    />
                    <input
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent/25"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                    />
                    <input
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent/25"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, subject: e.target.value }))
                      }
                      required
                    />
                    <textarea
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent/25 resize-none"
                      placeholder="Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, message: e.target.value }))
                      }
                      required
                    />

                    <button
                      className="w-full rounded-lg bg-accent py-3 font-semibold text-white hover:bg-accent-muted transition-colors"
                      type="submit"
                    >
                      Send (Draft)
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

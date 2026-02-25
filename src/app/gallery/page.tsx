"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Gallery | Abish Cafe",
//   description: "Abish Cafe gallery — draft layout.",
// };

const images = [
  { id: 1, src: "/abish/gallery-1.jpg", alt: "Coffee", category: "coffee" },
  { id: 2, src: "/abish/gallery-2.jpg", alt: "Pastry", category: "pastries" },
  { id: 3, src: "/abish/gallery-3.jpg", alt: "Interior", category: "space" },
  { id: 4, src: "/abish/gallery-4.jpg", alt: "Drink", category: "coffee" },
  { id: 5, src: "/abish/gallery-5.jpg", alt: "Food", category: "food" },
  { id: 6, src: "/abish/gallery-6.jpg", alt: "Cafe", category: "space" },
  { id: 7, src: "/abish/gallery-7.jpg", alt: "Pastry", category: "pastries" },
  { id: 8, src: "/abish/gallery-8.jpg", alt: "Food", category: "food" },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "pastries", label: "Pastries" },
  { id: "food", label: "Food" },
  { id: "space", label: "Space" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return images;
    return images.filter((img) => img.category === active);
  }, [active]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#1C1917]">
      <Navigation />

      <main className="grow">
        {/* Header */}
        <section className="bg-white border-b border-black/5 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
              Photos
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
              Gallery
            </h1>
            <p className="text-[#1C1917]/70 max-w-2xl text-lg leading-relaxed">
              A visual preview of the gallery layout. We’ll replace these with
              Abish Cafe’s official photos.
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap gap-3 mb-10">
              {tabs.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`rounded-full px-6 py-2 font-semibold transition-all hover:cursor-pointer ${
                    active === t.id
                      ? "bg-accent text-white border border-black/5"
                      : "bg-white/70 border border-black/5 hover:bg-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-white"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold">{img.alt}</p>
                    <p className="text-white/80 text-sm capitalize">
                      {img.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#1C1917]/70 text-lg">
                  No photos in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

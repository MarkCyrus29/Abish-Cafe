import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Coffee, Croissant, MapPin, Clock, Images } from "lucide-react";

export const metadata = {
  title: "Abish Cafe | Coffee • Pastries • Cozy Moments",
  description:
    "Abish Cafe — a warm space for coffee, pastries, and good conversations. Draft website layout for review.",
};

const highlights = [
  {
    icon: Coffee,
    title: "Coffee & Signature Drinks",
    desc: "Crafted to be comforting—hot or iced, classic or creative.",
  },
  {
    icon: Croissant,
    title: "Pastries & Snacks",
    desc: "Perfect pairings for coffee—sweet, savory, and shareable.",
  },
  {
    icon: Images,
    title: "Cozy Space",
    desc: "A calm place to catch up, study, or just slow down.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FEF6EC] text-[#1C1917]">
      <Navigation />

      <main className="grow">
        {/* HERO */}
        <section className="relative h-[92vh] min-h-170 overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Abish Cafe"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-2xl">
                <p className="text-xs tracking-[0.35em] uppercase text-white/85 mb-4">
                  Abish Cafe • Draft Website
                </p>

                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight opacity-90">
                  Warm coffee,
                  <span className="block">cozy moments.</span>
                </h1>

                <p className="mt-5 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                  A clean, modern website draft—made to highlight your best
                  drinks, food, and cafe vibe.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 font-semibold text-background hover:bg-accent/80 transition-colors"
                  >
                    View Menu (Draft)
                  </Link>
                  <Link
                    href="/visit"
                    className="inline-flex items-center justify-center rounded-lg border border-white/70 px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Visit Us
                  </Link>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-6 text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Location</p>
                      <p className="text-white/80">[Add address here]</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                      <Clock size={18} />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Hours</p>
                      <p className="text-white/80">[Add hours here]</p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-xs text-white/65">
                  *This is a draft layout — content and photos will be replaced
                  with Abish Cafe's official details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
                What We Offer
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                ----------------
              </h2>
              <p className="mt-4 text-[#1C1917]/70 max-w-2xl mx-auto">
                ---------------------
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/70 border border-black/5 p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon className="text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#1C1917]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MENU PREVIEW (DRAFT) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
                  Draft Menu Preview
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold">
                  Menu (Draft)
                </h2>
                <p className="mt-4 text-[#1C1917]/70 max-w-2xl">
                  Placeholder items for layout review. Final names, prices, and
                  categories will be updated with Abish Cafe’s official menu.
                </p>
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-lg border border-accent/30 px-6 py-3 font-semibold text-accent hover:bg-accent/5 transition-colors"
              >
                View Full Menu Page
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-b border-black/10 pb-5 flex items-start justify-between gap-6"
                  >
                    <div>
                      <p className="font-serif font-bold">[Menu Item Name]</p>
                      <p className="text-sm text-[#1C1917]/65">
                        [Short description placeholder]
                      </p>
                    </div>
                    <p className="font-semibold text-accent">[₱—]</p>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-primary-muted/30 h-105 md:h-130">
                <Image
                  src="/abish/menu-preview.jpg"
                  alt="Menu preview"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY PREVIEW */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
                  Photos
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold">
                  Gallery
                </h2>
              </div>

              <Link
                href="/gallery"
                className="hidden sm:inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-muted transition-colors"
              >
                Open Full Gallery
              </Link>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="grid gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/10">
                  <Image
                    src="/abish/gallery-1.jpg"
                    alt="Abish cafe photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/10">
                    <Image
                      src="/abish/gallery-2.jpg"
                      alt="Abish cafe photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/10">
                    <Image
                      src="/abish/gallery-3.jpg"
                      alt="Abish cafe photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/10">
                    <Image
                      src="/abish/gallery-4.jpg"
                      alt="Abish cafe photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/10">
                    <Image
                      src="/abish/gallery-5.jpg"
                      alt="Abish cafe photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/10">
                  <Image
                    src="/abish/gallery-6.jpg"
                    alt="Abish cafe photo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="sm:hidden mt-8">
              <Link
                href="/gallery"
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-muted transition-colors"
              >
                Open Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white border-t border-primary/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-accent/15 bg-background p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
                  Visit Our Shop!
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-bold">
                  Lorem ipsum dolor sit
                </h3>
                <p className="mt-3 text-[#1C1917]/70 max-w-2xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus nulla quod cumque nesciunt eaque vitae iste deserunt
                  eveniet ullam perspiciatis, fugit consequatur! Dolores
                  reprehenderit mollitia sunt unde vitae ipsa fugiat?
                </p>
              </div>

              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-muted transition-colors"
              >
                Visit Us!
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

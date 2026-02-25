import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Sparkles } from "lucide-react";

export const metadata = {
  title: "About | Abish Cafe",
  description: "About Abish Cafe — draft layout for story and values.",
};

const values = [
  {
    icon: Heart,
    title: "Made with Care",
    desc: "From drinks to snacks—each item is served with attention to quality and warmth.",
  },
  {
    icon: Users,
    title: "Community Spot",
    desc: "A calm place for friends, families, students, and everyone who loves a cozy cafe.",
  },
  {
    icon: Sparkles,
    title: "Cozy Aesthetic",
    desc: "Clean and welcoming—perfect for photos, conversations, and slow mornings.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FEF6EC] text-[#1C1917]">
      <Navigation />

      <main className="grow">
        <section className="bg-white border-b border-black/5 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs tracking-[0.35em] uppercase text-[#7A2F15] mb-3">
              About
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
              Abish Cafe
            </h1>
            <p className="text-[#1C1917]/70 max-w-3xl text-lg leading-relaxed">
              This is a draft story section. Replace with Abish Cafe’s real
              origin story, concept, and what makes the cafe special.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="rounded-2xl bg-white/70 border border-black/5 p-8">
                <h2 className="font-serif text-3xl font-bold mb-4">
                  Our Story (Draft)
                </h2>
                <div className="space-y-4 text-[#1C1917]/75 leading-relaxed">
                  <p>
                    [Write a short intro about Abish Cafe — what vibe you want,
                    what you serve, and what people can expect.]
                  </p>
                  <p>
                    [Add details like: signature drinks, pastries, cozy space,
                    why people keep coming back.]
                  </p>
                  <p>
                    [Add one line about community: students, friends, dates,
                    work/study-friendly, etc.]
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-[#7A2F15]/5 border border-[#7A2F15]/15 p-5">
                  <p className="text-sm text-[#1C1917]/70">
                    Tip: Keep the story short and warm. Owners usually like 3–6
                    sentences max.
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/70 border border-black/5 p-7 hover:shadow-lg transition-shadow"
                    >
                      <div className="h-12 w-12 rounded-xl bg-[#7A2F15]/10 flex items-center justify-center mb-5">
                        <Icon className="text-[#7A2F15]" />
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-2">
                        {v.title}
                      </h3>
                      <p className="text-[#1C1917]/70 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

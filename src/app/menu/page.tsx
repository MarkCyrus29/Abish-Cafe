import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Coffee, Croissant, UtensilsCrossed } from "lucide-react";

export const metadata = {
  title: "Menu (Draft) | Abish Cafe",
  description:
    "Draft menu page layout for Abish Cafe — placeholders for review.",
};

type MenuItem = { name: string; price: string; description: string };

const placeholderItems = (count = 6): MenuItem[] =>
  Array.from({ length: count }).map(() => ({
    name: "[Menu Item Name]",
    price: "[₱—]",
    description: "[Short description placeholder]",
  }));

const menu = {
  drinks: placeholderItems(7),
  pastries: placeholderItems(6),
  meals: placeholderItems(6),
};

function Section({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: MenuItem[];
}) {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center ">
          <Icon className="text-accent" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="border-b border-black/10 pb-4">
            <div className="flex items-start justify-between gap-6">
              <h3 className="font-serif font-bold text-lg">{item.name}</h3>
              <span className="font-semibold text-accent shrink-0">
                {item.price}
              </span>
            </div>
            <p className="text-sm text-[#1C1917]/65">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#1C1917] ">
      <Navigation />

      <main className="grow ">
        {/* Header */}
        <section className="bg-white border-b border-black/5 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
              Menu Page
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
              Menu
            </h1>
            <p className="text-[#1C1917]/70 max-w-2xl text-lg leading-relaxed">
              This is a layout preview. Final menu categories, item names, and
              prices will be replaced with Abish Cafe’s official menu.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Section
              title="Coffee & Drinks"
              icon={Coffee}
              items={menu.drinks}
            />
            <Section
              title="Pastries & Desserts"
              icon={Croissant}
              items={menu.pastries}
            />
            <Section
              title="Meals & Snacks"
              icon={UtensilsCrossed}
              items={menu.meals}
            />

            <div className="mt-10 rounded-2xl bg-white/70 border border-black/5 p-6 text-center">
              <p className="text-sm text-[#1C1917]/65">
                <span className="font-semibold text-[#1C1917]">
                  Note (Draft):
                </span>{" "}
                Prices and availability may change. We can add icons, tags (Best
                Seller), and categories once the official menu is provided.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

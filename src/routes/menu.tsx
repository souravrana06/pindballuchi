import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Phone, ShoppingBag } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { FOOD_VEG, FOOD_NONVEG, BEVERAGES, type MenuGroup } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pind Balluchi Roorkee | North Indian, Punjabi, Mughlai" },
      {
        name: "description",
        content:
          "Explore our menu — tandoori classics, Punjabi curries, handi biryanis, thalis, and refreshing beverages. Handcrafted at Pind Balluchi Roorkee.",
      },
      { property: "og:title", content: "Menu — Pind Balluchi Roorkee" },
      { property: "og:description", content: "Handcrafted North Indian recipes from smoky tandoor to comforting curries." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Top = "food" | "beverages";
type Diet = "veg" | "nonveg";

function DietDot({ diet }: { diet: Diet }) {
  const color = diet === "veg" ? "#3f8b3f" : "#8B2E1F";
  return (
    <span
      aria-label={diet === "veg" ? "Vegetarian" : "Non-vegetarian"}
      className="inline-block h-3 w-3 shrink-0 border-2 rounded-[2px]"
      style={{ borderColor: color }}
    >
      <span
        className="block h-full w-full rounded-full"
        style={{ backgroundColor: color, transform: "scale(0.55)" }}
      />
    </span>
  );
}

function MenuPage() {
  const [top, setTop] = useState<Top>("food");
  const [diet, setDiet] = useState<Diet>("veg");

  const groups: MenuGroup[] = useMemo(() => {
    if (top === "beverages") return BEVERAGES;
    return diet === "veg" ? FOOD_VEG : FOOD_NONVEG;
  }, [top, diet]);

  const dotDiet: Diet | null =
    top === "food" ? diet : null;

  return (
    <SiteLayout>
      <section className="container-x pt-8 pb-6">
        <Reveal>
          <div className="eyebrow mb-4">Our Menu</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            Handcrafted North Indian recipes,
            <span className="italic text-primary"> from smoky tandoor</span> to
            comforting Punjabi curries.
          </h1>
        </Reveal>
      </section>

      {/* Top tabs */}
      <section className="container-x">
        <div className="flex flex-wrap gap-2 border-b border-border pb-4">
          {(["food", "beverages"] as Top[]).map((t) => (
            <button
              key={t}
              onClick={() => setTop(t)}
              className={`px-5 py-2.5 rounded-full text-sm capitalize transition-all ${
                top === t
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {t === "food" ? "Food" : "Beverages"}
            </button>
          ))}
        </div>

        {top === "food" && (
          <div className="mt-5 flex flex-wrap gap-2">
            {(["veg", "nonveg"] as Diet[]).map((d) => (
              <button
                key={d}
                onClick={() => setDiet(d)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${
                  diet === d
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <DietDot diet={d} />
                {d === "veg" ? "Veg" : "Non-Veg"}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Section jump nav */}
      <section className="container-x mt-8 sticky top-20 z-30 bg-background/85 backdrop-blur-md py-3 -mx-5 sm:-mx-10 xl:-mx-16 px-5 sm:px-10 xl:px-16 border-y border-border/60">
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {groups.map((g) => (
            <a
              key={g.title}
              href={`#${slug(g.title)}`}
              className="shrink-0 px-3 py-1.5 rounded-full text-xs text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              {g.title}
            </a>
          ))}
        </div>
      </section>

      {/* Groups */}
      <section className="container-x pt-12">
        <div className="grid gap-14">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 40}>
              <div id={slug(g.title)} className="scroll-mt-40">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-primary/70 text-lg">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl sm:text-3xl">{g.title}</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 py-2 border-b border-dashed border-border/60 text-[15px] leading-relaxed"
                    >
                      {dotDiet && <span className="mt-1.5"><DietDot diet={dotDiet} /></span>}
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-3xl border border-border bg-card p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-xl mx-auto">
            Hungry already? Bring the feast home.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm">
            Reserve a table for the full village experience, or order online and
            enjoy it wherever you are.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.google.com/search?q=Pind+Balluchi+Roorkee+order+online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-[1.03] transition-all"
            >
              <ShoppingBag className="h-4 w-4" /> Order Online
            </a>
            <a
              href="tel:09389249924"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="h-4 w-4" /> Call to Reserve
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

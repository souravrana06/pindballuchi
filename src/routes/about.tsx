import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Store, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero-interior.jpg";
import ambience from "@/assets/ambience-1.jpg";
import thali from "@/assets/dish-thali.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Pind Balluchi Roorkee" },
      {
        name: "description",
        content:
          "20+ years of Punjabi hospitality, 40+ restaurants across India, 5+ national awards. Pind Balluchi Roorkee brings the village feast to Uttarakhand.",
      },
      { property: "og:title", content: "Our Story — Pind Balluchi Roorkee" },
      { property: "og:description", content: "Heritage, craftsmanship, and warm hospitality — the Pind Balluchi story." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden -mt-24">
        <img
          src={hero}
          alt="Pind Balluchi Roorkee interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-16">
          <Reveal>
            <div className="eyebrow mb-4" style={{ color: "var(--gold)" }}>
              Our Story
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl text-background max-w-3xl">
              A village courtyard,
              <span className="italic" style={{ color: "var(--gold)" }}>
                {" "}reimagined nightly.
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section className="container-x py-24 grid gap-16 md:grid-cols-5 items-start">
        <Reveal className="md:col-span-3">
          <div className="space-y-6 text-foreground/85 leading-relaxed text-[17px]">
            <p>
              Pind Balluchi began as a promise — that the flavors of a Punjabi
              village, its slow-cooked dals, tandoor-blistered breads, and
              hand-ground spice pastes, deserved a room worthy of them. Two
              decades on, that promise has grown into a name known across India.
            </p>
            <p>
              With more than <strong>40 restaurants across 15+ states</strong>,{" "}
              <strong>5+ national awards</strong>, and{" "}
              <strong>20+ years in hospitality</strong>, Pind Balluchi has
              become a home for lovers of frontier Punjabi and Lucknowi cuisine.
              Every outlet carries the same DNA — earthen walls, lantern light,
              and food that tastes the way grandmothers remember it.
            </p>
            <p>
              Our Roorkee outpost, tucked along Haridwar Road near Solani
              Bridge, welcomes guests into a rustic village-themed dining room —
              blue booth banquettes under leafy canopies, hand-painted portraits
              on brick walls, and the low, familiar hum of a full kitchen.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-2">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={ambience} loading="lazy" alt="Ambience" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="container-x pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Award, k: "20+", v: "Years in hospitality" },
            { icon: Store, k: "40+", v: "Restaurants in 15+ states" },
            { icon: Users, k: "5+", v: "National awards" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 100}>
              <div className="p-8 rounded-2xl border border-border bg-card">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-6 font-display text-4xl sm:text-5xl">{s.k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Meet the Experience */}
      <section className="container-x py-24 grid gap-12 md:grid-cols-2 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={thali} loading="lazy" alt="Punjabi thali" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <div className="eyebrow mb-4">Meet the Experience</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              Ambience, hospitality, and craftsmanship in one plate.
            </h2>
            <ul className="mt-8 space-y-5 text-foreground/85">
              {[
                ["Ambience", "Handcrafted village interiors — clay tandoor visible from the room, warm lantern light, and quiet corners for family evenings."],
                ["Hospitality", "Staff who remember your name and your favorite dal — the kind of welcome that turns dinner into a memory."],
                ["Craftsmanship", "Marinades held overnight, breads slapped onto clay walls, biryanis dum-cooked in handis sealed with dough."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-2 h-[1px] w-8 shrink-0 bg-primary" />
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed mt-1">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-[1.03] transition-all"
              >
                See Our Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition-all"
              >
                Visit Us Today
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  Star,
  Utensils,
  Car,
  Truck,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { InstagramGrid } from "@/components/site/InstagramGrid";

import heroImg from "@/assets/hero-interior.jpg";
import bc from "@/assets/dish-butter-chicken.jpg";
import pt from "@/assets/dish-paneer-tikka.jpg";
import dm from "@/assets/dish-dal-makhani.jpg";
import tc from "@/assets/dish-tandoori.jpg";
import naan from "@/assets/dish-naan.jpg";
import bir from "@/assets/dish-biryani.jpg";
import ambience from "@/assets/ambience-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pind Balluchi Roorkee — The Village Restaurant · North Indian Dining" },
      {
        name: "description",
        content:
          "Authentic North Indian, Punjabi & Mughlai cuisine in Roorkee. Rustic village-themed dining, 4.8★ rated by 800+ guests. Dine-in, delivery & takeaway.",
      },
      { property: "og:title", content: "Pind Balluchi Roorkee — The Village Restaurant" },
      {
        property: "og:description",
        content:
          "A village feast, right here in Roorkee. Authentic North Indian flavors, rustic charm, warm hospitality.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const dishes = [
  { name: "Murgh Makhani", img: bc },
  { name: "Paneer Tikka Shashlik", img: pt },
  { name: "Dal Balluchi", img: dm },
  { name: "Tandoori Chicken", img: tc },
  { name: "Handi Biryani", img: bir },
  { name: "Butter Naan", img: naan },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0003})`;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-24 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src={heroImg}
            alt="Village-themed interior of Pind Balluchi Roorkee"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/85" style={{ background: "linear-gradient(180deg, rgb(0 0 0 / .3) 0%, rgb(0 0 0 / .4) 40%, rgb(0 0 0 / .85) 100%)" }} />
        </div>

        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-20 sm:pb-28">
          <Reveal>
            <div className="eyebrow mb-5" style={{ color: "var(--gold)" }}>
              पिंड बलूची · Roorkee
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-background max-w-4xl">
              A Village Feast,
              <br />
              <span className="italic" style={{ color: "var(--gold)" }}>
                Right Here in Roorkee.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-background/85">
              Authentic North Indian flavors, rustic charm, and warm hospitality
              — rated 4.8★ by 800+ guests.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] font-medium text-sm hover:scale-[1.03] hover:shadow-[var(--shadow-lift)] transition-all"
              >
                View Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.google.com/search?q=Pind+Balluchi+Roorkee+order+online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-background/50 text-background text-sm hover:bg-background hover:text-foreground transition-all"
              >
                Order Online
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-[oklch(0.94_0.014_75)]">
        <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
            <div>
              <div className="text-sm font-medium">4.8 / 5</div>
              <div className="text-xs text-muted-foreground">828 Google Reviews</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl text-primary">₹</span>
            <div>
              <div className="text-sm font-medium">₹200 – ₹1,400</div>
              <div className="text-xs text-muted-foreground">per person</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Utensils className="h-5 w-5 text-primary" />
            <div className="text-sm">Dine-in</div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-primary" />
            <div className="text-sm">
              Delivery <span className="text-muted-foreground">& Drive-through</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-x py-24 md:py-32 grid gap-12 md:grid-cols-2 items-center">
        <Reveal>
          <div>
            <div className="eyebrow mb-4">Our Story</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              Twenty years of tandoor smoke,
              <span className="italic text-primary"> family recipes,</span> and
              rustic Punjabi hospitality.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Pind Balluchi has built its name across 40+ restaurants in 15+
              states — and our Roorkee outpost carries the same soul: a village
              courtyard reimagined, plates worth remembering.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-medium text-sm group"
            >
              Learn Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={ambience}
              alt="Rustic ambience at Pind Balluchi Roorkee"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Signature Plates</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-xl">
                Handcrafted from the tandoor and the heart.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              Explore Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {dishes.map((d, i) => (
            <Reveal key={d.name} delay={i * 70}>
              <div
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl tilt-card hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-4deg)_translateY(-6px)] hover:shadow-[var(--shadow-elegant)]"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--gold)]">
                    Signature
                  </div>
                  <div className="mt-1 font-display text-xl sm:text-2xl text-background">
                    {d.name}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="container-x py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-3">Why Visit Us</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              A meal here is a small journey.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Authentic Village Ambience",
              d: "Rustic Punjabi courtyard details — hand-painted walls, wagon wheels, lantern-lit booths.",
            },
            {
              t: "Freshly Fired Tandoori",
              d: "Kebabs, tikkas and breads pulled straight from the clay tandoor to your table.",
            },
            {
              t: "Made for Family Feasts",
              d: "Generous portions, thalis, and quiet corners for celebrations big and small.",
            },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 100}>
              <div className="p-8 rounded-2xl border border-border bg-card h-full hover:border-primary/40 hover:shadow-[var(--shadow-lift)] transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary font-display text-lg">
                  0{i + 1}
                </div>
                <h3 className="mt-6 text-xl">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {f.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <InstagramGrid />

      {/* FINAL CTA */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={heroImg}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
            <div className="relative px-6 py-16 sm:px-14 sm:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-background max-w-2xl mx-auto">
                Reserve your table for an unforgettable evening.
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:09389249924"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] font-medium text-sm hover:scale-[1.03] transition-all"
                >
                  <Phone className="h-4 w-4" /> Call to Reserve
                </a>
                <a
                  href="https://maps.google.com/?q=Pind+Balluchi+Roorkee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-background/50 text-background text-sm hover:bg-background hover:text-foreground transition-all"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Car, ShoppingBag, Navigation } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import ambience from "@/assets/ambience-1.jpg";
import hero from "@/assets/hero-interior.jpg";
import thali from "@/assets/dish-thali.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Pind Balluchi Roorkee | Haridwar Road" },
      {
        name: "description",
        content:
          "Find Pind Balluchi Roorkee on Haridwar Road, near Solani Bridge. Open daily till 11 PM. On-site parking, dine-in, delivery, and drive-through.",
      },
      { property: "og:title", content: "Visit Pind Balluchi Roorkee" },
      { property: "og:description", content: "Haridwar Road, near Solani Bridge, Adarsh Nagar, Roorkee. Open daily till 11 PM." },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
  component: VisitPage,
});

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Pind+Balluchi+Roorkee+Haridwar+Road";

function VisitPage() {
  return (
    <SiteLayout>
      <section className="container-x pt-8 pb-12">
        <Reveal>
          <div className="eyebrow mb-4">Find Us</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            Visit us in
            <span className="italic text-primary"> Roorkee.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-lg">
            Right on Haridwar Road, a short drive from Solani Bridge. Pull up,
            park easy, and step into the village.
          </p>
        </Reveal>
      </section>

      {/* Map + Info */}
      <section className="container-x grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px]">
            <iframe
              title="Pind Balluchi Roorkee location map"
              src="https://www.google.com/maps?q=Pind+Balluchi+Roorkee+Haridwar+Road+Adarsh+Nagar&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <div className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col">
            <div className="space-y-6 flex-1">
              <Info icon={MapPin} title="Address">
                Amar Honda Showroom Building, Haridwar Rd, near Solani Bridge,
                Adarsh Nagar, Roorkee, Uttarakhand 247667
                <div className="text-xs text-muted-foreground mt-1">Plus Code: VVGX+XR Roorkee</div>
              </Info>
              <Info icon={Clock} title="Hours">
                Open Daily · 11:00 AM – 11:00 PM
              </Info>
              <Info icon={Phone} title="Phone">
                <a href="tel:09389249924" className="hover:text-primary transition-colors">
                  093892 49924
                </a>
              </Info>
              <Info icon={Car} title="Parking">
                On-site parking available
              </Info>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-[1.02] transition-all"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href="tel:09389249924"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition-all"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://www.google.com/search?q=Pind+Balluchi+Roorkee+order+online"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition-all"
              >
                <ShoppingBag className="h-4 w-4" /> Order Online
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="container-x py-24">
        <Reveal>
          <div className="mb-10">
            <div className="eyebrow mb-3">A Look Inside</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-xl">
              The room, before you arrive.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[hero, ambience, thali].map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={src} loading="lazy" alt="Pind Balluchi Roorkee" className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <InstagramGrid heading="Catch the Vibe @pindballuchiroorkee" kicker="Follow the Feast" />
    </SiteLayout>
  );
}

function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm text-foreground/90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

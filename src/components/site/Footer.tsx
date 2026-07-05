import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.94_0.014_75)]">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              P
            </div>
            <div>
              <div className="font-display text-xl">Pind Balluchi</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                The Village Restaurant · Roorkee
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
            पिंड बलूची थे विलेज रेस्टोरेंट रुड़की — Authentic North Indian
            flavors served with rustic Punjabi warmth in the heart of Roorkee.
          </p>
          <a
            href="https://www.instagram.com/pindballuchiroorkee/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" />
            @pindballuchiroorkee
          </a>
        </div>

        <div>
          <div className="eyebrow mb-4">Visit</div>
          <div className="text-sm space-y-3 text-foreground/80">
            <p className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <span>
                Amar Honda Showroom Building, Haridwar Rd, near Solani Bridge,
                Adarsh Nagar, Roorkee, Uttarakhand 247667
              </span>
            </p>
            <p className="flex gap-2">
              <Clock className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <span>Open Daily · Closes 11 PM</span>
            </p>
            <a
              href="tel:09389249924"
              className="flex gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <span>093892 49924</span>
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="text-sm space-y-2">
            {[
              ["/", "Home"],
              ["/menu", "Menu"],
              ["/about", "About Us"],
              ["/visit", "Visit Us"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pind Balluchi Roorkee. All rights reserved.</p>
          <p>Rated 4.8★ by 828+ guests on Google</p>
        </div>
      </div>
    </footer>
  );
}

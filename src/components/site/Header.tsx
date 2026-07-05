import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, ShoppingBag, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;

const ORDER_URL =
  "https://www.google.com/search?q=Pind+Balluchi+Roorkee+order+online";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
            P
          </div>
          <div className="min-w-0 leading-tight">
            <div className="font-display text-base sm:text-lg text-foreground truncate">
              Pind Balluchi
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground truncate">
              The Village Restaurant · Roorkee
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  active
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="tel:09389249924"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition-all"
          >
            <Phone className="h-4 w-4" />
            Call to Reserve
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-[1.03] hover:shadow-[var(--shadow-lift)] transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            Order Online
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/70 bg-background/95 backdrop-blur-md">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-3 rounded-lg text-base hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <a
                href="tel:09389249924"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border text-sm"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                <ShoppingBag className="h-4 w-4" /> Order
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

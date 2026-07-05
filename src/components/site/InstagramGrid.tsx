import { Instagram } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import ambience from "@/assets/ambience-1.jpg";
import thali from "@/assets/dish-thali.jpg";
import bc from "@/assets/dish-butter-chicken.jpg";
import pt from "@/assets/dish-paneer-tikka.jpg";
import tc from "@/assets/dish-tandoori.jpg";
import naan from "@/assets/dish-naan.jpg";
import bir from "@/assets/dish-biryani.jpg";

const posts = [thali, heroImg, bc, ambience, pt, tc, naan, bir];

export function InstagramGrid({ heading = "Follow Us @pindballuchiroorkee", kicker = "Instagram" }: { heading?: string; kicker?: string }) {
  return (
    <section className="container-x py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="eyebrow mb-3">{kicker}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-xl">{heading}</h2>
        </div>
        <a
          href="https://www.instagram.com/pindballuchiroorkee/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all text-sm"
        >
          <Instagram className="h-4 w-4" /> Follow on Instagram
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
        {posts.map((src, i) => (
          <a
            key={i}
            href="https://www.instagram.com/pindballuchiroorkee/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt="Pind Balluchi Roorkee Instagram post"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors grid place-items-center">
              <Instagram className="h-6 w-6 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1579027989536-b7b3f875ceea?auto=format&fit=crop&w=1920&q=80"
          alt="Japanese sushi and sashimi spread"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="text-sm font-medium tracking-[0.35em] text-gold uppercase">
          {site.nameJa} · Portland
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight text-background sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/85">
          {site.tagline}. Seasonal ingredients, handmade noodles, and sushi prepared
          at the counter every evening.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/menu"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            View Menu
          </Link>
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="rounded-full border border-background/30 bg-background/10 px-6 py-3 text-sm font-medium text-background backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            Call to Reserve
          </a>
        </div>
      </div>
    </section>
  );
}

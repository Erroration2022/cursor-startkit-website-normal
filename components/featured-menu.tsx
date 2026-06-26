import Image from "next/image";
import Link from "next/link";
import { featuredDishes } from "@/lib/site";

export function FeaturedMenu() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            From the Kitchen
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            Signature Demo Dishes
          </h2>
        </div>
        <Link
          href="/menu"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          View full menu →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredDishes.map((dish) => (
          <article
            key={dish.name}
            className="card-lift group rounded-2xl border border-border bg-card p-6"
          >
            <p className="text-xs tracking-widest text-muted uppercase">
              {dish.category}
            </p>
            <h3 className="mt-3 font-serif text-xl text-foreground">{dish.name}</h3>
            <p className="text-sm text-accent/80">{dish.nameJa}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {dish.description}
            </p>
            <p className="mt-5 font-medium text-accent">${dish.price}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
        <div className="relative min-h-64">
          <Image
            src="/images/craftsmanship.png"
            alt="Hands crafting nigiri sushi, representing shokunin craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-foreground p-10 text-white">
          <p className="section-kanji text-4xl text-gold">職人</p>
          <h3 className="mt-4 font-serif text-2xl">The counter is our classroom</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            In the shokunin tradition, technique is passed through observation and
            repetition. Our fictional kitchen keeps the pass open so guests can watch
            rice formed, fish sliced, and broth tasted — because transparency builds
            trust.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            Meet our demo chef →
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { featuredDishes } from "@/lib/site";

export function FeaturedMenu() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            From the Kitchen
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            Guest Favorites
          </h2>
        </div>
        <Link
          href="/menu"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          See full menu →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredDishes.map((dish) => (
          <article
            key={dish.name}
            className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <p className="text-xs tracking-widest text-muted uppercase">
              {dish.category}
            </p>
            <h3 className="mt-3 font-serif text-xl text-foreground">{dish.name}</h3>
            <p className="text-sm text-muted">{dish.nameJa}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {dish.description}
            </p>
            <p className="mt-5 font-medium text-accent">${dish.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

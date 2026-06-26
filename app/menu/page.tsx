import type { Metadata } from "next";
import Link from "next/link";
import { menuCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Explore the menu at ${site.name} — sushi, ramen, small plates, and desserts.`,
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
          {site.nameJa}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">
          Our Menu
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Ingredients change with the season. Ask your server about tonight&apos;s
          specials and omakase availability.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {menuCategories.map((category) => (
          <section key={category.name}>
            <div className="border-b border-border pb-4">
              <h2 className="font-serif text-2xl text-foreground">{category.name}</h2>
              <p className="text-sm text-muted">{category.nameJa}</p>
            </div>
            <ul className="mt-8 divide-y divide-border">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-2 py-6 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="max-w-xl">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted">{item.nameJa}</p>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                  <p className="shrink-0 font-medium text-accent">${item.price}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-accent-light/60 p-8 text-center">
        <p className="font-serif text-xl text-foreground">Chef&apos;s Omakase — $85</p>
        <p className="mt-2 text-sm text-muted">
          Nine courses, chef&apos;s choice. Limited to 12 guests per evening.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

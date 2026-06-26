import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { menuCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Explore the full fictional menu at ${site.name} — sushi, ramen, izakaya plates, grill, desserts, and drinks.`,
};

export default function MenuPage() {
  const itemCount = menuCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow={site.nameJa}
        title="Our Menu"
        description={`${itemCount} sample dishes across six categories. Ingredients and availability change with the fictional seasons — ask your demo server about tonight's specials.`}
        image="/images/food-spread.png"
        imageAlt="Fictional Japanese food spread"
        kanji="料理"
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-accent-light/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            <span className="font-medium text-foreground">Demo pricing.</span> All items
            and descriptions are invented for this showcase site.
          </p>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Reserve a Table
          </Link>
        </div>

        <div className="mt-16 space-y-20">
          {menuCategories.map((category) => (
            <section key={category.name} id={category.name.toLowerCase().replace(/\s+/g, "-")}>
              <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                    {category.name}
                  </h2>
                  <p className="text-sm text-accent">{category.nameJa}</p>
                </div>
                <p className="text-xs text-muted">{category.items.length} items</p>
              </div>
              <ul className="mt-6 divide-y divide-border">
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

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="section-kanji text-3xl text-accent">おまかせ</p>
            <h3 className="mt-3 font-serif text-xl text-foreground">Demo Omakase — $85</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Nine fictional courses, chef&apos;s choice. Limited to twelve demo guests per
              evening. Dietary notes welcome on the sample contact form.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-foreground p-8 text-white">
            <p className="section-kanji text-3xl text-gold">旬</p>
            <h3 className="mt-3 font-serif text-xl">Seasonal rotation</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              A hallmark of Japanese dining is shun — ingredients at their peak. Our demo
              menu marks seasonal items; in a live site, you would update these as your
              kitchen changes.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </>
  );
}

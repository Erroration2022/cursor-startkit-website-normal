"use client";

import Link from "next/link";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { formatPrice } from "@/lib/menu";
import { menuCategories } from "@/lib/site";
import { allMenuItems } from "@/lib/menu";

const itemByName = Object.fromEntries(allMenuItems.map((item) => [item.name, item]));

export function MenuOrderSection() {
  const itemCount = allMenuItems.length;

  return (
    <>
      <div id="order" className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-accent-light/40 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Online ordering demo
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="font-medium text-foreground">Add items to cart</span> — cart
                persists in your browser. Checkout shows Square & Clover-style payment UI
                without processing real charges.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent-light"
            >
              Reserve a Table
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-20">
          {menuCategories.map((category, categoryIndex) => (
            <section
              key={category.name}
              id={category.name.toLowerCase().replace(/\s+/g, "-")}
            >
              <ScrollReveal delay={categoryIndex * 50}>
                <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                      {category.name}
                    </h2>
                    <p className="text-sm text-accent">{category.nameJa}</p>
                  </div>
                  <p className="text-xs text-muted">{category.items.length} items</p>
                </div>
              </ScrollReveal>

              <ul className="mt-6 divide-y divide-border">
                {category.items.map((item, itemIndex) => {
                  const menuItem = itemByName[item.name];
                  if (!menuItem) return null;

                  return (
                    <ScrollReveal key={item.name} delay={itemIndex * 40}>
                      <li className="group flex flex-col gap-4 py-6 transition-colors hover:bg-accent-light/20 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:rounded-xl">
                        <div className="max-w-xl">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted">{item.nameJa}</p>
                          <p className="mt-1 text-sm text-muted">{item.description}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-4">
                          <p className="font-medium text-accent">{formatPrice(item.price)}</p>
                          <AddToCartButton item={menuItem} compact />
                        </div>
                      </li>
                    </ScrollReveal>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="section-kanji text-3xl text-accent">おまかせ</p>
              <h3 className="mt-3 font-serif text-xl text-foreground">Demo Omakase — $85</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Nine fictional courses, chef&apos;s choice. Add via cart if listed, or call
                for this demo experience.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-foreground p-8 text-white">
              <p className="section-kanji text-3xl text-gold">旬</p>
              <h3 className="mt-3 font-serif text-xl">Seasonal rotation</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {itemCount} orderable demo items. In production, connect inventory and
                payment APIs to go live.
              </p>
            </div>
          </div>
        </ScrollReveal>

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

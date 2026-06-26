"use client";

import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { findMenuItemByName, formatPrice } from "@/lib/menu";
import { featuredDishes } from "@/lib/site";

export function FeaturedMenu() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <ScrollReveal>
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
            href="/menu#order"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Order online →
          </Link>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredDishes.map((dish, index) => {
          const menuItem = findMenuItemByName(dish.name);

          return (
            <ScrollReveal key={dish.name} delay={index * 80}>
              <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <p className="text-xs tracking-widest text-muted uppercase">
                  {dish.category}
                </p>
                <h3 className="mt-3 font-serif text-xl text-foreground">{dish.name}</h3>
                <p className="text-sm text-accent/80">{dish.nameJa}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {dish.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="font-medium text-accent">{formatPrice(dish.price)}</p>
                  {menuItem && <AddToCartButton item={menuItem} compact />}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal>
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
          <div className="relative min-h-64 overflow-hidden">
            <Image
              src="/images/craftsmanship.png"
              alt="Hands crafting nigiri sushi, representing shokunin craftsmanship"
              fill
              className="object-cover transition-transform duration-[8s] ease-out hover:scale-105"
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
      </ScrollReveal>
    </section>
  );
}

"use client";

import Link from "next/link";
import { CartButton } from "@/components/cart/cart-button";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex min-w-0 flex-col">
          <span className="truncate font-serif text-lg tracking-wide text-foreground sm:text-xl">
            {site.name}
          </span>
          <span className="text-[10px] tracking-[0.25em] text-muted uppercase sm:text-xs">
            {site.nameJa}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/menu#order"
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Order
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CartButton />
          <Link
            href="/contact"
            className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent-light sm:inline-block"
          >
            Contact
          </Link>
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90 md:inline-block"
          >
            Reserve
          </a>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 lg:hidden">
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:bg-accent-light hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/menu#order"
          className="shrink-0 rounded-full bg-accent-light px-3 py-1.5 text-xs font-medium text-accent"
        >
          Order
        </Link>
      </nav>
    </header>
  );
}

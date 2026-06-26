"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu";

export function FloatingCartBar() {
  const { itemCount, totals, openCart } = useCart();

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-slide-up">
      <button
        type="button"
        onClick={openCart}
        className="flex w-full items-center justify-between rounded-full border border-border bg-card/95 px-5 py-3 shadow-xl backdrop-blur-md transition-transform hover:scale-[1.02]"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs text-white">
            {itemCount}
          </span>
          View cart
        </span>
        <span className="text-sm font-medium text-accent">{formatPrice(totals.total)}</span>
      </button>
    </div>
  );
}

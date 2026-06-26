"use client";

import { useCart } from "@/lib/cart-context";

export function CartButton() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart with ${itemCount} items`}
      className="relative rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent-light"
    >
      <span className="flex items-center gap-2">
        <CartIcon />
        <span className="hidden sm:inline">Cart</span>
      </span>
      {itemCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white animate-pulse-soft">
          {itemCount}
        </span>
      )}
    </button>
  );
}

function CartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.6 13.2a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

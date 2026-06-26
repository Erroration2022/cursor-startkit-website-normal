"use client";

import { useState } from "react";
import type { MenuItem } from "@/lib/menu";
import { useCart } from "@/lib/cart-context";

type AddToCartButtonProps = {
  item: MenuItem;
  compact?: boolean;
};

export function AddToCartButton({ item, compact = false }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(item);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`shrink-0 rounded-full font-medium transition-all duration-300 ${
        compact
          ? "px-4 py-2 text-xs"
          : "px-5 py-2.5 text-sm"
      } ${
        added
          ? "scale-105 bg-gold text-white"
          : "bg-accent text-white hover:bg-accent/90 hover:shadow-md"
      }`}
    >
      {added ? "Added ✓" : "Add to cart"}
    </button>
  );
}

"use client";

import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CheckoutModal } from "@/components/cart/checkout-modal";
import { FloatingCartBar } from "@/components/cart/floating-cart-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <CheckoutModal />
      <FloatingCartBar />
    </CartProvider>
  );
}

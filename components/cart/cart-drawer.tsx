"use client";

import { formatPrice } from "@/lib/menu";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    openCheckout,
    removeItem,
    updateQuantity,
    totals,
    orderType,
    setOrderType,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      <aside
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="font-serif text-xl text-foreground">Your order</h2>
            <p className="text-xs text-muted">Demo cart — saved in your browser</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full p-2 text-muted transition-colors hover:bg-accent-light hover:text-foreground"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="border-b border-border px-6 py-4">
          <p className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">
            Order type
          </p>
          <div className="grid grid-cols-2 gap-2">
            {(["pickup", "delivery"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setOrderType(type)}
                className={`rounded-xl px-3 py-2 text-sm font-medium capitalize transition-colors ${
                  orderType === type
                    ? "bg-accent text-white"
                    : "border border-border text-muted hover:border-accent/40"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="section-kanji text-4xl text-accent/30">空</p>
              <p className="mt-4 font-serif text-lg text-foreground">Cart is empty</p>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Browse the menu and add dishes to try the online ordering demo.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((line) => (
                <li
                  key={line.id}
                  className="rounded-xl border border-border bg-background/60 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-foreground">{line.name}</p>
                      <p className="text-xs text-muted">{line.nameJa}</p>
                      <p className="mt-1 text-sm text-accent">
                        {formatPrice(line.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(line.id)}
                      className="text-xs text-muted hover:text-accent"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.id, line.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm hover:bg-accent-light"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="min-w-6 text-center text-sm font-medium">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.id, line.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm hover:bg-accent-light"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <span className="ml-auto text-sm font-medium text-foreground">
                      {formatPrice(line.price * line.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between text-muted">
                <dt>Subtotal</dt>
                <dd>{formatPrice(totals.subtotal)}</dd>
              </div>
              {totals.serviceFee > 0 && (
                <div className="flex justify-between text-muted">
                  <dt>Delivery fee</dt>
                  <dd>{formatPrice(totals.serviceFee)}</dd>
                </div>
              )}
              <div className="flex justify-between text-muted">
                <dt>Tax (demo 8.5%)</dt>
                <dd>{formatPrice(totals.tax)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-base font-medium text-foreground">
                <dt>Total</dt>
                <dd>{formatPrice(totals.total)}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={openCheckout}
              className="mt-5 w-full rounded-full bg-accent py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Proceed to checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

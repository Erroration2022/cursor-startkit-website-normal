"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/menu";
import { useCart } from "@/lib/cart-context";

type PaymentProvider = "square" | "clover" | "pickup";
type CheckoutStep = "details" | "payment" | "success";

export function CheckoutModal() {
  const {
    items,
    isCheckoutOpen,
    closeCheckout,
    clearCart,
    totals,
    orderType,
  } = useCart();

  const [step, setStep] = useState<CheckoutStep>("details");
  const [provider, setProvider] = useState<PaymentProvider>("square");
  const [name, setName] = useState("Sample Guest");
  const [phone, setPhone] = useState("(555) 000-0000");
  const [orderNumber, setOrderNumber] = useState("");

  if (!isCheckoutOpen) return null;

  function resetAndClose() {
    setStep("details");
    setProvider("square");
    closeCheckout();
  }

  function handlePlaceOrder() {
    const num = `DEMO-${Math.floor(10000 + Math.random() * 89999)}`;
    setOrderNumber(num);
    setStep("success");
    clearCart();
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={step === "success" ? resetAndClose : undefined}
        aria-hidden
      />

      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl animate-scale-in">
        {step === "success" ? (
          <SuccessView orderNumber={orderNumber} onClose={resetAndClose} />
        ) : (
          <>
            <div className="border-b border-border px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-accent uppercase">
                    Demo checkout
                  </p>
                  <h2 className="mt-1 font-serif text-2xl text-foreground">
                    {step === "details" ? "Order details" : "Payment"}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="rounded-full p-2 text-muted hover:bg-accent-light"
                  aria-label="Close checkout"
                >
                  ✕
                </button>
              </div>
              <p className="mt-3 rounded-lg bg-gold/10 px-3 py-2 text-xs leading-relaxed text-muted">
                <strong className="text-foreground">No real payments.</strong> Square and
                Clover UIs are visual demos only. Real integrations need a merchant account
                and server-side payment APIs — tokens from the card form must be sent to a
                backend to charge cards.
              </p>
            </div>

            {step === "details" ? (
              <div className="space-y-6 px-6 py-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-medium text-foreground">Name (sample)</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-foreground">Phone (sample)</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                  </label>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Order summary · {orderType}
                  </p>
                  <ul className="mt-3 max-h-40 space-y-2 overflow-y-auto text-sm">
                    {items.map((line) => (
                      <li key={line.id} className="flex justify-between text-muted">
                        <span>
                          {line.quantity}× {line.name}
                        </span>
                        <span>{formatPrice(line.price * line.quantity)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-right font-medium text-foreground">
                    Total {formatPrice(totals.total)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setStep("payment")}
                  className="w-full rounded-full bg-accent py-3 text-sm font-medium text-white hover:bg-accent/90"
                >
                  Continue to payment
                </button>
              </div>
            ) : (
              <div className="px-6 py-6">
                <div className="mb-6 grid grid-cols-3 gap-2">
                  <ProviderTab
                    label="Square"
                    sublabel="Demo UI"
                    active={provider === "square"}
                    onClick={() => setProvider("square")}
                    accent="bg-[#006aff]"
                  />
                  <ProviderTab
                    label="Clover"
                    sublabel="Demo UI"
                    active={provider === "clover"}
                    onClick={() => setProvider("clover")}
                    accent="bg-[#1a7f4b]"
                  />
                  <ProviderTab
                    label="Pay at pickup"
                    sublabel="No card"
                    active={provider === "pickup"}
                    onClick={() => setProvider("pickup")}
                    accent="bg-foreground"
                  />
                </div>

                {provider === "square" && <SquarePaymentDemo total={totals.total} />}
                {provider === "clover" && <CloverPaymentDemo total={totals.total} />}
                {provider === "pickup" && <PickupPaymentDemo total={totals.total} />}

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    className="flex-1 rounded-full border border-border py-3 text-sm font-medium text-foreground hover:bg-accent-light"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="flex-1 rounded-full bg-accent py-3 text-sm font-medium text-white hover:bg-accent/90"
                  >
                    Place demo order
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ProviderTab({
  label,
  sublabel,
  active,
  onClick,
  accent,
}: {
  label: string;
  sublabel: string;
  active: boolean;
  onClick: () => void;
  accent: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border p-3 text-left transition-all ${
        active
          ? "border-accent bg-accent-light/60 shadow-sm"
          : "border-border hover:border-accent/30"
      }`}
    >
      <span className={`mb-2 inline-block h-1.5 w-8 rounded-full ${accent}`} />
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="text-[10px] text-muted">{sublabel}</p>
    </button>
  );
}

function SquarePaymentDemo({ total }: { total: number }) {
  return (
    <div className="rounded-xl border-2 border-[#006aff]/20 bg-[#f7f9fc] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#006aff] text-xs font-bold text-white">
            Sq
          </span>
          <div>
            <p className="text-sm font-semibold text-[#006aff]">Square Web Payments</p>
            <p className="text-[10px] text-muted">Sandbox-style demo · UI only</p>
          </div>
        </div>
        <span className="text-xs text-muted">🔒 Demo secure fields</span>
      </div>
      <div className="space-y-3">
        <MockCardField label="Card number" placeholder="4111 1111 1111 1111" />
        <div className="grid grid-cols-2 gap-3">
          <MockCardField label="Expiration" placeholder="MM / YY" />
          <MockCardField label="CVV" placeholder="123" />
        </div>
        <MockCardField label="ZIP code" placeholder="90000" />
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        In production, Square.js tokenizes card data in the browser and your server calls
        the Payments API. Without an Application ID, Location ID, and backend, charges
        cannot complete.
      </p>
      <p className="mt-3 text-right text-sm font-medium text-foreground">
        Charge {formatPrice(total)} (demo)
      </p>
    </div>
  );
}

function CloverPaymentDemo({ total }: { total: number }) {
  return (
    <div className="rounded-xl border-2 border-[#1a7f4b]/20 bg-[#f4faf6] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a7f4b] text-xs font-bold text-white">
            C
          </span>
          <div>
            <p className="text-sm font-semibold text-[#1a7f4b]">Clover Online Ordering</p>
            <p className="text-[10px] text-muted">Merchant UI demo · UI only</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <MockCardField label="Name on card" placeholder="Sample Guest" variant="clover" />
        <MockCardField label="Card number" placeholder="5500 0000 0000 0004" variant="clover" />
        <div className="grid grid-cols-2 gap-3">
          <MockCardField label="Exp date" placeholder="12/28" variant="clover" />
          <MockCardField label="CVC" placeholder="456" variant="clover" />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        Clover e-commerce requires a Clover merchant account and server-side payment
        processing. This form mimics the checkout experience for demonstration purposes.
      </p>
      <p className="mt-3 text-right text-sm font-medium text-foreground">
        Pay {formatPrice(total)} (demo)
      </p>
    </div>
  );
}

function PickupPaymentDemo({ total }: { total: number }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5 text-center">
      <p className="section-kanji text-3xl text-accent">店頭払い</p>
      <p className="mt-3 font-serif text-lg text-foreground">Pay when you pick up</p>
      <p className="mt-2 text-sm text-muted">
        No card required for this demo flow. Your fictional order total is{" "}
        <strong className="text-foreground">{formatPrice(total)}</strong>.
      </p>
    </div>
  );
}

function MockCardField({
  label,
  placeholder,
  variant = "square",
}: {
  label: string;
  placeholder: string;
  variant?: "square" | "clover";
}) {
  return (
    <label className="block text-xs">
      <span className="font-medium text-muted">{label}</span>
      <input
        readOnly
        placeholder={placeholder}
        className={`mt-1 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-foreground outline-none ${
          variant === "clover" ? "border-[#1a7f4b]/30" : "border-[#006aff]/30"
        }`}
      />
    </label>
  );
}

function SuccessView({
  orderNumber,
  onClose,
}: {
  orderNumber: string;
  onClose: () => void;
}) {
  return (
    <div className="px-6 py-12 text-center animate-fade-in-up">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl">
        ✓
      </div>
      <p className="section-kanji mt-6 text-3xl text-accent">注文完了</p>
      <h2 className="mt-2 font-serif text-2xl text-foreground">Demo order placed!</h2>
      <p className="mx-auto mt-4 max-w-sm text-sm text-muted">
        Order <strong className="text-foreground">{orderNumber}</strong> was simulated
        locally. No payment was processed and no kitchen was notified.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent/90"
      >
        Done
      </button>
    </div>
  );
}

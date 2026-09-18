"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import type { CartLineItem, MenuItem } from "@/lib/menu";
import { calcOrderTotals } from "@/lib/menu";

const STORAGE_KEY = "hanami-demo-cart";
const EMPTY_CART: CartLineItem[] = [];

type CartContextValue = {
  items: CartLineItem[];
  itemCount: number;
  isOpen: boolean;
  isCheckoutOpen: boolean;
  orderType: "pickup" | "delivery";
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  setOrderType: (type: "pickup" | "delivery") => void;
  addItem: (item: MenuItem, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totals: ReturnType<typeof calcOrderTotals>;
};

const CartContext = createContext<CartContextValue | null>(null);

let cartListeners: Array<() => void> = [];
let cachedRaw: string | null = null;
let cachedSnapshot: CartLineItem[] = EMPTY_CART;

function emitCartChange() {
  cartListeners.forEach((listener) => listener());
}

function subscribeCart(listener: () => void) {
  cartListeners = [...cartListeners, listener];
  return () => {
    cartListeners = cartListeners.filter((l) => l !== listener);
  };
}

function getCartSnapshot(): CartLineItem[] {
  if (typeof window === "undefined") return EMPTY_CART;

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (raw === cachedRaw) {
    return cachedSnapshot;
  }

  cachedRaw = raw;

  if (!raw) {
    cachedSnapshot = EMPTY_CART;
    return cachedSnapshot;
  }

  try {
    const parsed = JSON.parse(raw) as CartLineItem[];
    cachedSnapshot = Array.isArray(parsed) ? parsed : EMPTY_CART;
  } catch {
    cachedSnapshot = EMPTY_CART;
  }

  return cachedSnapshot;
}

function writeStoredCart(items: CartLineItem[]) {
  if (typeof window === "undefined") return;

  const raw = JSON.stringify(items);
  window.localStorage.setItem(STORAGE_KEY, raw);
  cachedRaw = raw;
  cachedSnapshot = items.length === 0 ? EMPTY_CART : items;
  emitCartChange();
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(
    subscribeCart,
    getCartSnapshot,
    () => EMPTY_CART,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");

  const addItem = useCallback((item: MenuItem, quantity = 1) => {
    const current = getCartSnapshot();
    const existing = current.find((line) => line.id === item.id);

    const next = existing
      ? current.map((line) =>
          line.id === item.id
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        )
      : [...current, { ...item, quantity }];

    writeStoredCart(next);
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    writeStoredCart(getCartSnapshot().filter((line) => line.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    const current = getCartSnapshot();
    const next =
      quantity < 1
        ? current.filter((line) => line.id !== id)
        : current.map((line) =>
            line.id === id ? { ...line, quantity } : line,
          );

    writeStoredCart(next);
  }, []);

  const clearCart = useCallback(() => {
    writeStoredCart([]);
  }, []);

  const itemCount = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items],
  );

  const totals = useMemo(() => calcOrderTotals(items, orderType), [items, orderType]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      isOpen,
      isCheckoutOpen,
      orderType,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      openCheckout: () => {
        setIsOpen(false);
        setIsCheckoutOpen(true);
      },
      closeCheckout: () => setIsCheckoutOpen(false),
      setOrderType,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totals,
    }),
    [
      items,
      itemCount,
      isOpen,
      isCheckoutOpen,
      orderType,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totals,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

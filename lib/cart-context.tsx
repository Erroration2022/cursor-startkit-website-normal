"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartLineItem, MenuItem } from "@/lib/menu";
import { calcOrderTotals } from "@/lib/menu";

const STORAGE_KEY = "hanami-demo-cart";

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

function loadStoredCart(): CartLineItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLineItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");

  useEffect(() => {
    setItems(loadStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((item: MenuItem, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((line) => line.id === item.id);
      if (existing) {
        return current.map((line) =>
          line.id === item.id
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        );
      }
      return [...current, { ...item, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((line) => line.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      setItems((current) => current.filter((line) => line.id !== id));
      return;
    }
    setItems((current) =>
      current.map((line) => (line.id === id ? { ...line, quantity } : line)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

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

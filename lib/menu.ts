import { menuCategories } from "./site";

export type MenuItem = {
  id: string;
  name: string;
  nameJa: string;
  price: number;
  description: string;
  category: string;
  categoryJa: string;
};

export type CartLineItem = MenuItem & {
  quantity: number;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const allMenuItems: MenuItem[] = [
  ...menuCategories.flatMap((category) =>
    category.items.map((item) => ({
      id: slugify(`${category.name}-${item.name}`),
      name: item.name,
      nameJa: item.nameJa,
      price: item.price,
      description: item.description,
      category: category.name,
      categoryJa: category.nameJa,
    })),
  ),
  {
    id: "demo-omakase",
    name: "Demo Omakase",
    nameJa: "デモおまかせ",
    price: 85,
    description: "Nine fictional courses, chef's choice.",
    category: "Chef's Selection",
    categoryJa: "おまかせ",
  },
  {
    id: "sample-chirashi-bowl",
    name: "Sample Chirashi Bowl",
    nameJa: "サンプルちらし丼",
    price: 24,
    description: "Assorted demo sashimi over seasoned sushi rice.",
    category: "Rice & Bowls",
    categoryJa: "ご飯",
  },
];

export const menuItemById = Object.fromEntries(
  allMenuItems.map((item) => [item.id, item]),
) as Record<string, MenuItem>;

export const TAX_RATE = 0.085;
export const PICKUP_FEE = 0;
export const DELIVERY_FEE = 4.99;

export function findMenuItemByName(name: string) {
  return allMenuItems.find((item) => item.name === name);
}

export function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export function calcOrderTotals(
  items: CartLineItem[],
  orderType: "pickup" | "delivery",
) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceFee = orderType === "delivery" ? DELIVERY_FEE : PICKUP_FEE;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + serviceFee + tax;

  return { subtotal, serviceFee, tax, total };
}

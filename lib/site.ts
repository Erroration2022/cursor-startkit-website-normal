export const site = {
  name: "Sakura House",
  nameJa: "桜家",
  tagline: "Authentic Japanese cuisine, crafted with care",
  description:
    "A neighborhood izakaya serving seasonal sushi, soul-warming ramen, and small plates inspired by Tokyo backstreets.",
  phone: "(503) 555-0142",
  email: "hello@sakurahouse.example",
  address: {
    street: "42 Cherry Blossom Lane",
    city: "Portland",
    state: "OR",
    zip: "97201",
  },
  hours: [
    { days: "Tuesday – Thursday", time: "11:30 AM – 9:00 PM" },
    { days: "Friday – Saturday", time: "11:30 AM – 10:00 PM" },
    { days: "Sunday", time: "12:00 PM – 8:30 PM" },
    { days: "Monday", time: "Closed" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/#about" },
    { label: "Visit", href: "/#visit" },
  ],
} as const;

export const featuredDishes = [
  {
    name: "Chef's Omakase",
    nameJa: "おまかせ",
    description: "Nine courses chosen daily from the freshest market catch.",
    price: 85,
    category: "Chef's Selection",
  },
  {
    name: "Chirashi Bowl",
    nameJa: "ちらし丼",
    description: "Assorted sashimi over seasoned sushi rice with pickled ginger.",
    price: 24,
    category: "Rice & Bowls",
  },
  {
    name: "Tonkotsu Ramen",
    nameJa: "豚骨ラーメン",
    description: "Rich pork broth, chashu, soft egg, nori, and house noodles.",
    price: 18,
    category: "Noodles",
  },
  {
    name: "Miso Black Cod",
    nameJa: "味噌銀鱈",
    description: "Marinated overnight, broiled until caramelized and buttery.",
    price: 32,
    category: "Grill",
  },
] as const;

export const menuCategories = [
  {
    name: "Small Plates",
    nameJa: "前菜",
    items: [
      { name: "Edamame", nameJa: "枝豆", price: 6, description: "Sea salt, togarashi" },
      { name: "Gyoza", nameJa: "餃子", price: 10, description: "Pork and chive, chili oil" },
      { name: "Agedashi Tofu", nameJa: "揚げ出し豆腐", price: 9, description: "Dashi broth, grated daikon" },
      { name: "Takoyaki", nameJa: "たこ焼き", price: 12, description: "Bonito flakes, okonomiyaki sauce" },
    ],
  },
  {
    name: "Sushi & Sashimi",
    nameJa: "寿司",
    items: [
      { name: "Salmon Nigiri (2pc)", nameJa: "サーモン", price: 9, description: "Faroe Island salmon" },
      { name: "Tuna Sashimi", nameJa: "まぐろ", price: 16, description: "Bluefin, wasabi, shiso" },
      { name: "Dragon Roll", nameJa: "ドラゴンロール", price: 17, description: "Eel, avocado, cucumber" },
      { name: "Vegetable Roll", nameJa: "野菜巻き", price: 13, description: "Seasonal vegetables, sesame" },
    ],
  },
  {
    name: "Noodles & Rice",
    nameJa: "麺・ご飯",
    items: [
      { name: "Tonkotsu Ramen", nameJa: "豚骨ラーメン", price: 18, description: "Rich pork broth, chashu, egg" },
      { name: "Shoyu Ramen", nameJa: "醤油ラーメン", price: 17, description: "Chicken dashi, bamboo shoots" },
      { name: "Chicken Katsu Curry", nameJa: "カツカレー", price: 19, description: "House curry, steamed rice" },
      { name: "Chirashi Bowl", nameJa: "ちらし丼", price: 24, description: "Chef's daily fish selection" },
    ],
  },
  {
    name: "Desserts",
    nameJa: "甘味",
    items: [
      { name: "Matcha Cheesecake", nameJa: "抹茶チーズケーキ", price: 12, description: "Ceremonial grade matcha" },
      { name: "Mochi Ice Cream", nameJa: "アイスクリーム大福", price: 8, description: "Black sesame, strawberry, or yuzu" },
      { name: "Dorayaki", nameJa: "どら焼き", price: 9, description: "Red bean, whipped cream" },
    ],
  },
] as const;

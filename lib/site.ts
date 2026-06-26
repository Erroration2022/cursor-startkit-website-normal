export const site = {
  name: "Demo Kitchen Hanami",
  nameJa: "デモ花見食堂",
  sampleNotice: "SAMPLE WEBSITE — FICTIONAL RESTAURANT FOR DEMO PURPOSES ONLY",
  tagline: "Craft, seasonality, and quiet hospitality",
  description:
    "A fictional neighborhood Japanese restaurant demo showcasing how Cursor and Vercel help small businesses build beautiful, informative websites quickly.",
  phone: "(555) 010-9999",
  email: "demo@sample-restaurant.example",
  address: {
    street: "123 Example Street, Suite 0",
    city: "Sample City",
    state: "CA",
    zip: "90000",
  },
  hours: [
    { days: "Tuesday – Thursday", time: "11:30 AM – 9:00 PM" },
    { days: "Friday – Saturday", time: "11:30 AM – 10:00 PM" },
    { days: "Sunday", time: "12:00 PM – 8:30 PM" },
    { days: "Monday", time: "Closed" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    instagram: "#",
    facebook: "#",
  },
} as const;

export const homeStory = {
  title: "A table built on patience, not shortcuts",
  paragraphs: [
    "Demo Kitchen Hanami is a fictional restaurant created to show what a thoughtful Japanese dining website can feel like. In the spirit of real izakaya and sushiya across Japan, our sample story begins with a simple promise: respect the ingredient, honor the season, and serve each guest as though they are the only person in the room.",
    "The name Hanami — flower viewing — recalls spring evenings when neighbors gather under blooming trees, sharing food and quiet conversation. We imagined our demo kitchen opening in a converted Sample City storefront, where worn floorboards and a ten-seat counter became a place to practice the old virtues of Japanese hospitality: omotenashi (wholehearted welcome), kodawari (persistence in quality), and shokunin kishitsu — the craftsman’s spirit known as 匠心.",
    "Our fictional founders believed a restaurant should not chase trends. Broth simmers overnight. Rice is seasoned by hand. Fish arrives each morning from a placeholder supplier we call “Sample Bay Fisheries” — because this is a demo, and every detail is invented for illustration. What is real, however, is the value Japanese restaurants offer: clarity of flavor, balance on the plate, and a sense of calm that lets you slow down.",
    "Whether you come for a bowl of ramen after work or sit at the counter for an omakase on a sample Saturday night, Hanami is designed to feel personal. We keep the menu focused so each dish can be made well. We train staff to explain ingredients without pretension. We treat leftovers as a lesson, not a failure. These principles guide our fictional kitchen — and this website — the same way they guide countless small businesses using modern tools to tell an honest story.",
    "This site is not a real restaurant. Every name, address, and phone number is a placeholder. But the care behind it is genuine: a demonstration of how a small business can present history, values, and craft online without a large budget or a long timeline.",
  ],
} as const;

export const principles = [
  {
    kanji: "匠心",
    romaji: "Shōshin",
    title: "Craftsman's Heart",
    description:
      "The shokunin spirit: repeat the fundamentals until they become instinct. Our demo chef sharpens knives at dawn and tastes broth at midnight — because mastery is built in small, patient acts.",
  },
  {
    kanji: "おもてなし",
    romaji: "Omotenashi",
    title: "Selfless Hospitality",
    description:
      "Anticipate needs before they are spoken. A warm towel, tea poured at the right moment, and a menu that guides without overwhelming — hospitality as quiet care.",
  },
  {
    kanji: "旬",
    romaji: "Shun",
    title: "Seasonality",
    description:
      "Build the menu around what is at its peak. Spring bamboo, summer uni, autumn mushrooms, winter citrus — each season writes its own chapter on the plate.",
  },
  {
    kanji: "和",
    romaji: "Wa",
    title: "Harmony",
    description:
      "Balance color, texture, temperature, and portion. Japanese cuisine seeks harmony — between sweet and salt, crisp and tender, guest and kitchen, tradition and today.",
  },
  {
    kanji: "こだわり",
    romaji: "Kodawari",
    title: "Relentless Standards",
    description:
      "Refuse “good enough.” Sample or not, our fictional kitchen holds every detail to a standard: rice temperature, broth clarity, the angle of each nigiri.",
  },
  {
    kanji: "一期一会",
    romaji: "Ichigo Ichie",
    title: "Once in a Lifetime",
    description:
      "Each visit is unique and will not return. We treat every seating — even in this demo — as a single encounter worth full attention.",
  },
] as const;

export const chef = {
  name: "Chef Sample Yamada",
  nameJa: "山田サンプル",
  title: "Head Chef (Fictional Demo)",
  yearsExperience: 22,
  origin: "Sample Prefecture, Japan (fictional)",
  bio: [
    "Chef Sample Yamada is a completely fictional character created for this demonstration website. His story follows a path familiar to many Japanese chefs: apprenticeship at sixteen in a small Sample City noodle shop, five years on the line learning knife work and stock, then a decade at a demo sushiya where he studied rice, fish handling, and the rhythm of the counter.",
    "Yamada-san — always labeled “Sample” to avoid confusion with any real person — believes cooking is a dialogue between nature and memory. He visits the same fictional morning market six days a week, not because a script requires it, but because the habit teaches respect: you see what the weather did to the harvest, what the sea brought in, what must be celebrated today and what must wait.",
    "In 2019, in our made-up timeline, he opened Demo Kitchen Hanami with two partners from his apprenticeship days. They agreed on one rule: never serve a dish they would not proudly eat themselves. The counter seats twelve. The kitchen is visible. The menu changes with the sample seasons printed on our demo calendar.",
    "When he is not behind the counter, our fictional Yamada teaches weekend classes for home cooks — miso soup, rice washing, basic dashi — because he wants the 匠心 of Japanese cooking to live in everyday kitchens, not only in restaurants.",
  ],
  specialties: ["Edomae-style nigiri", "Tonkotsu & shoyu ramen", "Seasonal izakaya small plates"],
  quote:
    "The guest does not come for spectacle. They come for trust. Every slice must earn that trust — even in a demo kitchen.",
} as const;

export const testimonials = [
  {
    quote:
      "Fictional review for demo purposes: the ramen broth had depth I did not expect from a sample menu. Warm, patient, unforgettable.",
    author: "Guest A. (Sample)",
    role: "Demo Neighborhood Regular",
  },
  {
    quote:
      "We booked the sample omakase for a placeholder anniversary. Every course was explained with care — felt like real omotenashi.",
    author: "Guest B. (Sample)",
    role: "First-time Visitor (Demo)",
  },
  {
    quote:
      "Not a real restaurant, but the website shows how a small business can tell its story beautifully. Clear menu, clear values.",
    author: "Guest C. (Sample)",
    role: "Local Food Blogger (Fictional)",
  },
] as const;

export const featuredDishes = [
  {
    name: "Demo Omakase",
    nameJa: "デモおまかせ",
    description: "Nine fictional courses chosen daily from our sample fish list.",
    price: 85,
    category: "Chef's Selection",
  },
  {
    name: "Sample Chirashi Bowl",
    nameJa: "サンプルちらし丼",
    description: "Assorted demo sashimi over seasoned sushi rice and pickled ginger.",
    price: 24,
    category: "Rice & Bowls",
  },
  {
    name: "Hanami Tonkotsu Ramen",
    nameJa: "花見豚骨ラーメン",
    description: "18-hour sample broth, chashu, soft egg, nori, and house noodles.",
    price: 18,
    category: "Noodles",
  },
  {
    name: "Miso Demo Cod",
    nameJa: "味噌デモ鱈",
    description: "Marinated overnight, broiled until caramelized — a house fictional classic.",
    price: 32,
    category: "Grill",
  },
  {
    name: "Seasonal Tempura",
    nameJa: "旬の天ぷら",
    description: "Lightly battered sample vegetables and prawn with matcha salt.",
    price: 16,
    category: "Small Plates",
  },
  {
    name: "Matcha Sample Cheesecake",
    nameJa: "抹茶サンプルケーキ",
    description: "Ceremonial-grade demo matcha, black sesame crumble, yuzu gel.",
    price: 12,
    category: "Desserts",
  },
] as const;

export const menuCategories = [
  {
    name: "Small Plates & Izakaya",
    nameJa: "前菜・居酒屋",
    items: [
      { name: "Edamame", nameJa: "枝豆", price: 6, description: "Sea salt, shichimi togarashi" },
      { name: "Gyoza (6pc)", nameJa: "餃子", price: 10, description: "Pork, chive, chili oil, rice vinegar" },
      { name: "Agedashi Tofu", nameJa: "揚げ出し豆腐", price: 9, description: "Dashi broth, grated daikon, bonito" },
      { name: "Takoyaki", nameJa: "たこ焼き", price: 12, description: "Octopus fritters, okonomiyaki sauce" },
      { name: "Karaage", nameJa: "唐揚げ", price: 11, description: "Crispy chicken, lemon, kewpie mayo" },
      { name: "Tsukemono Plate", nameJa: "漬物盛り", price: 7, description: "Seasonal pickled vegetables" },
      { name: "Shishito Peppers", nameJa: "ししとう", price: 8, description: "Blistered, bonito flakes, soy" },
      { name: "Hamachi Carpaccio", nameJa: "ハマチのカルパッチョ", price: 15, description: "Yuzu kosho, micro shiso, olive oil" },
    ],
  },
  {
    name: "Sushi & Sashimi",
    nameJa: "寿司・刺身",
    items: [
      { name: "Salmon Nigiri (2pc)", nameJa: "サーモン", price: 9, description: "Lightly torched optional" },
      { name: "Tuna Sashimi", nameJa: "まぐろ", price: 16, description: "Akami, wasabi, shiso" },
      { name: "Yellowtail Sashimi", nameJa: "ハマチ", price: 15, description: "Ponzu, scallion, sesame" },
      { name: "Dragon Roll", nameJa: "ドラゴンロール", price: 17, description: "Eel, avocado, cucumber" },
      { name: "Sample Veg Roll", nameJa: "サンプル野菜巻き", price: 13, description: "Seasonal vegetables, sesame" },
      { name: "Uni Nigiri (2pc)", nameJa: "ウニ", price: 22, description: "When in season — ask server" },
      { name: "Sashimi Moriawase", nameJa: "刺身盛り合わせ", price: 28, description: "Chef's daily five-piece selection" },
      { name: "Demo Chirashi Bowl", nameJa: "デモちらし丼", price: 24, description: "Assorted fish over sushi rice" },
    ],
  },
  {
    name: "Noodles & Rice",
    nameJa: "麺・ご飯",
    items: [
      { name: "Hanami Tonkotsu Ramen", nameJa: "花見豚骨ラーメン", price: 18, description: "Rich pork broth, chashu, egg" },
      { name: "Shoyu Ramen", nameJa: "醤油ラーメン", price: 17, description: "Chicken dashi, bamboo, nori" },
      { name: "Miso Ramen", nameJa: "味噌ラーメン", price: 17, description: "Corn, butter, bean sprouts" },
      { name: "Tsukemen", nameJa: "つけ麺", price: 19, description: "Dipping noodles, spiced broth" },
      { name: "Chicken Katsu Curry", nameJa: "カツカレー", price: 19, description: "House curry, steamed rice" },
      { name: "Unagi Don", nameJa: "うな丼", price: 26, description: "Grilled eel, sweet kabayaki sauce" },
      { name: "Onigiri Set (2pc)", nameJa: "おにぎりセット", price: 9, description: "Salmon, ume, or tuna mayo" },
    ],
  },
  {
    name: "Grill & Hot Dishes",
    nameJa: "焼物・鍋",
    items: [
      { name: "Miso Demo Cod", nameJa: "味噌デモ鱈", price: 32, description: "Saikyo miso, broiled" },
      { name: "Salmon Shioyaki", nameJa: "鮭の塩焼き", price: 21, description: "Salt-grilled, daikon oroshi" },
      { name: "Wagyu Sample Skewers", nameJa: "サンプル和牛串", price: 18, description: "Yakitori glaze, scallion" },
      { name: "Seasonal Tempura", nameJa: "旬の天ぷら", price: 16, description: "Prawn, sweet potato, shiso" },
      { name: "Sukiyaki (for 2)", nameJa: "すき焼き", price: 48, description: "Simmered beef, tofu, vegetables" },
    ],
  },
  {
    name: "Soups & Sides",
    nameJa: "汁物・副菜",
    items: [
      { name: "Miso Soup", nameJa: "味噌汁", price: 4, description: "Tofu, wakame, scallion" },
      { name: "Sunomono", nameJa: "酢の物", price: 6, description: "Cucumber, wakame, sweet vinegar" },
      { name: "Goma-ae Spinach", nameJa: "ほうれん草の胡麻和え", price: 7, description: "Toasted sesame dressing" },
      { name: "Steamed Rice", nameJa: "ご飯", price: 3, description: "Koshihikari-style short grain" },
    ],
  },
  {
    name: "Desserts & Drinks",
    nameJa: "甘味・飲み物",
    items: [
      { name: "Matcha Sample Cheesecake", nameJa: "抹茶サンプルケーキ", price: 12, description: "Yuzu gel, sesame crumble" },
      { name: "Mochi Ice Cream", nameJa: "アイス大福", price: 8, description: "Black sesame, strawberry, yuzu" },
      { name: "Dorayaki", nameJa: "どら焼き", price: 9, description: "Red bean, whipped cream" },
      { name: "Anmitsu", nameJa: "あんみつ", price: 10, description: "Agar jelly, fruit, kuromitsu" },
      { name: "Hot Sencha", nameJa: "煎茶", price: 4, description: "Refills available" },
      { name: "Sample Sake Flight", nameJa: "サンプル酒三種", price: 16, description: "Three 2oz pours — demo list" },
      { name: "Yuzu Highball", nameJa: "柚子ハイボール", price: 11, description: "Whisky, yuzu, soda" },
    ],
  },
] as const;

export const contactTopics = [
  "General inquiry (demo)",
  "Reservation request",
  "Private event (sample)",
  "Feedback on this demo site",
] as const;

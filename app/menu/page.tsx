import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MenuOrderSection } from "@/components/menu/menu-order-section";
import { allMenuItems } from "@/lib/menu";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Order online from ${site.name} — demo cart with Square and Clover-style checkout UI.`,
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow={site.nameJa}
        title="Order Online"
        description={`${allMenuItems.length} orderable demo dishes. Add to cart, review your order, and walk through a sample checkout — no real payments processed.`}
        image="/images/food-spread.png"
        imageAlt="Fictional Japanese food spread"
        kanji="注文"
      />
      <MenuOrderSection />
    </>
  );
}

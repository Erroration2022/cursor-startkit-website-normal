import { AboutSection } from "@/components/about-section";
import { FeaturedMenu } from "@/components/featured-menu";
import { Hero } from "@/components/hero";
import { HoursLocation } from "@/components/hours-location";
import { ReservationCta } from "@/components/reservation-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <AboutSection />
      <HoursLocation />
      <ReservationCta />
    </>
  );
}

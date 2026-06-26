import { FeaturedMenu } from "@/components/featured-menu";
import { Hero } from "@/components/hero";
import { HoursLocation } from "@/components/hours-location";
import { Introduction } from "@/components/introduction";
import { Principles } from "@/components/principles";
import { ReservationCta } from "@/components/reservation-cta";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Principles />
      <FeaturedMenu />
      <Testimonials />
      <HoursLocation />
      <ReservationCta />
    </>
  );
}

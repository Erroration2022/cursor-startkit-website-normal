import Link from "next/link";
import { site } from "@/lib/site";

export function ReservationCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="overflow-hidden rounded-2xl bg-accent text-white">
        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          <div className="p-8 sm:p-14">
            <p className="text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
              Reservations
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Join us for a sample evening
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/85">
              Walk-ins welcome at the demo bar. For parties of four or more, use our
              fictional phone line or contact form — both are placeholders for this
              showcase site.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                className="rounded-full bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Send a Message
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center border-t border-white/15 bg-foreground/30 p-8 lg:border-t-0 lg:border-l">
            <p className="section-kanji text-5xl text-gold">おもてなし</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Omotenashi — hospitality without expectation of return. The goal is not
              to impress, but to make each guest feel quietly cared for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

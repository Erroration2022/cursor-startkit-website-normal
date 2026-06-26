import { site } from "@/lib/site";

export function ReservationCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-2xl bg-accent px-8 py-14 text-center text-white sm:px-16">
        <p className="text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
          Reservations
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Join us tonight
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/85 leading-relaxed">
          Walk-ins welcome at the bar. For parties of four or more, call ahead and
          we&apos;ll save your favorite corner booth.
        </p>
        <a
          href={`tel:${site.phone.replace(/\D/g, "")}`}
          className="mt-8 inline-block rounded-full bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
        >
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}

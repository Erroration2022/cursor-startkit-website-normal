import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-interior.png"
          alt="Warm wood sushi counter in a fictional Japanese restaurant"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/75 to-ink/35" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[85vh] max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.35em] text-gold uppercase">
            {site.nameJa} · Sample City
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.1] text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            {site.tagline}. A demonstration of Japanese hospitality — omotenashi,
            seasonality, and the craftsman&apos;s spirit of{" "}
            <span className="font-serif text-gold">匠心</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Explore Menu
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="hidden rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md lg:block">
          <p className="section-kanji text-5xl text-gold">匠心</p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Shōshin — the artisan&apos;s heart. In Japanese dining culture, mastery
            is not performance. It is repetition, respect, and quiet devotion to
            the guest&apos;s experience.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
            <div>
              <dt className="font-serif text-2xl text-white">18h</dt>
              <dd className="mt-1 text-xs text-white/65">Broth preparation</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-white">12</dt>
              <dd className="mt-1 text-xs text-white/65">Counter seats</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-white">旬</dt>
              <dd className="mt-1 text-xs text-white/65">Seasonal menu</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-white">一期一会</dt>
              <dd className="mt-1 text-xs text-white/65">Each visit unique</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

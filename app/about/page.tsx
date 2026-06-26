import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { chef, principles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn the fictional story of ${site.name}, our demo chef, and the Japanese values behind our sample kitchen.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={site.nameJa}
        title="Our Story & Chef"
        description="A fictional biography inspired by real Japanese restaurant culture — shokunin discipline, seasonal cooking, and omotenashi hospitality."
        image="/images/chef-portrait.png"
        imageAlt="Fictional demo chef portrait"
        kanji="職人"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/chef-portrait.png"
                alt="Chef Sample Yamada, fictional demo character"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Demo Chef</p>
              <p className="mt-2 font-serif text-2xl text-foreground">{chef.name}</p>
              <p className="text-sm text-accent">{chef.nameJa}</p>
              <p className="mt-1 text-sm text-muted">{chef.title}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
                <div>
                  <dt className="text-muted">Experience</dt>
                  <dd className="font-medium text-foreground">{chef.yearsExperience} years</dd>
                </div>
                <div>
                  <dt className="text-muted">Origin</dt>
                  <dd className="font-medium text-foreground">{chef.origin}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Chef Biography (Fictional)
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">
              The path of {chef.name}
            </h2>
            <div className="mt-6 space-y-5 text-muted leading-relaxed">
              {chef.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-serif text-lg italic text-foreground">
                &ldquo;{chef.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm text-muted">— {chef.name}</footer>
            </blockquote>

            <div className="mt-8">
              <p className="text-sm font-medium text-foreground">Specialties (demo)</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {chef.specialties.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-accent-light/60 px-4 py-1.5 text-xs text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pattern-seigaiha border-y border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Kitchen Philosophy
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">
              How our demo kitchen works
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Real Japanese restaurants often post their values near the entrance or on
              the menu. Here are the principles our fictional team returns to daily.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.slice(0, 3).map((item) => (
              <article
                key={item.kanji}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="section-kanji text-2xl text-accent">{item.kanji}</p>
                <h3 className="mt-3 font-serif text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
          <div className="relative min-h-72">
            <Image
              src="/images/craftsmanship.png"
              alt="Sushi craftsmanship close-up"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-10">
            <p className="section-kanji text-4xl text-accent">一期一会</p>
            <h3 className="mt-4 font-serif text-2xl text-foreground">
              Every seating is a single encounter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ichigo ichie reminds us that tonight&apos;s guest will never return in quite
              the same way. The demo counter is small on purpose — intimacy is part of
              the story we are telling.
            </p>
            <Link
              href="/menu"
              className="mt-6 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Browse our sample menu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

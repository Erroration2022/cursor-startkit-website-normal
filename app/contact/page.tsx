import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — fictional demo restaurant. Sample phone, email, hours, and contact form.`,
};

export default function ContactPage() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
  const mapsQuery = encodeURIComponent(fullAddress);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach our demo kitchen"
        description="All contact details below are placeholders for this sample website. Use them to see how a real small business might present hours, location, and a simple inquiry form."
        kanji="連絡"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-serif text-2xl text-foreground">Contact details</h2>
              <p className="mt-2 text-sm text-muted">
                Fictional information for demonstration only.
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-muted">Phone</dt>
                  <dd className="mt-1 font-medium text-foreground">
                    <a
                      href={`tel:${site.phone.replace(/\D/g, "")}`}
                      className="hover:text-accent"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd className="mt-1 font-medium text-foreground">
                    <a href={`mailto:${site.email}`} className="hover:text-accent">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Address</dt>
                  <dd className="mt-1 font-medium text-foreground">{fullAddress}</dd>
                </div>
              </dl>
              <a
                href={`https://maps.google.com/?q=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-foreground/90"
              >
                Open in Maps (demo address)
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-serif text-2xl text-foreground">Hours</h2>
              <ul className="mt-6 space-y-3">
                {site.hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex justify-between gap-4 border-b border-border pb-3 text-sm last:border-0"
                  >
                    <span className="text-foreground">{row.days}</span>
                    <span className="text-muted">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-accent-light/40 p-6">
              <p className="text-sm font-medium text-foreground">Reservation note (demo)</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                For parties under four, walk in anytime during sample hours. For larger
                groups or omakase, call or use the form — in production, this would
                connect to your booking system or inbox.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-serif text-2xl text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-muted">
              Demo contact form — no data is transmitted.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-border bg-foreground p-10 text-center text-white">
          <p className="section-kanji text-4xl text-gold">おもてなし</p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
            A real restaurant website should make it effortless to call, find directions,
            and ask a question. This page demonstrates all three — built quickly with
            Cursor and deployable to Vercel in minutes.
          </p>
          <Link
            href="/menu"
            className="mt-6 inline-block text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            View sample menu →
          </Link>
        </div>
      </section>
    </>
  );
}

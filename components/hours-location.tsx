import { site } from "@/lib/site";

export function HoursLocation() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
  const mapsQuery = encodeURIComponent(fullAddress);

  return (
    <section id="visit" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Hours
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground">When we&apos;re open</h2>
          <ul className="mt-8 space-y-4">
            {site.hours.map((row) => (
              <li
                key={row.days}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0"
              >
                <span className="font-medium text-foreground">{row.days}</span>
                <span className="text-muted">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Location
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground">Find us</h2>
          <address className="mt-8 not-italic leading-relaxed text-muted">
            <p className="text-lg text-foreground">{site.address.street}</p>
            <p>
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </address>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://maps.google.com/?q=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Get Directions
            </a>
            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-light"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

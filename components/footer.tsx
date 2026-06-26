import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-background/60">{site.nameJa}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed text-background/80">
            {fullAddress}
          </p>
          <p className="mt-3 text-sm text-background/80">
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="hover:text-gold">
              {site.phone}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Hours
          </p>
          <ul className="mt-3 space-y-2">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4 text-sm text-background/80">
                <span>{row.days}</span>
                <span className="text-background/60">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-background/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-background/80">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

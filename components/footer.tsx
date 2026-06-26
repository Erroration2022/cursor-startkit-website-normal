import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-white">{site.name}</p>
          <p className="mt-1 text-sm text-white/60">{site.nameJa}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {site.description}
          </p>
          <p className="mt-4 text-xs text-gold">{site.sampleNotice}</p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">{fullAddress}</p>
          <p className="mt-3 text-sm">
            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="text-white/85 hover:text-gold"
            >
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${site.email}`} className="text-white/85 hover:text-gold">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Hours
          </p>
          <ul className="mt-3 space-y-1">
            {site.hours.map((row) => (
              <li key={row.days} className="text-xs text-white/75">
                {row.days}: {row.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Fictional demo site.</p>
          <p>Built with Cursor + Vercel showcase</p>
        </div>
      </div>
    </footer>
  );
}

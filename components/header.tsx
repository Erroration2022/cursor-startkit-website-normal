import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl tracking-wide text-foreground">
            {site.name}
          </span>
          <span className="text-xs tracking-[0.3em] text-muted uppercase">
            {site.nameJa}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${site.phone.replace(/\D/g, "")}`}
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          Reserve
        </a>
      </div>
    </header>
  );
}

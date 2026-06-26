import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  kanji?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  kanji,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-foreground text-white">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            className="object-cover opacity-35"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/70" />
        </div>
      )}

      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-5 leading-relaxed text-white/80">{description}</p>
        </div>
        {kanji && (
          <p className="section-kanji hidden text-7xl text-gold/30 sm:block">{kanji}</p>
        )}
      </div>
    </section>
  );
}

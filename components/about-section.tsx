import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-accent-light/50 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80"
            alt="Chef preparing sushi at the counter"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Our Story
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            A table for neighbors, travelers, and regulars
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              Sakura House opened with a simple idea: bring the warmth of a Tokyo
              neighborhood izakaya to Portland. Our chefs train in Osaka and return each
              season with new techniques and local partnerships.
            </p>
            <p>
              Every bowl of ramen starts with broth simmered for eighteen hours. Every
              piece of nigiri is cut to order. We keep the menu focused so each dish can
              be made well, every night.
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <div>
              <dt className="text-2xl font-serif text-accent">18h</dt>
              <dd className="mt-1 text-xs text-muted">Broth simmer</dd>
            </div>
            <div>
              <dt className="text-2xl font-serif text-accent">Daily</dt>
              <dd className="mt-1 text-xs text-muted">Fish delivery</dd>
            </div>
            <div>
              <dt className="text-2xl font-serif text-accent">12</dt>
              <dd className="mt-1 text-xs text-muted">Counter seats</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

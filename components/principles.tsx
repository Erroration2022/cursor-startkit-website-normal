import { principles } from "@/lib/site";

export function Principles() {
  return (
    <section className="pattern-seigaiha border-y border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Philosophy
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            Values that guide our fictional kitchen
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Japanese restaurants are built on more than recipes. These six principles
            — drawn from real culinary culture — shape how Demo Kitchen Hanami tells
            its sample story online and on the plate.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.kanji}
              className="card-lift rounded-2xl border border-border bg-card p-7"
            >
              <p className="section-kanji text-3xl text-accent">{item.kanji}</p>
              <p className="mt-1 text-xs tracking-widest text-muted uppercase">
                {item.romaji}
              </p>
              <h3 className="mt-4 font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

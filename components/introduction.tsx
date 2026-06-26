import Image from "next/image";
import { homeStory } from "@/lib/site";

export function Introduction() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="relative">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Welcome
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            {homeStory.title}
          </h2>
          <div className="relative mt-8 aspect-4/5 overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/food-spread.png"
              alt="Assorted fictional Japanese dishes on ceramic plates"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <p className="section-kanji vertical-rule absolute -right-2 top-24 hidden text-4xl text-accent/20 lg:block">
            花見
          </p>
        </div>

        <div className="space-y-5 text-muted leading-relaxed">
          {homeStory.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

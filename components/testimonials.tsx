import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-accent-light/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Guest Voices
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            Fictional reviews for a fictional restaurant
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
            These sample testimonials illustrate how social proof can appear on a
            small-business website. All names and quotes are invented.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="card-lift rounded-2xl border border-border bg-card p-7"
            >
              <p className="font-serif text-4xl leading-none text-accent/30">&ldquo;</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.quote}</p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{item.author}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

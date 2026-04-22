import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Il sait prendre le temps d'expliquer les choses, il a su se rendre disponible pour répondre à toutes mes questions, pour apaiser mes angoisses avant le procès.",
    name: "Sad Hill",
  },
  {
    quote: "Meilleur avocat que j'ai connu de ma vie, compétent et à l'écoute de ses clients.",
    name: "Latika Palash",
  },
  {
    quote: "Très reconnaissant de sa bonne défense et son côté humain.",
    name: "Toiuaa Wafert",
  },
  {
    quote: "Maître très professionnel, à l'écoute de ses clients et surtout très humain.",
    name: "Fred Piette",
  },
];

export function Testimonials() {
  return (
    <section id="avis" className="relative py-24 sm:py-32 grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-primary font-medium">
              Ils en parlent mieux que moi
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink text-balance">
              La voix de ceux que j'ai défendus.
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold text-ink">4,8 sur 5</div>
              <div className="text-muted-foreground text-xs">22 avis vérifiés Google</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`relative rounded-3xl p-7 sm:p-9 border border-border bg-card hover:shadow-[var(--shadow-soft)] transition ${
                i % 3 === 0 ? "md:translate-y-2" : ""
              }`}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <blockquote className="font-display text-xl sm:text-2xl leading-snug text-ink text-balance">
                « {r.quote} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/15 text-primary grid place-items-center font-display font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-ink">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Avis Google</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

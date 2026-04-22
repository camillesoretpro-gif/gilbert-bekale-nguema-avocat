import { Heart, Clock, Scale } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Une approche humaine",
    body: "Vous êtes une personne avant d'être un dossier. J'écoute, je rassure, j'explique — sans jargon, sans précipitation.",
  },
  {
    icon: Clock,
    title: "Disponibilité & réactivité",
    body: "Une question urgente ? Une angoisse avant l'audience ? Je reste joignable et je réponds vite, parce que le temps compte.",
  },
  {
    icon: Scale,
    title: "Rigueur & compétence",
    body: "Une défense préparée avec sérieux, une plaidoirie maîtrisée, une stratégie claire au tribunal.",
  },
];

export function Values() {
  return (
    <section id="approche" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-medium">
            Mon approche
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink text-balance">
            Le droit, mais avec <em className="not-italic text-primary">l'humain</em> au centre.
          </h2>
          <p className="mt-5 text-lg text-foreground/70 text-balance">
            Trois principes guident chaque dossier que je défends.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative rounded-3xl border border-border bg-card p-7 sm:p-8 hover:border-primary/40 transition-all hover:shadow-[var(--shadow-soft)]"
              style={{ transform: i === 1 ? "translateY(0)" : undefined }}
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{v.body}</p>
              <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

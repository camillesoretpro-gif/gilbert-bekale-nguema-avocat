import { Gavel, Users, Briefcase, BookOpen, Globe2, MoreHorizontal } from "lucide-react";

const areas = [
  { icon: Gavel, title: "Droit pénal", desc: "Défense devant toutes les juridictions pénales, garde à vue, audiences correctionnelles." },
  { icon: Users, title: "Droit de la famille", desc: "Divorce, séparation, garde d'enfants, pension alimentaire, succession." },
  { icon: Briefcase, title: "Droit du travail", desc: "Licenciement, harcèlement, rupture conventionnelle, prud'hommes." },
  { icon: BookOpen, title: "Droit civil", desc: "Litiges contractuels, voisinage, responsabilité, indemnisation." },
  { icon: Globe2, title: "Droit des étrangers", desc: "Titres de séjour, naturalisation, OQTF, regroupement familial." },
  { icon: MoreHorizontal, title: "Autres domaines", desc: "Conseil juridique généraliste — n'hésitez pas à me contacter." },
];

export function Practice() {
  return (
    <section id="domaines" className="relative py-24 sm:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.22em] text-primary font-medium">
              Domaines d'intervention
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink text-balance">
              Un avocat <em className="not-italic text-primary">généraliste</em>, à votre écoute.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm">
            Quel que soit votre besoin, j'examine votre situation et vous propose la meilleure stratégie possible.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {areas.map((a) => (
            <div
              key={a.title}
              className="group bg-card p-7 sm:p-8 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-ink">{a.title}</h3>
              </div>
              <p className="mt-4 text-foreground/70 leading-relaxed text-[15px]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

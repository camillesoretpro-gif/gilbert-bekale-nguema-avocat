import { Star, Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-warmth.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grain">
      {/* warm radial backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 60%), radial-gradient(50% 40% at 0% 100%, color-mix(in oklab, var(--sage) 14%, transparent) 0%, transparent 60%), var(--cream)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-24 pb-20 sm:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs sm:text-sm text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Cabinet à Alès — disponible cette semaine
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] text-balance text-ink">
            Un avocat qui <em className="not-italic text-primary">prend le temps</em> de vous écouter.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-foreground/75 max-w-xl text-balance">
            Maître Gilbert Bekale Nguema défend vos droits avec rigueur, humanité et
            disponibilité. Une relation de confiance, des explications claires, une
            défense menée à vos côtés.
          </p>

          {/* Rating + meta */}
          <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-7">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-ink">4,8 / 5</div>
                <div className="text-muted-foreground text-xs">22 avis Google</div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-border" />

            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <MapPin className="h-4 w-4 text-primary" />
              1A Rue Jean Castagno · 30100 Alès
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+33618666008"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium shadow-[var(--shadow-warm)] hover:translate-y-[-1px] transition"
            >
              <Phone className="h-4 w-4" />
              06 18 66 60 08
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-6 py-3.5 font-medium text-ink hover:bg-muted transition"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] -z-10"
              style={{ background: "var(--gradient-warm)", opacity: 0.18, filter: "blur(40px)" }}
            />
            <div className="relative rounded-[2rem] overflow-hidden border border-border bg-clay shadow-[var(--shadow-soft)]">
              <img
                src={heroImg}
                alt="Illustration d'écoute et de confiance"
                width={1280}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* floating quote card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-10 max-w-[85%] sm:max-w-sm bg-card/95 backdrop-blur rounded-2xl border border-border p-5 shadow-[var(--shadow-soft)]">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-base sm:text-lg leading-snug text-ink">
                « Meilleur avocat que j'ai connu de ma vie, compétent et à l'écoute. »
              </p>
              <div className="mt-2 text-xs text-muted-foreground">— Latika P., avis Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

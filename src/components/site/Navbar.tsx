import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 grid place-items-center font-display text-primary text-lg">
            B
          </span>
          <div className="leading-tight">
            <div className="font-display text-base sm:text-lg font-semibold text-ink">
              Maître Bekale Nguema
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Avocat · Alès
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <a href="#approche" className="hover:text-primary transition-colors">Approche</a>
          <a href="#domaines" className="hover:text-primary transition-colors">Domaines</a>
          <a href="#avis" className="hover:text-primary transition-colors">Avis</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <a
          href="tel:+33618666008"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 text-sm font-medium shadow-[var(--shadow-warm)] hover:opacity-95 transition"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">06 18 66 60 08</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-display text-cream text-lg">Maître Bekale Nguema</div>
          <p className="mt-2 leading-relaxed">
            Avocat généraliste inscrit au Barreau, exerçant à Alès (30) et dans tout le Gard.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-cream/50">Cabinet</div>
          <p className="mt-2 leading-relaxed">
            1A Rue Jean Castagno<br />
            30100 Alès<br />
            06 18 66 60 08
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-cream/50">Horaires</div>
          <p className="mt-2 leading-relaxed">
            Lundi – Vendredi<br />
            9h00 – 18h00<br />
            Sur rendez-vous
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-cream/50">Mentions légales</div>
          <p className="mt-2 leading-relaxed">
            Profession réglementée soumise au secret professionnel et aux règles déontologiques de la profession d'avocat (RIN).
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Cabinet Bekale Nguema — Tous droits réservés.</div>
          <div>Mentions légales · Politique de confidentialité</div>
        </div>
      </div>
    </footer>
  );
}

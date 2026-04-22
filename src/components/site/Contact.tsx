import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Votre nom est requis").max(100),
  email: z.string().trim().email("Adresse email invalide").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Sujet requis").max(150),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Open user's mail client with prefilled content (no backend wired)
    const body = `Nom: ${res.data.name}%0AEmail: ${res.data.email}%0ATéléphone: ${res.data.phone || "-"}%0A%0A${encodeURIComponent(res.data.message)}`;
    window.location.href = `mailto:contact@avocat-bekale.fr?subject=${encodeURIComponent(res.data.subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-gold font-medium">
              Prenons contact
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-balance">
              Parlons de votre <em className="not-italic text-gold">situation</em>.
            </h2>
            <p className="mt-5 text-cream/75 max-w-md">
              Premier échange confidentiel et sans engagement. Je vous réponds rapidement,
              en personne.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={MapPin} title="Cabinet" lines={["1A Rue Jean Castagno", "30100 Alès, France"]} />
              <ContactRow icon={Phone} title="Téléphone" lines={["06 18 66 60 08"]} href="tel:+33618666008" />
              <ContactRow icon={Clock} title="Horaires" lines={["Lundi – Vendredi", "9h00 – 18h00"]} />
              <ContactRow icon={Mail} title="Email" lines={["contact@avocat-bekale.fr"]} href="mailto:contact@avocat-bekale.fr" />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-3xl bg-cream text-ink p-7 sm:p-10 shadow-[var(--shadow-warm)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Nom complet" error={errors.name} />
              <Field name="email" label="Email" type="email" error={errors.email} />
              <Field name="phone" label="Téléphone (optionnel)" error={errors.phone} />
              <Field name="subject" label="Sujet" error={errors.subject} />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium mb-2">Votre message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                placeholder="Décrivez brièvement votre situation…"
              />
              {errors.message && <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <p className="text-xs text-muted-foreground max-w-sm">
                Vos informations restent strictement confidentielles (secret professionnel).
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium shadow-[var(--shadow-warm)] hover:opacity-95 transition"
              >
                <Send className="h-4 w-4" /> Envoyer ma demande
              </button>
            </div>
            {sent && (
              <p className="mt-4 text-sm text-secondary-foreground bg-secondary/30 rounded-lg px-4 py-3">
                Merci, votre client mail s'est ouvert. Je vous réponds rapidement.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-2xl bg-cream/10 border border-cream/15 grid place-items-center text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-cream/60">{title}</div>
        <div className="mt-1 text-cream leading-snug">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-gold transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
      />
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

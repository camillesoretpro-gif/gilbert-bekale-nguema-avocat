import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Values } from "@/components/site/Values";
import { Practice } from "@/components/site/Practice";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Maître Bekale Nguema · Avocat à Alès — Écoute, disponibilité, défense",
      },
      {
        name: "description",
        content:
          "Maître Gilbert Bekale Nguema, avocat généraliste à Alès (30100). Droit pénal, famille, travail, civil, étrangers. 4,8★ sur Google. 06 18 66 60 08.",
      },
      { property: "og:title", content: "Maître Bekale Nguema · Avocat à Alès" },
      {
        property: "og:description",
        content:
          "Avocat généraliste à Alès — une défense humaine, disponible et rigoureuse. 4,8/5 sur Google.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Practice />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

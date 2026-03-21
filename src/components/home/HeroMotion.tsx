import { siteConfig } from "@/lib/site";

export default function HeroMotion() {
  return (
    <div className="prose-flow">
      <p className="eyebrow">Voltigierverein</p>
      <h1 className="max-w-4xl text-5xl leading-[0.96] md:text-7xl">
        Eleganz auf dem Pferd. Disziplin hinter jeder Bewegung.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-[var(--color-soft-ink)] md:text-xl">
        Wir, der RFV Vorderrhön bieten strukturiertes, pferdegerechtes Training
        fuer Einsteiger und ambitionierte Athletinnen und Athleten, die einen
        eleganten und anspruchsvollen Teamsport suchen.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={siteConfig.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm font-semibold text-[var(--color-cream-strong)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#243827]"
          style={{ color: "var(--color-cream-strong)" }}
        >
          Anmelden / Probetraining
        </a>
        <a
          href="/pricing"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white/60 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-moss)]"
        >
          Preise ansehen
        </a>
      </div>
    </div>
  );
}

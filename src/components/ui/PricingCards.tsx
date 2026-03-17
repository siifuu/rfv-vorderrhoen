import { motion, useReducedMotion } from "framer-motion";

type PricingItem = {
  id: string;
  data: {
    name: string;
    priceLabel: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    ctaLabel?: string;
    ctaUrl?: string;
  };
};

type Props = {
  items: PricingItem[];
};

export default function PricingCards({ items }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.article
          key={item.id}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: index * 0.06 }}
          className={`panel flex h-full flex-col p-6 md:p-8 ${
            item.data.highlighted ? "border-[rgba(47,71,50,0.34)] bg-[rgba(255,251,244,0.95)] shadow-[var(--shadow-strong)]" : ""
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-moss)]">
                {item.data.name}
              </p>
              <p className="mt-3 text-4xl font-semibold leading-none">{item.data.priceLabel}</p>
            </div>
            {item.data.highlighted && (
              <span className="rounded-full bg-[var(--color-forest)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-cream-strong)]">
                Beliebt
              </span>
            )}
          </div>

          <p className="mt-5 text-[var(--color-soft-ink)]">{item.data.description}</p>

          <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--color-soft-ink)]">
            {item.data.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-moss)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={item.data.ctaUrl ?? "/apply"}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm font-semibold text-[var(--color-cream-strong)] transition hover:bg-[#243827]"
            style={{ color: "var(--color-cream-strong)" }}
            target={(item.data.ctaUrl ?? "").startsWith("http") ? "_blank" : undefined}
            rel={(item.data.ctaUrl ?? "").startsWith("http") ? "noreferrer" : undefined}
          >
            {item.data.ctaLabel ?? "Jetzt anfragen"}
          </a>
        </motion.article>
      ))}
    </div>
  );
}

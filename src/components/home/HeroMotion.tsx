import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const rise = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroMotion() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="prose-flow">
        <p className="eyebrow">Equestrian Vaulting Club</p>
        <h1 className="max-w-4xl text-5xl leading-[0.96] md:text-7xl">
          Grace above the horse. Discipline underneath every movement.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-soft-ink)] md:text-xl">
          Rhine Field Vaulters offers structured, horse-first training for beginners and ambitious athletes who want a sport that is elegant, demanding, and deeply collaborative.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={siteConfig.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#243827]"
          >
            Apply / Book Trial
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white/60 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-moss)]"
          >
            See Pricing
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      transition={{ staggerChildren: 0.1 }}
      className="prose-flow"
    >
      <motion.p variants={rise} transition={transition} className="eyebrow">
        Equestrian Vaulting Club
      </motion.p>
      <motion.h1 variants={rise} transition={transition} className="max-w-4xl text-5xl leading-[0.96] md:text-7xl">
        Grace above the horse. Discipline underneath every movement.
      </motion.h1>
      <motion.p
        variants={rise}
        transition={transition}
        className="max-w-2xl text-lg leading-8 text-[var(--color-soft-ink)] md:text-xl"
      >
        Rhine Field Vaulters offers structured, horse-first training for beginners and ambitious athletes who want a sport that is elegant, demanding, and deeply collaborative.
      </motion.p>
      <motion.div variants={rise} transition={transition} className="flex flex-wrap gap-3">
        <a
          href={siteConfig.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#243827]"
        >
          Apply / Book Trial
        </a>
        <a
          href="/pricing"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white/60 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-moss)]"
        >
          See Pricing
        </a>
      </motion.div>
    </motion.div>
  );
}

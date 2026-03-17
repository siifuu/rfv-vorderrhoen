import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

export default function SectionReveal({ children }: PropsWithChildren) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

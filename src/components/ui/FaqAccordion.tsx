import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

type Props = {
  items: Item[];
};

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={item.question} className="panel overflow-hidden">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-semibold md:px-6"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="text-2xl text-[var(--color-moss)]">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={reduceMotion ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { height: 0, opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.24, ease: "easeOut" }}
                >
                  <div className="border-t border-[var(--color-line)] px-5 py-5 text-[var(--color-soft-ink)] md:px-6">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

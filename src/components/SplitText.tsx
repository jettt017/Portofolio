import { useRef } from "react";
import { motion, useInView } from "motion/react";

// ─── Spring config: heavy, physical weight ─────────────────────────────────────
// Slower than the cursor spring intentionally — large type needs gravitas.
const REVEAL_SPRING = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 0.8,
};

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  /** Base delay before the first word starts (seconds). Default: 0 */
  delay?: number;
  /** Delay between each successive word (seconds). Default: 0.06 */
  stagger?: number;
  /** If true, animation fires only the first time the element enters view. Default: true */
  once?: boolean;
  /** IntersectionObserver threshold 0–1. Default: 0.3 */
  threshold?: number;
  /** Element tag to render the outer container as. Default: "span" (inline) */
  as?: "span" | "div";
}

/**
 * SplitText — Awwwards-style mask-clip slide-up text reveal.
 *
 * Each word is clipped inside an overflow-hidden container.
 * The inner span animates from y:"110%" (below the clip floor) to y:"0%",
 * staggered word-by-word using a heavy spring for physical weight.
 *
 * Usage:
 *   <SplitText text="Featured Projects" className="text-5xl font-black ..." />
 */
export default function SplitText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
  once = true,
  threshold = 0.3,
  as: Tag = "span",
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement & HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        // Mask container — clips the sliding word
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            // Small right padding so words don't run together
            paddingRight: i < words.length - 1 ? "0.28em" : undefined,
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            className={wordClassName}
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{
              ...REVEAL_SPRING,
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

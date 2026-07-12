import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// ─── Spring Presets ────────────────────────────────────────────────────────────
// "tracking" — ring follows mouse: snappy and highly responsive
const SPRING_TRACKING = { stiffness: 500, damping: 40, mass: 0.5 };
// "scale"    — ring resize on hover/click: snappy morph
const SPRING_SCALE     = { stiffness: 400, damping: 25 };

export default function MagneticCursor() {
  // ─── Raw mouse motion values (no spring — used by dot directly) ─────────────
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // ─── Ring visual springs (size / scale) ──────────────────────────────────────
  const ringSize   = useSpring(32, SPRING_SCALE);
  const ringScale  = useSpring(1, SPRING_SCALE);

  // ─── Interaction state (primitives only in deps) ─────────────────────────────
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // ─── Touch detection ─────────────────────────────────────────────────────────
  useEffect(() => {
    setIsTouch(
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  // ─── Main event loop ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // 1. Dot always tracks raw mouse — no spring, 1:1
      rawX.set(clientX);
      rawY.set(clientY);

      // 2. Hover check for elements under cursor (buttons, links, active items)
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest("a, button, [role='button'], input[type='submit'], input[type='button']");
        setIsHovered(!!isClickable);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => ringScale.set(0.85);
    const onMouseUp   = () => ringScale.set(1);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup",   onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup",   onMouseUp);
    };
  }, [isTouch]);

  // ─── Sync ring size to hover state ───────────────────────────────────────────
  useEffect(() => {
    if (isHovered) {
      ringSize.set(52);            // expanded hover size
    } else {
      ringSize.set(32);            // default size
    }
  }, [isHovered, ringSize]);

  // ─── Ring position tracking spring ──────────────────────────────────────────
  const trackX = useSpring(rawX, SPRING_TRACKING);
  const trackY = useSpring(rawY, SPRING_TRACKING);

  if (isTouch) return null;

  return (
    <>
      {/* ── Inner Dot: raw motion values, zero spring, 1:1 cursor ──────────── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-[#1A1A1A] w-2 h-2 z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale, // squash on click
        }}
      />

      {/* ── Outer Ring: spring position + spring size (ALWAYS circle: 50% border-radius) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none border-[#2F8DEB] border-[1.5px] z-[9998] mix-blend-difference hidden lg:block"
        style={{
          x: trackX,
          y: trackY,
          translateX: "-50%",
          translateY: "-50%",
          width:        ringSize,
          height:       ringSize,
          borderRadius: "50%",
          scale:        ringScale,
        }}
      />
    </>
  );
}

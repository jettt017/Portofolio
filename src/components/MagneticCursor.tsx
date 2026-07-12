import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// ─── Spring Presets ────────────────────────────────────────────────────────────
// "tracking"     — ring follows mouse: snappy but not instant
const SPRING_TRACKING = { stiffness: 500, damping: 40, mass: 0.5 };
// "magnetic-snap" — ring pulled toward data-magnetic center: elastic/heavy feel
const SPRING_MAGNETIC  = { stiffness: 100, damping: 30, restDelta: 0.001 };
// "scale"        — ring resize on hover/click: snappy morph
const SPRING_SCALE     = { stiffness: 400, damping: 25 };

// Magnetic pull detection radius (px from element edge)
const RADIUS = 75;

export default function MagneticCursor() {
  // ─── Raw mouse motion values (no spring — used by dot directly) ─────────────
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);



  // ─── Ring visual springs (size / radius / scale) ────────────────────────────
  const ringSize   = useSpring(32, SPRING_SCALE);
  const ringRadius = useMotionValue(50); // percent — spring not needed, snap is fine
  const ringScale  = useSpring(1, SPRING_SCALE);

  // ─── Interaction state (primitives only in deps) ─────────────────────────────
  const [hoverType, setHoverType] = useState<"default" | "clickable" | "paper">("default");
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Ref to hold magnetic target center so we can read it inside mousemove without
  // causing the effect to re-subscribe on every state change
  const magneticCenterRef = useRef<{ x: number; y: number } | null>(null);

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

      // 2. Scan for nearest data-magnetic element
      const magnetics = document.querySelectorAll("[data-magnetic]");
      let nearest: Element | null = null;
      let minDist = Infinity;

      magnetics.forEach((el) => {
        const r = el.getBoundingClientRect();
        const dx = Math.max(r.left - clientX, 0, clientX - r.right);
        const dy = Math.max(r.top - clientY, 0, clientY - r.bottom);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RADIUS && dist < minDist) {
          minDist = dist;
          nearest = el;
        }
      });

      if (nearest) {
        const r = (nearest as HTMLElement).getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top  + r.height / 2;
        magneticCenterRef.current = { x: cx, y: cy };

        if (!isMagnetic) {
          // Prevent teleportation: synchronize slow snap springs to the current track spring positions
          slowX.set(trackX.get());
          slowY.set(trackY.get());
          setIsMagnetic(true);
        }

        // Set target positions for the slow magnetic spring
        snapX.set(cx);
        snapY.set(cy);

        // Hover type
        const attr = (nearest as HTMLElement).getAttribute("data-magnetic");
        setHoverType(attr === "paper" || attr === "folder" ? "paper" : "clickable");
      } else {
        magneticCenterRef.current = null;

        if (isMagnetic) {
          // Prevent teleportation: synchronize raw/track springs back to the slow spring current positions
          const currentX = slowX.get();
          const currentY = slowY.get();
          rawX.set(currentX);
          rawY.set(currentY);
          trackX.set(currentX);
          trackY.set(currentY);
          setIsMagnetic(false);
        }

        // Hover type from element under cursor
        const target = e.target as HTMLElement | null;
        if (target) {
          const isClickable = target.closest("a, button, [role='button'], input[type='submit'], input[type='button']");
          setHoverType(isClickable ? "clickable" : "default");
        } else {
          setHoverType("default");
        }
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]); // Only primitive boolean dep — no re-subscribe on every mouse move

  // ─── Sync ring size & shape to hover/magnetic state ─────────────────────────
  useEffect(() => {
    if (isMagnetic) {
      ringSize.set(60);            // ~1.9x — clearly "attracted"
      ringRadius.set(hoverType === "paper" ? 12 : 50); // px value
    } else if (hoverType !== "default") {
      ringSize.set(52);            // expanded hover
      ringRadius.set(hoverType === "paper" ? 12 : 50);
    } else {
      ringSize.set(32);            // default
      ringRadius.set(50);
    }
  }, [hoverType, isMagnetic, ringSize, ringRadius]);

  // ─── Ring position: tracking vs magnetic ────────────────────────────────────
  // When NOT magnetic, ringX/ringY should chase rawX/rawY.
  // When magnetic, we already called ringX.set(center) above in mousemove.
  // The key insight: useSpring(rawX, config) means the spring ALWAYS chases rawX.
  // We cannot swap the spring config at runtime easily, so instead we maintain
  // two separate springs and pick which one drives the ring.
  const trackX = useSpring(rawX, SPRING_TRACKING);
  const trackY = useSpring(rawY, SPRING_TRACKING);
  const snapX  = useMotionValue(-100);
  const snapY  = useMotionValue(-100);
  const slowX  = useSpring(snapX, SPRING_MAGNETIC);
  const slowY  = useSpring(snapY, SPRING_MAGNETIC);

  // Keep snap targets updated when magnetic
  useEffect(() => {
    if (!isTouch) {
      const unsub = rawX.on("change", (v) => {
        if (!magneticCenterRef.current) return; // only update when snapping
        snapX.set(magneticCenterRef.current.x);
        snapY.set(magneticCenterRef.current.y);
      });
      return unsub;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);

  // Derive active ring coordinates
  const activeRingX = isMagnetic ? slowX : trackX;
  const activeRingY = isMagnetic ? slowY : trackY;

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

      {/* ── Outer Ring: spring position + spring size/shape ─────────────────── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none border-[#2F8DEB] border-[1.5px] z-[9998] mix-blend-difference hidden lg:block"
        style={{
          x: activeRingX,
          y: activeRingY,
          translateX: "-50%",
          translateY: "-50%",
          width:        ringSize,
          height:       ringSize,
          borderRadius: ringRadius,
          scale:        ringScale,
        }}
      />
    </>
  );
}

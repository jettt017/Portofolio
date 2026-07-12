import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration for the outer ring/brackets
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorType, setCursorType] = useState<"default" | "hover" | "project">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isProject = target.closest("[data-cursor='project']");
      const isClickable = target.closest(
        "a, button, [role='button'], input[type='submit'], input[type='button'], [data-cursor='hover']"
      );

      if (isProject) {
        setCursorType("project");
      } else if (isClickable) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Check if touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
      );
    };
    checkTouch();
  }, []);

  if (isTouchDevice || !isVisible) return null;

  // Variants for the outer container morphing
  const containerVariants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: "rgba(47, 141, 235, 0)",
      border: "0px solid transparent",
      borderRadius: "0px",
      boxShadow: "0 0 0px rgba(47, 141, 235, 0)",
      x: "-50%",
      y: "-50%",
    },
    hover: {
      width: 46,
      height: 46,
      backgroundColor: "var(--near-black)",
      border: "0px solid transparent",
      borderRadius: "50%",
      boxShadow: "0 0 16px rgba(47, 141, 235, 0.4)",
      x: "-50%",
      y: "-50%",
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "var(--near-black)",
      border: "0px solid transparent",
      borderRadius: "16px",
      boxShadow: "0 0 20px rgba(47, 141, 235, 0.5)",
      x: "-50%",
      y: "-50%",
    },
  };

  // Variants for corner brackets (collapsing inward and fading out)
  const cornerVariants = {
    default: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
    hover: (i: number) => ({
      opacity: 0,
      scale: 0.5,
      x: (i === 0 || i === 2) ? 12 : -12,
      y: (i === 0 || i === 1) ? 12 : -12,
    }),
    project: (i: number) => ({
      opacity: 0,
      scale: 0.5,
      x: (i === 0 || i === 2) ? 20 : -20,
      y: (i === 0 || i === 1) ? 20 : -20,
    }),
  };

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#2F8DEB",
        }}
        animate={{
          scale: cursorType !== "default" ? 0 : 1,
          opacity: cursorType !== "default" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Bracket Container */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          pointerEvents: "none",
          zIndex: 9998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        animate={cursorType}
        variants={containerVariants}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.5 }}
      >
        {/* Render 4 corners of brackets for the default state */}
        <motion.div
          custom={0}
          variants={cornerVariants}
          style={{ position: "absolute", top: 0, left: 0, width: 6, height: 6, borderTop: "1.5px solid #2F8DEB", borderLeft: "1.5px solid #2F8DEB" }}
        />
        <motion.div
          custom={1}
          variants={cornerVariants}
          style={{ position: "absolute", top: 0, right: 0, width: 6, height: 6, borderTop: "1.5px solid #2F8DEB", borderRight: "1.5px solid #2F8DEB" }}
        />
        <motion.div
          custom={2}
          variants={cornerVariants}
          style={{ position: "absolute", bottom: 0, left: 0, width: 6, height: 6, borderBottom: "1.5px solid #2F8DEB", borderLeft: "1.5px solid #2F8DEB" }}
        />
        <motion.div
          custom={3}
          variants={cornerVariants}
          style={{ position: "absolute", bottom: 0, right: 0, width: 6, height: 6, borderBottom: "1.5px solid #2F8DEB", borderRight: "1.5px solid #2F8DEB" }}
        />

        {/* Text for project preview view */}
        {cursorType === "project" && (
          <span className="text-[10px] font-mono font-black tracking-wider text-cream select-none">
            VIEW
          </span>
        )}
      </motion.div>
    </>
  );
}

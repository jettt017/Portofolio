import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration for the outer ring
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
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

      // Detect hover targets: anchors, buttons, inputs, components with role button or custom hover attributes
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

  // Check if touch device to prevent rendering kursor kustom
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

  // Variants for outer ring sizing and blending
  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1.5px solid var(--near-black)",
      x: "-50%",
      y: "-50%",
    },
    hover: {
      width: 50,
      height: 50,
      backgroundColor: "#FFFFFF",
      border: "0px solid transparent",
      mixBlendMode: "difference" as const,
      x: "-50%",
      y: "-50%",
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "#FFFFFF",
      border: "0px solid transparent",
      mixBlendMode: "difference" as const,
      x: "-50%",
      y: "-50%",
    },
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
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "var(--near-black)",
          mixBlendMode: cursorType !== "default" ? "difference" : "normal",
        }}
        animate={{
          scale: cursorType !== "default" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer Ring */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          pointerEvents: "none",
          zIndex: 9998,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        animate={cursorType}
        variants={variants}
        transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.4 }}
      >
        {cursorType === "project" && (
          <span className="text-[10px] font-mono font-black tracking-wider text-black select-none">
            VIEW
          </span>
        )}
      </motion.div>
    </>
  );
}

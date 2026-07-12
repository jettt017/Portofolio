import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // Attraction radius in pixels
  strength?: number; // Pull factor (0.1 to 0.5 is ideal)
  className?: string; // Optional className for positioning
  key?: React.Key; // Allow key for mapped lists
}

export default function Magnetic({ children, range = 60, strength = 0.35, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Translate motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement and return animation
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      // Center position of the element
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Distance from mouse to center
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        setIsHovered(true);
        // Translate proportionally to cursor position
        x.set(deltaX * strength);
        y.set(deltaY * strength);
      } else {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    ref.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [range, strength, x, y]);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ display: className ? undefined : "inline-block" }}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

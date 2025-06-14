import { useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Configuration for easy customization
const CURSOR_CONFIG = {
  size: 40, // Cursor diameter in pixels
  damping: 30, // Spring damping for smooth motion
  stiffness: 400, // Spring stiffness for responsiveness
  scaleNormal: 1, // Default scale
  scaleHover: 1.3, // Scale when hovering interactive elements
};

// Selectors for interactive elements
const INTERACTIVE_SELECTORS = "button, a, [data-clickable], [data-hover]";

const CustomCursor = () => {
  // Motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for smooth position transitions
  const springX = useSpring(cursorX, {
    damping: CURSOR_CONFIG.damping,
    stiffness: CURSOR_CONFIG.stiffness,
  });
  const springY = useSpring(cursorY, {
    damping: CURSOR_CONFIG.damping,
    stiffness: CURSOR_CONFIG.stiffness,
  });

  // Motion values for scale and opacity
  const scale = useMotionValue(CURSOR_CONFIG.scaleNormal);
  const springScale = useSpring(scale, { damping: 20, stiffness: 250 });
  const opacity = useMotionValue(1);

  // Handle cursor movement
  const moveCursor = useCallback((e) => {
    const { clientX, clientY } = e;
    cursorX.set(clientX - CURSOR_CONFIG.size / 2);
    cursorY.set(clientY - CURSOR_CONFIG.size / 2);

    // Check if the target is an interactive element
    const target = e.target;
    const isInteractive = target.closest(INTERACTIVE_SELECTORS);

    // Adjust scale based on interaction
    scale.set(isInteractive ? CURSOR_CONFIG.scaleHover : CURSOR_CONFIG.scaleNormal);
  }, [cursorX, cursorY, scale]);

  // Handle cursor visibility
  const hideCursor = useCallback(() => opacity.set(0), [opacity]);
  const showCursor = useCallback(() => opacity.set(1), [opacity]);

  // Set up event listeners
  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
    };
  }, [moveCursor, hideCursor, showCursor]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        opacity,
        width: `${CURSOR_CONFIG.size}px`,
        height: `${CURSOR_CONFIG.size}px`,
      }}
      // Prevent dragging issues
      drag={false}
      // Accessibility: ensure cursor doesn't interfere with screen readers
      aria-hidden="true"
    >
      {/* Outer aura ring with gradient effect */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-xl animate-pulse" />

      {/* Inner solid dot for cursor precision */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg" />
    </motion.div>
  );
};

export default CustomCursor;
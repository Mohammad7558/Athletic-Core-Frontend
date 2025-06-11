import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 30, stiffness: 400 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400 });

  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { damping: 20, stiffness: 250 });
  const opacity = useMotionValue(1);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);

      const target = e.target;
      const isClickable = target.closest("button, a, [data-clickable]");
      const isInteractive = target.closest("[data-hover], :hover");

      if (isClickable || isInteractive) {
        scale.set(1.3);
      } else {
        scale.set(1);
      }
    };

    const hide = () => opacity.set(0);
    const show = () => opacity.set(1);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
    };
  }, [cursorX, cursorY, scale, opacity]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        opacity,
      }}
    >
      {/* Outer aura ring */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-xl animate-pulse" />

      {/* Inner solid dot */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg" />
    </motion.div>
  );
};

export default CustomCursor;

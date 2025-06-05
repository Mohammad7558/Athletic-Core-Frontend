import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      const target = e.target;

      // টেক্সট এলিমেন্ট ধরার জন্য
      const isText = window.getComputedStyle(target).getPropertyValue("cursor") === "text" ||
                     target.tagName === "P" ||
                     target.tagName === "SPAN" ||
                     target.tagName === "LABEL" ||
                     target.tagName === "INPUT" ||
                     target.tagName === "TEXTAREA" ||
                     target.isContentEditable;

      // ইন্টার‍্যাক্টিভ এলিমেন্ট
      const isHover = target.closest("button, a, .cursor-hover, nav, .menu, select, textarea, input");

      if (isText) {
        setVariant("text");
      } else if (isHover) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      width: 16,
      height: 16,
      borderRadius: "999px",
      backgroundColor: "rgba(0,0,0,0.1)",
      border: "1px solid rgba(0,0,0,0.25)",
    },
    hover: {
      x: position.x - 14,
      y: position.y - 14,
      width: 28,
      height: 28,
      borderRadius: "999px",
      backgroundColor: "rgba(0,0,0,0.1)",
      border: "2px solid rgba(0,0,0,0.3)",
    },
    text: {
      x: position.x,
      y: position.y - 16,
      width: 2,
      height: 32,
      borderRadius: "0px",
      backgroundColor: "rgba(0,0,0,0.9)",
      border: "none",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={variant}
      variants={variants}
      transition={{ type: "tween", duration: 0.05 }}
    />
  );
};

export default CustomCursor;

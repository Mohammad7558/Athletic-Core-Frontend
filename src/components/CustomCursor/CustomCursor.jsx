// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// const CustomCursor = ({
//   primaryColor = "#3b82f6",
//   textColor = "#1e40af",
//   accentColor = "#7c3aed",
//   textCursorWidth = 2,
//   textCursorMaxHeight = 36
// }) => {
//   const [cursorType, setCursorType] = useState("default");
//   const [isActive, setIsActive] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
  
//   // Smooth cursor positioning
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);
//   const smoothX = useSpring(cursorX, { damping: 25, stiffness: 500 });
//   const smoothY = useSpring(cursorY, { damping: 25, stiffness: 500 });

//   // Cursor effects
//   const scale = useMotionValue(1);
//   const smoothScale = useSpring(scale, { damping: 15, stiffness: 400 });
//   const opacity = useMotionValue(0);
//   const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 300 });
  
//   // Text cursor specific animations
//   const textHeight = useMotionValue(textCursorMaxHeight / 2);
//   const smoothTextHeight = useSpring(textHeight, { damping: 15, stiffness: 300 });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//       opacity.set(1);
//       setIsActive(true);
      
//       const target = e.target;
      
//       // First check for elements that should NEVER show text cursor
//       const isMenu = target.closest("nav, .menu, .navbar, [data-cursor='menu']");
//       const isClickable = 
//         target.closest("button, a, [data-cursor='click'], .cursor-click") ||
//         target.tagName === "BUTTON" || 
//         target.tagName === "A";
      
//       const isInteractive = 
//         target.closest("[data-cursor='hover'], .cursor-hover, select") ||
//         isClickable;
      
//       // Then check for text elements (only if not in menu)
//       const isInputField = target.closest("input, textarea, [contenteditable]");
//       const isText = !isMenu && 
//         (target.closest("p, h1, h2, h3, h4, h5, h6, span, label, li, blockquote, pre, code, td, th") ||
//         target.isContentEditable);

//       if (isMenu) {
//         setCursorType("default");
//         setIsTyping(false);
//         scale.set(1);
//       }
//       else if (isInputField) {
//         setCursorType("text");
//         setIsTyping(true);
//         const fontSize = window.getComputedStyle(target).fontSize;
//         const lineHeight = parseInt(fontSize) * 1.5;
//         textHeight.set(Math.min(lineHeight, textCursorMaxHeight));
//       }
//       else if (isText) {
//         setCursorType("text");
//         setIsTyping(false);
//         const fontSize = window.getComputedStyle(target).fontSize;
//         const lineHeight = parseInt(fontSize) * 1.5;
//         textHeight.set(Math.min(lineHeight, textCursorMaxHeight));
//       }
//       else if (isClickable) {
//         setCursorType("clickable");
//         setIsTyping(false);
//         scale.set(0.8);
//       } 
//       else if (isInteractive) {
//         setCursorType("hover");
//         setIsTyping(false);
//         scale.set(1.5);
//       } 
//       else {
//         setCursorType("default");
//         setIsTyping(false);
//         scale.set(1);
//       }
//     };

//     // ... rest of your effect code remains the same ...
//     const handleMouseDown = () => {
//       setClicked(true);
//       if (cursorType === "text") {
//         scale.set(0.9);
//       }
//     };
    
//     const handleMouseUp = () => {
//       setClicked(false);
//       if (cursorType === "text") {
//         scale.set(1);
//       }
//     };
    
//     const hideCursor = () => {
//       opacity.set(0);
//       setIsActive(false);
//     };
    
//     const showCursor = () => opacity.set(1);

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);
//     window.addEventListener("mouseleave", hideCursor);
//     window.addEventListener("mouseenter", showCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("mouseleave", hideCursor);
//       window.removeEventListener("mouseenter", showCursor);
//     };
//   }, [cursorX, cursorY, opacity, scale, textHeight, cursorType, textCursorMaxHeight]);

//   // ... rest of your component remains the same ...
//   return (
//     <AnimatePresence>
//       {isActive && (
//         <motion.div
//           className="fixed top-0 left-0 z-[9999] pointer-events-none"
//           style={{
//             x: smoothX,
//             y: smoothY,
//             scale: smoothScale,
//             opacity: smoothOpacity,
//           }}
//         >
//           {/* Text cursor */}
//           {(cursorType === "text") && (
//             <motion.div
//               className="absolute rounded-sm"
//               style={{
//                 width: textCursorWidth,
//                 height: smoothTextHeight,
//                 x: -textCursorWidth/2,
//                 y: -smoothTextHeight/2,
//                 backgroundColor: textColor,
//               }}
//               animate={{
//                 opacity: isTyping ? [1, 0.3, 1] : 1,
//               }}
//               transition={
//                 isTyping ? {
//                   repeat: Infinity,
//                   duration: 0.8,
//                   ease: "easeInOut",
//                 } : {}
//               }
//             />
//           )}

//           {/* Main cursor ring */}
//           {(cursorType !== "text") && (
//             <>
//               <motion.div
//                 className="absolute rounded-full border-2 shadow-lg mix-blend-difference"
//                 style={{
//                   width: 22,
//                   height: 22,
//                   x: -11,
//                   y: -11,
//                   scale: clicked ? 0.7 : 1,
//                   borderColor: primaryColor,
//                   backgroundColor: "rgba(255, 255, 255, 0)",
//                 }}
//                 animate={{
//                   backgroundColor: cursorType === "hover" ? `${primaryColor}20` : "rgba(255, 255, 255, 0)",
//                   borderColor: cursorType === "clickable" ? accentColor : primaryColor,
//                 }}
//                 transition={{
//                   type: "spring",
//                   damping: 15,
//                   stiffness: 400,
//                 }}
//               />

//               {/* Center dot */}
//               <motion.div
//                 className="absolute rounded-full mix-blend-difference"
//                 style={{
//                   width: 4,
//                   height: 4,
//                   x: -2,
//                   y: -2,
//                   backgroundColor: primaryColor,
//                 }}
//                 animate={{
//                   scale: cursorType === "hover" ? 1.3 : 1,
//                   backgroundColor: cursorType === "clickable" ? accentColor : primaryColor,
//                 }}
//                 transition={{
//                   type: "spring",
//                   damping: 15,
//                   stiffness: 400,
//                 }}
//               />
//             </>
//           )}

//           {/* Hover effect */}
//           {(cursorType === "hover") && (
//             <motion.div
//               className="absolute rounded-full mix-blend-difference"
//               style={{
//                 width: 36,
//                 height: 36,
//                 x: -18,
//                 y: -18,
//                 backgroundColor: `${primaryColor}10`,
//               }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ 
//                 opacity: 1, 
//                 scale: 1,
//                 transition: {
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   duration: 1.5
//                 }
//               }}
//               exit={{ opacity: 0 }}
//             />
//           )}

//           {/* Click effect */}
//           {clicked && (cursorType !== "text") && (
//             <motion.div
//               className="absolute rounded-full mix-blend-difference"
//               style={{
//                 width: 20,
//                 height: 20,
//                 x: -10,
//                 y: -10,
//                 backgroundColor: `${accentColor}30`,
//                 border: `1px solid ${accentColor}`
//               }}
//               initial={{ scale: 0.5, opacity: 1 }}
//               animate={{ scale: 2, opacity: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             />
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default CustomCursor;
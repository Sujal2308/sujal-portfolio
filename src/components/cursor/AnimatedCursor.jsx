import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-violet-600 via-amber-500 to-violet-600 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 28,
        mass: 0.5
      }}
    />
  );
};

export default AnimatedCursor;
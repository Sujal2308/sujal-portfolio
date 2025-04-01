import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ShinyText = ({
  text,
  subtitle,  // Add subtitle prop
  gradientColors = "linear-gradient(90deg, #000, #fff, #000)",
  gradientAnimationDuration = 1,
  hoverEffect = false,
  className = "",
  textClassName = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  const textVariants = {
    initial: {
      backgroundPosition: "0 0",
      opacity: 0,
      y: 50
    },
    animate: {
      backgroundPosition: "100% 0",
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        backgroundPosition: {
          duration: gradientAnimationDuration,
          repeat: Infinity,
          repeatType: "reverse",
        }
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-center py-8 ${className}`}
      {...props}
    >
      <motion.h1
        className={`text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] leading-normal ${textClassName}`}
        style={{
          background: gradientColors,
          backgroundSize: "300% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: isHovered 
            ? "0 0 20px rgba(251,191,36,0.5), 0 0 40px rgba(236,72,153,0.3)" 
            : "0 0 10px rgba(139,92,246,0.2)",
          filter: "brightness(1.2)",
        }}
        variants={textVariants}
        initial="initial"
        animate={controls}
        onHoverStart={() => hoverEffect && setIsHovered(true)}
        onHoverEnd={() => hoverEffect && setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
      >
        {text}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mt-4 text-center max-w-2xl font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.2, duration: 0.5 }
            }
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default ShinyText;

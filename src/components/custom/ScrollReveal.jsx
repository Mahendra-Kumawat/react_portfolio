import { motion } from "framer-motion";

export function ScrollReveal({
  children,
  className,
  as = "div",
  delay = 0,
  duration = 0.8,
  y = 24,
  x = 0,
  amount = 0.25,
  once = false,
}) {
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      viewport={{ once, amount }}
    >
      {children}
    </MotionComponent>
  );
}

import { motion, useReducedMotion } from "framer-motion";

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  y = 28,
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

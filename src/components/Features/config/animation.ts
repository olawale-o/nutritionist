import { Variants } from "framer-motion";

export const animation: Record<string, Variants> = {
  odd: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  even: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  },
};

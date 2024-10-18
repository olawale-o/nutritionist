const animation = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  odd: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    description: {
      hidden: { x: 20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 1,
        },
      },
    },
  },
  even: {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    description: {
      hidden: { x: -20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 1,
        },
      },
    },
  },
};

export { animation };

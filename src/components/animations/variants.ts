import type { Transition, Variants } from 'framer-motion';

/** Shared easing — calm, corporate */
export const motionEaseOut: Transition['ease'] = [0.16, 1, 0.3, 1];

export const motionDuration = {
  fast: 0.45,
  base: 0.55,
  section: 0.65,
  slow: 0.75,
} as const;

const easeOutTransition = (duration: number, delay = 0): Transition => ({
  duration,
  delay,
  ease: motionEaseOut,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutTransition(motionDuration.section),
  },
};

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutTransition(motionDuration.base),
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOutTransition(motionDuration.section),
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOutTransition(motionDuration.section),
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easeOutTransition(motionDuration.slow),
  },
};

/** Horizontal line reveal (transform-only) */
export const lineReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0.35 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: easeOutTransition(motionDuration.slow),
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerContainerReduced: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutTransition(motionDuration.base),
  },
};

export const staggerItemReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

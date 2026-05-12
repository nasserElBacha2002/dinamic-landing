import type { CSSProperties, ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

export type MotionSectionProps = Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'viewport' | 'transition'> & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function MotionSection({ children, className, style, ...rest }: MotionSectionProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduced ? 0.15 : motionDuration.section,
        ease: motionEaseOut,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

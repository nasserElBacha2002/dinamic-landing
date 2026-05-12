import type { CSSProperties, ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

const OFFSET = 22;

export type MotionFadeInProps = Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileInView' | 'transition'> & {
  children: ReactNode;
  /** Extra delay in seconds */
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  style?: CSSProperties;
  /** `mount`: animate on first paint. `view`: when scrolled into view (once). */
  trigger?: 'mount' | 'view';
};

function hiddenFor(direction: MotionFadeInProps['direction'], reduced: boolean) {
  if (reduced) return { opacity: 0 };
  switch (direction) {
    case 'down':
      return { opacity: 0, y: -OFFSET };
    case 'left':
      return { opacity: 0, x: OFFSET };
    case 'right':
      return { opacity: 0, x: -OFFSET };
    case 'none':
      return { opacity: 0 };
    case 'up':
    default:
      return { opacity: 0, y: OFFSET };
  }
}

function visibleFor(reduced: boolean) {
  if (reduced) return { opacity: 1, x: 0, y: 0 };
  return { opacity: 1, x: 0, y: 0 };
}

export function MotionFadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = motionDuration.base,
  className,
  style,
  trigger = 'view',
  ...rest
}: MotionFadeInProps) {
  const reduced = usePrefersReducedMotion();
  const d = reduced ? Math.min(duration, 0.22) : duration;
  const transition = { duration: d, delay: reduced ? 0 : delay, ease: motionEaseOut };

  const hidden = hiddenFor(direction, reduced);
  const visible = visibleFor(reduced);

  if (trigger === 'mount') {
    return (
      <motion.div
        className={className}
        style={style}
        initial={hidden}
        animate={visible}
        transition={transition}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

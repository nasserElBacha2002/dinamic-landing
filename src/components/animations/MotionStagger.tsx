import { Children, isValidElement, type CSSProperties, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

export type MotionStaggerProps = Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'whileInView'> & {
  children: ReactNode;
  /** Delay between each child in seconds */
  staggerDelay?: number;
  /** Added to every child’s delay (e.g. let another block animate first) */
  baseDelay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Wraps each direct child in a motion layer with staggered delays.
 * Works inside Mantine `SimpleGrid` / `Grid` because each child remains a grid item.
 */
export function MotionStagger({
  children,
  staggerDelay = 0.09,
  baseDelay = 0,
  className,
  style,
  ...rest
}: MotionStaggerProps) {
  const reduced = usePrefersReducedMotion();
  const step = reduced ? 0.02 : staggerDelay;

  return Children.map(children, (child, index) => {
        const key = isValidElement(child) && child.key != null ? child.key : `stagger-${index}`;
        return (
          <motion.div
            key={key}
            className={className}
            style={style}
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: reduced ? 0.15 : motionDuration.base,
              delay: baseDelay + index * step,
              ease: motionEaseOut,
            }}
            {...rest}
          >
            {child}
          </motion.div>
        );
      }) as unknown as import('react').ReactNode;
}

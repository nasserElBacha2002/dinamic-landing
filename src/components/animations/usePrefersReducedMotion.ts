import { useReducedMotion } from '@mantine/hooks';
import { useEffect, useState } from 'react';

/**
 * True when the user prefers reduced motion.
 * Returns false during SSR and the first client render to avoid hydration mismatches.
 */
export function usePrefersReducedMotion(): boolean {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  if (!ready) return false;
  return reduced ?? false;
}

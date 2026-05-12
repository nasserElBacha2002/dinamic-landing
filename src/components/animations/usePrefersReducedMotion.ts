import { useReducedMotion } from '@mantine/hooks';

/** True when the user prefers reduced motion (OS / browser setting). */
export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}

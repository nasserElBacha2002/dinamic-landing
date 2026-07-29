import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

/**
 * Scrolls to hash targets after client navigation (e.g. /#contacto from interior pages).
 * No-ops during SSR. Respects prefers-reduced-motion.
 */
export function ScrollToHash() {
  const location = useLocation();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const id = decodeURIComponent(location.hash.replace(/^#/, ''));
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }, [location.pathname, location.hash, location.key, reduced]);

  return null;
}

/**
 * In-memory sliding-window rate limiter for single-instance Node deploys.
 *
 * Limitations (document in release notes):
 * - Not shared across multiple processes/instances.
 * - Resets on process restart.
 * - Relies on `trust proxy` when behind a reverse proxy.
 */
export type RateLimitResult = {
  allowed: boolean;
  retryAfterSec?: number;
  remaining: number;
};

type Bucket = {
  timestamps: number[];
};

const store = new Map<string, Bucket>();

const DEFAULT_MAX_KEYS = 5_000;

function pruneStore(now: number, windowMs: number, maxKeys: number): void {
  for (const [key, bucket] of store) {
    bucket.timestamps = bucket.timestamps.filter((t) => now - t < windowMs);
    if (bucket.timestamps.length === 0) store.delete(key);
  }
  if (store.size <= maxKeys) return;
  const overflow = store.size - maxKeys;
  const keys = store.keys();
  for (let i = 0; i < overflow; i += 1) {
    const next = keys.next();
    if (next.done) break;
    store.delete(next.value);
  }
}

export function createRateLimiter(options: {
  limit: number;
  windowMs: number;
  maxKeys?: number;
}) {
  const { limit, windowMs, maxKeys = DEFAULT_MAX_KEYS } = options;

  return function checkRateLimit(key: string): RateLimitResult {
    const now = Date.now();
    if (store.size > maxKeys * 0.9) pruneStore(now, windowMs, maxKeys);

    let bucket = store.get(key);
    if (!bucket) {
      bucket = { timestamps: [] };
      store.set(key, bucket);
    }

    bucket.timestamps = bucket.timestamps.filter((t) => now - t < windowMs);

    if (bucket.timestamps.length >= limit) {
      const oldest = bucket.timestamps[0] ?? now;
      const retryAfterSec = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
      return { allowed: false, retryAfterSec, remaining: 0 };
    }

    bucket.timestamps.push(now);
    return { allowed: true, remaining: Math.max(0, limit - bucket.timestamps.length) };
  };
}

/** Test helper — clears all buckets. */
export function resetRateLimitStoreForTests(): void {
  store.clear();
}

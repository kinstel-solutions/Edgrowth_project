type RateLimitStore = {
  [key: string]: {
    count: number;
    resetTime: number;
  };
};

const store: RateLimitStore = {};

/**
 * Simple in-memory rate limiter for Server Actions.
 * Note: In a serverless environment like Vercel, this will be reset on cold starts.
 * For more robust limiting, consider using Upstash Redis.
 */
export async function rateLimit(key: string, limit: number = 3, duration: number = 600000) {
  const now = Date.now();
  const entry = store[key];

  if (!entry || now > entry.resetTime) {
    store[key] = {
      count: 1,
      resetTime: now + duration,
    };
    return { success: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0 };
  }

  entry.count += 1;
  return { success: true, remaining: limit - entry.count };
}

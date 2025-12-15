/**
 * https://www.youtube.com/test             -> true
 * http://localhost:5173/page               -> false
 * http://subdomain.localhost:5173/page     -> false
 * /page                                    -> false
 * @param url input url
 * @param domain current domain
 * @returns boolean
 */
export function isExternalLink(url: string, domain: string): boolean {
  try {
    const link = new URL(url);
    return link.hostname !== domain && !link.hostname.endsWith(`.${domain}`);
  } catch (error) {
    return false;
  }
}

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

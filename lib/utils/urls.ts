import { APP_CONFIG } from "@/config";

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
  if (APP_CONFIG.VERCEL_URL) return `https://${APP_CONFIG.VERCEL_URL}`; // SSR should use vercel url
  if (typeof window !== "undefined") return ""; // browser should use relative url
  return `http://localhost:${APP_CONFIG.PORT ?? 3000}`; // dev SSR should use localhost
};

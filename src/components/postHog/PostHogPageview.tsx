"use client";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (typeof window !== "undefined") {
  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: false,
    autocapture: false,
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }
      posthog.capture("$pageView", { $current_url: url });
    }
  }, [pathname, searchParams]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

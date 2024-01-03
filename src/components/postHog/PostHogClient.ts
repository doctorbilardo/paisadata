import { PostHog } from "posthog-node";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export default function PostHogClient() {
  const postHogClient = new PostHog(KEY, {
    host: HOST,
  });
  return postHogClient;
}

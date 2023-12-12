
declare global {
  interface Window {
    analytics: {
      track: any;
    };
  }
}
export const segmentTrack = (name: string, data?: object) =>
  "analytics" in window && window.analytics
    ? window.analytics.track(name, data)
    : null;

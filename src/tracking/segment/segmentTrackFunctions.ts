declare global {
  interface Window {
    analytics: {
      track: any;
      identify: any;
    };
  }
}
export const segmentTrack = (name: string, data?: object) =>
  "analytics" in window && window.analytics
    ? window.analytics.track(name, data)
    : null;

export const segmentUserIdentify = (user: string, data?: object) =>
  "analytics" in window && window.analytics
    ? window.analytics.identify(user, data)
    : null;

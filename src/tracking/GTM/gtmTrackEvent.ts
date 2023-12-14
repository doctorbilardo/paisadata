export const gtmTrackEvent = (eventName: string, data?: object) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventName, data);
};

import posthog from "posthog-js";

type FeatureType = string | '';

type Properties = {
  [key: string]: string | number | boolean ;
};

export const trackPostHogClientEvents = (
  event: string,
  properties?: Properties,
  feature?: FeatureType,
  
) => {
  if (posthog) {
    posthog?.capture(event, { ...properties, feature });
  }
};

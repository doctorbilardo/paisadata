import { useCallback } from "react";
import { segmentUserIdentify } from "../segmentTrackFunctions";
import { EventProps, SegmentEvents } from "@/typings";

/**
 * @method useSegmentIdentifyUser is a custom hook that provides the function to track "identify user" segment event
 * @return a function to track "identify_user".
 * 
 * Depending on your templating language, your actual identify call might look something like this:

    analytics.identify(' {{user.id}} ', {
        name: '{{user.fullname}}',
        email: '{{user.email}}'
    });
 * 
 */
const useSegmentIdentifyUser = () => {
  const identifySegmentEvent = useCallback(() => {
    const identifyEvent: EventProps = {
      name: "German",
      email: "g.derbes@paisanos.io",
    };
    return segmentUserIdentify(SegmentEvents?.identifyUser, identifyEvent);
  }, []);

  return identifySegmentEvent;
};

export default useSegmentIdentifyUser;

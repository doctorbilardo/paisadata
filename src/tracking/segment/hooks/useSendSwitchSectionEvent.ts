import { useCallback } from "react";
import { segmentTrack } from "../segmentTrackFunctions";
import packageJson from "../../../../package.json";
import { SegmentEventProps, SegmentEvents } from "@/typings";

type sendSwitchSectionEventFunction = (pathname: string) => void;

/**
 * @method useSendSwitchSectionEvent is a custom hook that provides the function to track "switch_section" segment event
 * This would be a factory of functions or hooks. Maybe a factory could be set up for events of a certain flow of an app.
 *
 * Here’s what a call to track call might look like when a user signs up:

  analytics.track('Signed Up', {
   plan: 'Enterprise'
  });

  OR

  analytics.track('Article Bookmarked', {
    title: 'Snow Fall',
    subtitle: 'The Avalanche at Tunnel Creek',
    author: 'John Branch'
  });

 * @return a function to track "switch_section".
 */
const useSendSwitchSectionEvent = (): sendSwitchSectionEventFunction => {
  const sendSwitchSectionEvent = useCallback((pathname: string) => {
    const switchSectionEvent: SegmentEventProps = {
      version: packageJson?.version,
      name: packageJson?.name,
      to: pathname,
    };
    return segmentTrack(SegmentEvents?.switchSection, switchSectionEvent);
  }, []);

  return sendSwitchSectionEvent;
};

export default useSendSwitchSectionEvent;

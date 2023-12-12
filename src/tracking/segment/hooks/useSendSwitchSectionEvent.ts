import { useCallback } from "react";
import { segmentTrack } from "../segmentTrack";
import packageJson from "../../../../package.json";
import { SegmentEventProps, SegmentEvents } from "@/typings";

type sendSwitchSectionEventFunction = (pathname: string) => void;

/**
 * @method useSendSwitchSectionEvent is a custom hook that provides the function to track "switch_section" segment event
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

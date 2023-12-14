import { useCallback } from "react";
import { gtmTrackEvent } from "../gtmTrackEvent";
import { EventProps, GtmEvents } from "@/typings";

const useSendGTMEvents = () => {
  const sendGtmUserEvent = useCallback((name: string, email: string) => {
    const gtmUserEvent: EventProps = {
      name,
      email,
    };
    return gtmTrackEvent(GtmEvents.gtmUserData, gtmUserEvent);
  }, []);

  const sendNameSectionEvent = useCallback((path: string) => {
    const gtmUserEvent: EventProps = {
      path,
      section: `
      La seccion en la que te encontrás es: ${path}
      `,
    };
    return gtmTrackEvent(GtmEvents.gtmNameOfTheSection, gtmUserEvent);
  }, []);

  return { sendGtmUserEvent, sendNameSectionEvent };
};

export default useSendGTMEvents;

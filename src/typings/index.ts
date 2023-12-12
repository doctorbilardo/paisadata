export enum SegmentEvents {
  switchSection = "switch_section",
  identifyUser = "identify_user_german",
}

export interface SegmentEventProps {
  [key: string]: string | number;
}

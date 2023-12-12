export enum SegmentEvents {
  switchSection = "switch_section",
}

export interface SegmentEventProps {
  [key: string]: string | number;
}

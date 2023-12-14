export enum SegmentEvents {
  switchSection = "switch_section",
  identifyUser = "identify_user_german",
}

export enum GtmEvents {
  gtmUserData = "gtm_user_data",
  gtmNameOfTheSection = "name_of_the_section"
}

export interface EventProps {
  [key: string]: string | number;
}

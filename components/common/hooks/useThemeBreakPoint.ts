import { SystemContext } from "@molitio/ui-core";
import React from "react";

export const useThemeBreakPoint = <T>(theme: T) => {
  if (keyesof theme) {
  
}
  /* (max-width: ${(props) => props?.theme?.breakpoints?.values?.lg}${(
      props
    ) => props?.theme?.breakpoints?.unit}) */
  return "max-width: 768px";
};
export const useThemeBreakPoint = <T extends { breakpoints?: Record<string, unknown> }>(theme: T) => {
  if (!theme.breakpoints) {
    throw new Error('The theme object does not have a `breakpoints` key.');
  }

  // Use a type guard to narrow down the type of `theme.breakpoints`
  const hasBreakpoints = (obj: unknown): obj is Record<string, unknown> =>
    typeof obj === 'object' && obj !== null && 'keys' in obj;

  if (!hasBreakpoints(theme.breakpoints)) {
    throw new Error('The `breakpoints` key in the theme object is not of the expected type.');
  }

  // Use a conditional type to extract the keys of `theme.breakpoints` as an array of strings
  type BreakpointKeys = Extract<keyof T['breakpoints'], string[]>;

  // Perform a switch operation on the keys of `theme.breakpoints`
  switch (theme.breakpoints as Record<BreakpointKeys, unknown>) {
    case 'sm':
      // Do something for breakpoint 'sm'
      break;
    case 'md':
      // Do something for breakpoint 'md'
      break;
    // Add more cases as needed
    default:
      // Do something for unknown breakpoints
      break;
  }

  // Return the theme object or any other value as needed
  return theme;
};

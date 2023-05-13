/**
 * Given a theme object containing breakpoints, this function returns the corresponding media query value
 * for a given key.
 *
 * @param theme - The theme object containing breakpoints
 * @param key - The key to find the media query value for
 * @returns The media query value corresponding to the given key
 */
export const resolveThemeBreakPointValues = <
  T extends { breakpoints: { values: Record<string, unknown>; unit: string } }
>(
  theme: T,
  key: string
): string => {
  if (!theme.breakpoints) {
    throw new Error("The theme object does not have a `breakpoints` key.");
  }

  // Use a type guard to narrow down the type of `theme.breakpoints`
  const hasBreakpoints = (
    obj: unknown
  ): obj is { values: Record<string, unknown>; unit: string } =>
    typeof obj === "object" && obj !== null && "values" in obj && "unit" in obj;

  if (!hasBreakpoints(theme.breakpoints)) {
    throw new Error(
      "The `breakpoints` key in the theme object is not of the expected type."
    );
  }

  const { values, unit } = theme.breakpoints;

  // Look for the key in the breakpoints object and return its corresponding value
  if (key in values) {
    const value = `${values[key]}${unit}`;
    return value;
    /* return `${values[key]}${unit}`; */
  } else {
    throw new Error(
      `Could not find a matching breakpoint value for key: ${key}`
    );
  }
};

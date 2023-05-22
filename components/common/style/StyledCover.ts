import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledCoverContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10em 0 0 0;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    padding: 8em 0 0 0;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    padding: 6em 0 0 0;
  }
`;

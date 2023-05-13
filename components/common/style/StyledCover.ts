import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledCoverContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 10em;
  position: absolute;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    //top: 6em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    top: 8em;
  }
`;

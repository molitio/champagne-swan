import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    flex-direction: column;
    text-align: center;
  }
`;

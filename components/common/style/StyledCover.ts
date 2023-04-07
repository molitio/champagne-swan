import styled from "styled-components";

export const StyledCoverContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 10em;
  position: absolute;
  @media (max-width: 1440px) {
    //top: 6em;
  }
  @media (max-width: 665px) {
    top: 8em;
  }
`;

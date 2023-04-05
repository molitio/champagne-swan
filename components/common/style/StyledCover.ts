import styled from "styled-components";

export const StyledCoverContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 12em;
  position: absolute;
  @media (max-width: 1000px) {
    top: 12em;
  }
  @media (max-width: 665px) {
    top: 8em;
  }
`;

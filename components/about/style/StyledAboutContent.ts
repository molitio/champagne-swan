import styled from "styled-components";

export const StyledAboutContent = styled.section`
  padding-top: 5em;
  position: relative;
  background: ${(props) => props?.theme?.palette?.background?.default ?? ""};
`;

export const StyledBrandMessageContainer = styled.div`
  position: relative;
`;

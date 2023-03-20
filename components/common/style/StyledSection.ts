import styled from "styled-components";

export const StyledSegmentSection = styled.section`
  min-height: ${(props) => props?.theme?.dimensions?.page?.height ?? "100vh"};

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: relative;
`;

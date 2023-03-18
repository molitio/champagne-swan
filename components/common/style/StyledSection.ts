import styled from "styled-components";

export const StyledSegmentSection = styled.section`
  min-height: ${(props) => props?.theme?.dimensions?.page?.height ?? "100vh"};
  position: relative;
`;

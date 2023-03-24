import styled from "styled-components";

export const StyledCoverImage = styled.div`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cleaners.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props) => props?.theme?.dimensions?.page?.height ?? "100vh"};

  @media (max-width: 665px) {
    height: 900px;
  }
`;

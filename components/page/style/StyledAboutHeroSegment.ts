import styled from "styled-components";
import Image from "next/image";

export const StyledAboutImg = styled.div`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cleaners.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1150px;

  @media (max-width: 665px) {
    height: 900px;
  }
`;

export const StyledNextImage = styled(Image)`
  position: absolute;
  object-fit: cover;
`;

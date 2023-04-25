import styled from "styled-components";
import Link from "next/link";

export const StyledServicesIconContainer = styled.div`
  position: relative;
  padding-top: 12em;
  @media (max-width: 975px) {
    padding-top: 8em;
  }
`;

type StyledServicesContentContainerProps = {
  reversed?: boolean;
};

export const StyledServicesContentContainer = styled.div<StyledServicesContentContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props?.reversed ? "row-reverse" : "row")};

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const StyledContentBox = styled.div`
  margin: 3em;
  width: 40em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  @media (max-width: 1440px) {
    padding-top: 6em;
  }
`;

export const StyledContactLink = styled(Link)`
  font-size: 20px;
  color: ${(props) => props?.theme?.palette?.text?.interactive ?? ""};
  text-decoration: underline;
  @media (max-width: 975px) {
    position: relative;
    top: 30px;
    left: 30px;
  }
`;

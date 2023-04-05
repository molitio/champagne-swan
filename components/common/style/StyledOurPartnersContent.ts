import styled from "styled-components";

export const StyledPartners = styled.section`
  padding-top: 5em;
  position: relative;
`;

export const StyledPartnersTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  font-weight: 400;
  font-size: 105px;
  margin-top: 0em;
  margin-bottom: 1em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
  @media (max-width: 665px) {
    font-size: 40px;
  }
`;

export const StyledPartnersContentContainer = styled.div`
  margin-top: 180px;
  margin-bottom: 140px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 395px) {
  }
`;

export const StyledPartnersImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 40px;

  flex: 25%;

  @media (max-width: 1440px) {
    flex: 50%;
  }

  @media (max-width: 665px) {
    flex: 50%;
    /* s */
  }
`;

export const PartnerImg = styled.img`
  height: 130px;
  width: 130px;

  @media (max-width: 665px) {
    height: 90px;
    width: 90px;
  }
`;

export const HouseLogo = styled.img`
  height: 130px;
  width: 190px;

  @media (max-width: 665px) {
    height: 90px;
    width: 120px;
  }
`;
export const BrandLogo = styled.img`
  height: 130px;
  width: 150px;
  @media (max-width: 665px) {
    height: 90px;
    width: 120px;
  }
`;

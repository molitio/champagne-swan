import styled from "styled-components";

export const OurPartnersContainer = styled.div``;

export const OurPartnersTitle = styled.h1`
  position: relative;
  text-align: center;
  color: #c1a87d;
  font-weight: 400;
  font-size: 105px;
  margin-top: 0em;
  margin-bottom: 1em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

export const OurPartnersContentContainer = styled.div`
  margin-top: 180px;
  margin-bottom: 140px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1440px) {
  }
`;

export const PartnersImageContainer = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 40px;
  margin-bottom: 40px;

  flex: 25%;

  @media (max-width: 1440px) {
    flex: 50%;
  }
`;

export const PartnerImg = styled.img`
  height: 130px;
  width: 130px;
`;

export const HouseLogo = styled.img`
  height: 130px;
  width: 190px;
`;
export const BrandLogo = styled.img`
  height: 130px;
  width: 150px;
`;

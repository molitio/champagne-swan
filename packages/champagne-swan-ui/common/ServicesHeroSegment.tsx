import React from "react";
import styled from "styled-components";
import HeroSegmentContent from "../common/HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import Link from "next/link";

const ServicesStyledLayerSegment = styled.div``;

const SimpleServicesLayer = styled.img`
  position: absolute;
  margin: 0;
  margin-top: 0px;
  top: 0;
  left: 0;
  width: 100%;
  height: 1069px;
`;

const RotatedServicesLayer = styled.img`
  position: absolute;
  transform: rotate(180deg);
  margin: 0;
  margin-top: 535px;
  top: 0;
  left: 0;
  width: 100%;
  height: 535px;
`;

const StyledImg = styled.div`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/window.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  height: 1069px;
  opacity: 0.9;
`;

const WaterSplash = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

const ServicesHeroSegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 850px;
  top: 23em;
  position: relative;
`;

const StyledButtonContainer = styled.div`
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactButton = styled.button`
  display: block;
  color: white;
  background-color: #c1a87d;
  padding: 0.5em 0.93em 0.5em 0.93em;
  font-size: 24px;
  font-weight: 200;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  z-index: 100;
  margin: auto;
  :hover {
    color: #c1a87d;
    background-color: white;
  }
`;

const ServicesHeroSegment: React.FC = (props) => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  const content = `Válassza ki a tisztítandó felületet és annak nagyságát, majd a “SZÁMOL” gombra kattintva tudja meg a szolgáltatás árát! Görgessen lejjebb és ismerje meg szolgáltatásainkat, majd foglalja le online időpontját az oldal alján!`;

  return (
    <StyledImg>
      <SimpleServicesLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_hero.png"
        }
      />
      <RotatedServicesLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png"
        }
      />
      <ServicesStyledLayerSegment>
        {!navBarExpanded ? (
          <ServicesHeroSegmentContainer>
            <HeroSegmentContent
              title={"TESZT SZÖVEG"}
              description={content}
              callToAction={
                <StyledButtonContainer>
                  <ContactButton type="submit" className="hiro-content">
                    {`Számol`}
                  </ContactButton>

                  <WaterSplash
                    src={
                      "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
                    }
                  />
                </StyledButtonContainer>
              }
            />
          </ServicesHeroSegmentContainer>
        ) : null}
      </ServicesStyledLayerSegment>
    </StyledImg>
  );
};

export default ServicesHeroSegment;

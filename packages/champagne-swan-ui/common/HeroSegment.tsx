import React from "react";
import styled from "styled-components";
import HeroSegmentContent from "../common/HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import Link from "next/link";

import SkillsComponent from "./SkillsComponent";

const StyledLayerSegment = styled.div`
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 850px;
  align-items: center;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_hero.png);
  background-size: cover;
`;

const StyledImg = styled.div`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/hero.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  min-height: 850px;
`;

const WaterSplash = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

const HeroSegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 850px;
  top: 23em;
  position: relative;
`;

const ContactLink = styled.a`
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

  :hover {
    color: #c1a87d;
    background-color: white;
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSegment: React.FC = (props) => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navTree = champagneSwanContext.navTree ?? {};
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  const content = `Cégünk magas színvonalon kínál takarító szolgáltatást szállodák,${(
    <br />
  )}irodaházak és magánszemélyek részére,${(
    <br />
  )}valamint vállaljuk nagy belmagasságú ipari üzemek,${(
    <br />
  )}gyártó csarnokok, raktárak és logisztikai központok${(
    <br />
  )}speciális takarítását!`;

  return (
    <StyledImg>
      <StyledLayerSegment>
        {!navBarExpanded ? (
          <HeroSegmentContainer>
            <HeroSegmentContent
              title={"TISZTASÁG FELSŐFOKON!"}
              description={content}
              callToAction={
                <StyledButtonContainer>
                  <Link key={navTree.contact.path} href={navTree.contact.path}>
                    <ContactLink className="hiro-content">
                      {`Bővebben`}
                    </ContactLink>
                  </Link>

                  <WaterSplash
                    src={
                      "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
                    }
                  />
                </StyledButtonContainer>
              }
            />
            <SkillsComponent />
          </HeroSegmentContainer>
        ) : null}
      </StyledLayerSegment>
    </StyledImg>
  );
};

export default HeroSegment;

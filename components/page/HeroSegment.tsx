import React from "react";
import styled from "styled-components";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import Link from "next/link";
import {
  StyledLayerSegment,
  RotatedLayer,
  SimpledHeroLayer,
  StyledImg,
  HeroWaterSplash,
  StyledHeroSegmentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from "./style";

const HeroSegment: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navTree = champagneSwanContext.navTree ?? {};
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  const content = `Cégünk magas színvonalon kínál takarító szolgáltatást szállodák,irodaházak és magánszemélyek részére, valamint vállaljuk nagy belmagasságú ipari üzemek, gyártó csarnokok, raktárak és logisztikai központok speciális takarítását!`;

  return (
    <StyledImg>
      <SimpledHeroLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_hero.png"
        }
      />
      <RotatedLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png"
        }
      />
      <StyledLayerSegment>
        {!navBarExpanded ? (
          <StyledHeroSegmentContainer>
            <HeroSegmentContent
              title={"TISZTASÁG FELSŐFOKON!"}
              description={content}
              callToAction={
                <StyledButtonContainer>
                  <Link key={navTree.contact.path} href={navTree.contact.path}>
                    <HeroContactLink className="hiro-content">
                      {`Bővebben`}
                    </HeroContactLink>
                  </Link>

                  <HeroWaterSplash
                    src={
                      "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
                    }
                  />
                </StyledButtonContainer>
              }
            />
          </StyledHeroSegmentContainer>
        ) : null}
      </StyledLayerSegment>
    </StyledImg>
  );
};

export default HeroSegment;

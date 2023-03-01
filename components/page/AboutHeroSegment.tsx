import React from "react";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import Link from "next/link";
import {
  StyledLayerSegment,
  RotatedLayer,
  SimpledHeroLayer,
  StyledAboutImg,
  HeroWaterSplash,
  StyledHeroSegmentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from "./style";
import { SystemContext } from "@molitio/ui-core";

const HeroSegment: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  return (
    <StyledAboutImg>
      <SimpledHeroLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
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
              title={"SZAKKÉPZETT MUNKAERŐ"}
              anotherTitle={"MINŐSÉGI SZOLGÁLTATÁS"}
              callToAction={
                <StyledButtonContainer>
                  <Link key={navTree.contact.path} href={navTree.contact.path}>
                    <HeroContactLink className="hiro-content">
                      {`Kapcsolat`}
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
    </StyledAboutImg>
  );
};

export default HeroSegment;

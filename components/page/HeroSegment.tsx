import React from "react";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import { IconGroup } from "../common/IconGroup";
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
import { SystemContext } from "@molitio/ui-core";

const content = (
  <>
    Cégünk magas színvonalon kínál takarító szolgáltatást szállodák,irodaházak{" "}
    <br />
    és magánszemélyek részére, <br />
    valamint vállaljuk nagy belmagasságú ipari üzemek,
    <br /> gyártó csarnokok, raktárak és logisztikai központok speciális
    takarítását!
  </>
);

const HeroSegment: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navTree = systemContext?.navRoot ?? {};
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  return (
    <StyledImg>
      {!navBarExpanded ? (
        <SimpledHeroLayer
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_hero.png"
          }
        />
      ) : (
        <SimpledHeroLayer
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png"
          }
        />
      )}

      <RotatedLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png"
        }
      />
      <StyledLayerSegment>
        {!navBarExpanded ? (
          <StyledHeroSegmentContainer>
            <IconGroup
              fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
              starCount={5}
            />
            <HeroSegmentContent
              title={"TISZTASÁG FELSŐFOKON!"}
              anotherTitle={""}
              description={content}
              callToAction={
                <StyledButtonContainer>
                  <Link
                    key={navTree?.contact?.path ?? ""}
                    href={navTree?.contact?.path ?? ""}
                  >
                    <HeroContactLink>{`Bővebben`}</HeroContactLink>
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

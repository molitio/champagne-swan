import React from "react";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";

import {
  ServicesStyledLayerSegment,
  SimpleServicesLayer,
  RotatedServicesLayer,
  ServicesStyledImg,
  ServicesWaterSplash,
  ServicesHeroSegmentContainer,
  StyledServicesButtonContainer,
  ContactButton,
} from "./style";

import SelectForm from "../common/SelectForm";

const ServicesHeroSegment: React.FC = (props) => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  const content = `Válassza ki a tisztítandó felületet és annak nagyságát, majd a “SZÁMOL” gombra kattintva tudja meg a szolgáltatás árát! Görgessen lejjebb és ismerje meg szolgáltatásainkat, majd foglalja le online időpontját az oldal alján!`;

  return (
    <ServicesStyledImg>
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
                <StyledServicesButtonContainer>
                  <ContactButton type="submit" className="hiro-content">
                    {`Számol`}
                  </ContactButton>

                  <ServicesWaterSplash
                    src={
                      "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
                    }
                  />
                </StyledServicesButtonContainer>
              }
            />
            <SelectForm/>
          </ServicesHeroSegmentContainer>
        ) : null}
      </ServicesStyledLayerSegment>
    </ServicesStyledImg>
  );
};

export default ServicesHeroSegment;

import React from "react";
import { ChampagneSwanContext } from "../context";
import { SimpledLayer } from "./style";

import {
  StyledLayerSegment,
  RotatedLayer,
  SimpledHeroLayer,
  ContactStyledImg,
  StyledHeroSegmentContainer,
  FormText,
  MainTitle,
} from "./style";

const ContactPageHero: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navTree = champagneSwanContext.navTree ?? {};
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  const content = `Írjon Nekünk az alábbi kapcsolati űrlapon keresztül vagy vegye fel velünk a kapcsolatot az alábbi elérhetőségek egyikén!`;

  return (
    <ContactStyledImg>
      <SimpledHeroLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png"
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
            <MainTitle>{"KAPCSOLAT"}</MainTitle>
            <FormText>{content}</FormText>
          </StyledHeroSegmentContainer>
        ) : null}
      </StyledLayerSegment>
    </ContactStyledImg>
  );
};

export default ContactPageHero;
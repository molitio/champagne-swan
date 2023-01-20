import React from "react";
import styled from "styled-components";
import { IconGoldGroup } from "../common/IconGroups";

const StyledCoverContainer = styled.div``;

const StyledCallToAction = styled.div`
  text-align: center;
`;

type HeroSegmentContentProps = {
  title?: string;
  description?: string;
  callToAction?: React.ReactNode;
};

const StyledMainTitle = styled.h1`
  text-align: center;
  font-size: 3.6rem;
  position: relative;
  margin: 30px 30px 0 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 78px;
  color: #ffffff;
  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 645px) {
    font-size: 2.25rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 0em;
  }

  @media (max-width: 280px) {
    font-size: 1.6rem;
    width: 8em;
  }
`;

const StyledDescription = styled.h3`
  width: 27em;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: white;
  margin-top: 1em;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-size: 1.25rem;
  padding: 0 2em 0 2em;
  text-shadow: 2px 4px 8px #000000;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction } = props;

  return (
    <StyledCoverContainer>
      <IconGoldGroup
        fill={""}
        dx={""}
        dy={""}
        stdDeviation={""}
        floodOpacity={""}
      />
      <StyledMainTitle className="title">{`${title}`}</StyledMainTitle>
      <StyledDescription className="hiro-conten">
       {/*  {`Cégünk magas színvonalon kínál takarító szolgáltatást szállodák,
                irodaházak és magánszemélyek részére,`}
        <br /> {`valamint vállaljuk nagy belmagasságú ipari üzemek,`}
        <br />{" "}
        {`gyártó csarnokok, raktárak és logisztikai központok
                speciális takarítását!`} */}
                {description}
      </StyledDescription>
      <StyledCallToAction>{callToAction}</StyledCallToAction>
    </StyledCoverContainer>
  );
};
export default HeroSegmentContent;

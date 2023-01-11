import React from "react";
import styled from "styled-components";
import { IconBlueGroup } from "../components";
import SkillsComponent from "./SkillsComponent";
import Link from "next/link";
import { ChampagneSwanContext } from "../context";
import ImageBox from "./ImageBox";

const SecondaryHompageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SecondaryContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const LayerContainer = styled.div`
  position: relative;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 1150px;
  height: 1150px;
  align-items: center;
  background-size: cover;
  background: #c1dadff0;
`;

const StyledIconContainer = styled.div`
  padding-top: 6em;
`;

const SecondaryContentTitle = styled.h1`
  text-align: center;
  color: #0c7a93;
  font-weight: 400;
  font-size: 105px;
  opacity: 0.5;
  margin-top: 0.4em;
`;

const SecondaryContentBox = styled.div`
  height: 353px;
  min-height: 353px;
  width: 529px;
  min-width: 529px;
  margin: 30px 10px 0 0;
`;

const SecondaryContentBoxTitle = styled.h1`
  text-align: initial;
  color: #0c7b93;
  font-weight: 400;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 55px;
`;
const SecondaryContentBoxText = styled.p`
  text-align: start;
  color: #0c7b93;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 110px;
`;

const WaterSplash = styled.img`
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-15deg);
  bottom: 160px;
  left: 490px;
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

const SecondaryHomePageContent: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navTree = champagneSwanContext.navTree ?? {};

  return (
    <LayerContainer>
      <SkillsComponent />
      <StyledIconContainer>
        <IconBlueGroup
          fill={""}
          dx={""}
          dy={""}
          stdDeviation={""}
          floodOpacity={""}
        />
      </StyledIconContainer>
      <SecondaryContentTitle className="secondary-title">
        {"PRÉMIUM MINŐSÉG"}
      </SecondaryContentTitle>

      <SecondaryContentContainer>
        <SecondaryContentBox>
          <SecondaryContentBoxTitle>
            {`Jeliza a tisztaság szinonimája`}
          </SecondaryContentBoxTitle>

          <SecondaryContentBoxText>
            {`Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen.`}
          </SecondaryContentBoxText>

          <Link key={navTree.about.path} href={navTree.about.path}>
            <ContactLink className="hiro-content">{`Bővebben`}</ContactLink>
          </Link>
        </SecondaryContentBox>
        <ImageBox
                imageUrl="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officecleaners.jpg"
                height= {'353px'}
                width={'529px'}
                minHeight={'353px'} 
                minWidth={'529px'}
                tabletHeight={'235px'} 
                tabletWidth={'353px'} 
                tabletMinHeight={'235px'} 
                tabletMinWidth={'353px'} 
                mobileHeight={'176px'} 
                mobileWidth={'264px'} 
                mobileMinHeight={'176px'} 
                mobileMinWidth={'264px'} 
                breakpoint1={'1440px'} 
                breakpoint2={'900px'}
              /> 
      </SecondaryContentContainer>
      <WaterSplash
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
        }
      />
        
    </LayerContainer>
  );
};

export default SecondaryHomePageContent;

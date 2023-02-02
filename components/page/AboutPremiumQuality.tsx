import React from "react";
import { IconBlueGroup } from "../common";
import { ImageBox } from "../common/ImageBox";
import {
  StyledPremiumQualityIconContainer,
  AboutPremiumQualityContainer,
  AboutPremiumQualityTitle,
  AboutQuote,
  AboutQuoteAuthor,
  AboutQuoteContainer,
  AboutPremiumQualityContentText,
  AboutPremiumQualityImageBox,
  AboutPQBackgroundLayerContainer,
  AboutPremiumQualityWaterSplash,
  RotateLayer,
} from "./style";

const AboutPremiumQuality: React.FC = () => {
  return (
    <AboutPQBackgroundLayerContainer>
      <StyledPremiumQualityIconContainer>
        <IconBlueGroup
          fill={""}
          dx={""}
          dy={""}
          stdDeviation={""}
          floodOpacity={""}
        />
      </StyledPremiumQualityIconContainer>
      <AboutPremiumQualityTitle>{"ISMERJEN MEG"}</AboutPremiumQualityTitle>
      <AboutPremiumQualityTitle>{"BENNÜNKET"}</AboutPremiumQualityTitle>
      <AboutQuoteContainer>
        <AboutQuote>{`"A minőség azt jelenti, hogy akkor is jól csinálsz valamit amikor nem látják."`}</AboutQuote>
        <AboutQuoteAuthor>{`Henry Ford`}</AboutQuoteAuthor>
      </AboutQuoteContainer>
      <AboutPremiumQualityContainer>
        <AboutPremiumQualityContentText
          width={"1150px"}
          fontSize={"27px"}
          tabletWidth={"800px"}
          tabletFontSize={"25px"}
          mobileWidth={"400px"}
          smallMobileFonsize={'20px'}
          smallMobileWidth={'350px'}
        >
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Cras convallis, elit in efficitur tristique, metus metus semper massa, consequat convallis orci diam quis massa. Integer varius laoreet augue sed mollis. Curabitur id scelerisque lacus, non pellentesque tellus. Cras molestie, ligula rutrum convallis placerat, arcu ante sollicitudin elit, pretium interdum sapien tortor nec urna. Cras molestie auctor nisi, nec fringilla nisl vulputate gravida. Suspendisse potenti. Morbi eu posuere leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse quis neque mollis, porta turpis in, fermentum lectus.`}
        </AboutPremiumQualityContentText>
      </AboutPremiumQualityContainer>
      <AboutPremiumQualityImageBox>
        <ImageBox
          imageBoxParams={{
            imageUrl:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/mop.jpg",
            positioning: {
              margin: "30px 15px 15px 15px",
              tablet: { margin: "30px 0 0 0" },
            },
            dimensions: {
              height: "250px",
              width: "372px",
              minHeight: "250px",
              minWidth: "372px",
              tablet: {
                height: "250px",
                width: "372px",
                minHeight: "250px",
                minWidth: "372px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
              breakpoint2: "900px",
            },
          }}
        />
        <ImageBox
          imageBoxParams={{
            imageUrl:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/colleague.jpg",
            positioning: {
              margin: "30px 15px 15px 15px",
              tablet: { margin: "30px 0 0 0" },
            },
            dimensions: {
              height: "250px",
              width: "372px",
              minHeight: "250px",
              minWidth: "372px",
              tablet: {
                height: "250px",
                width: "372px",
                minHeight: "250px",
                minWidth: "372px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
              breakpoint2: "900px",
            },
          }}
        />
        <ImageBox
          imageBoxParams={{
            imageUrl:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/machine.jpg",
            positioning: {
              margin: "30px 15px 15px 15px",
              tablet: { margin: "30px 0 0 0" },
            },
            dimensions: {
              height: "250px",
              width: "372px",
              minHeight: "250px",
              minWidth: "372px",
              tablet: {
                height: "250px",
                width: "372px",
                minHeight: "250px",
                minWidth: "372px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
              breakpoint2: "900px",
            },
          }}
        />
      </AboutPremiumQualityImageBox>

      <AboutPremiumQualityWaterSplash
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
        }
      />
      <RotateLayer
        position={"relative"}
        top={"-20px"}
        tabletTop={"-13px"}
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
        }
      />
    </AboutPQBackgroundLayerContainer>
  );
};

export default AboutPremiumQuality;

import { ImageBox } from "../common/ImageBox";
import { IconGoldGroup } from "../common/IconGroups";
import {
  StyledIconContainer,
  ServicesMainTitle,
  ReverseInternalContentContainer,
  ContentBox,
  InternalContentContainer,
  ContentBoxTitle,
  ContentBoxText,
  ExternalContentContainer,
  UniqueExternalContentContainer,
  ServicesMainContainer,
  WaterSplash,
  RightSideWaterSplash,
  SimpledLayer,
} from "./style";

const ServicesPageContent: React.FC = () => {
  return (
    <>
      <ServicesMainContainer
        smallMobileHeight={"4500px"}
        mobileHeight={"4500px"}
        tabletHeight={"4500px"}
      >
        <StyledIconContainer mobilePaddingTop={"40em"}>
          <IconGoldGroup
            fill={""}
            dx={"0"}
            dy={"0"}
            stdDeviation={"0"}
            floodOpacity={"0"}
          />
        </StyledIconContainer>
        <ServicesMainTitle id="first-content">{`SZOLGÁLTATÁSAINK`}</ServicesMainTitle>

        <UniqueExternalContentContainer>
          <ReverseInternalContentContainer>
            <ImageBox
              imageBoxParams={{
                imageUrl:
                  "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officecleaners.jpg",
                dimensions: {
                  height: "350px",
                  width: "490px",
                  minHeight: "350px",
                  minWidth: "490px",
                },
                positioning: {
                  margin: "30px 15px 0 15px",
                  tablet: {
                    top: "220px",
                  },
                  mobile: {
                    top: "300px",
                  },
                  mobileSmall: {
                    top: "420px",
                  },
                },
                breakpoints: {
                  breakpoint1: "1440px",
                },
              }}
            />

            <ContentBox>
              <ContentBoxTitle>{`Szállodák és irodaházak takarítása`}</ContentBoxTitle>
              <ContentBoxText>
                {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
              </ContentBoxText>
              <ContentBoxText
                width={"535px"}
                margin={"0px auto 0px auto"}
                top={"0px"}
                padding={"0px"}
                display={"none"}
                displayTablet={"block"}
                paddingTablet={"20px 0px 0px 0px"}
              >
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
              </ContentBoxText>
            </ContentBox>
          </ReverseInternalContentContainer>

          <ContentBoxText
            width={"1050px"}
            margin={"0px auto 0px auto"}
            top={"-50px"}
            display={"block"}
            displayTablet={"none"}
            displayMobile={"none"}
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
          </ContentBoxText>

          <div id="middle-content"></div>
          <WaterSplash
            bottom={"430px"}
            bottomTablet={"-50px"}
            right={"500px"}
            rightTablet={"220px"}
            rightMobile={"170px"}
            bottomMobile={"-170px"}
            bottomSmallMobile={"-300px"}
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </UniqueExternalContentContainer>

        <ExternalContentContainer>
          <InternalContentContainer
            smallMobileTop={"380px"}
            tabletTop={"200px"}
            mobileTop={"250px"}
          >
            <ContentBox>
              <ContentBoxTitle>{`Magánszemélyeknél végzett takarítás`}</ContentBoxTitle>
              <ContentBoxText>
                {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
              </ContentBoxText>
              <ContentBoxText
                width={"535px"}
                margin={"0px auto 0px auto"}
                top={"0px"}
                padding={"0px"}
                display={"none"}
                displayTablet={"block"}
                paddingTablet={"20px 0px 0px 0px"}
              >
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
              </ContentBoxText>
            </ContentBox>
            <ImageBox
              imageBoxParams={{
                imageUrl:
                  "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/flatroom.jpg",
                dimensions: {
                  height: "397px",
                  width: "556px",
                  minHeight: "397px",
                  minWidth: "397px",
                },
                positioning: {
                  margin: "30px 15px 0 15px",
                  tablet: {
                    top: "220px",
                  },
                  mobile: {
                    top: "300px",
                  },
                  mobileSmall: {
                    top: "420px",
                  },
                },
                breakpoints: {
                  breakpoint1: "1440px",
                },
              }}
            />
          </InternalContentContainer>
          <ContentBoxText
            width={"1100px"}
            margin={"0px auto 0px auto"}
            top={"0px"}
            display={"block"}
            displayTablet={"none"}
            displayMobile={"none"}
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
          </ContentBoxText>

          <div id="last-content"></div>
          <RightSideWaterSplash
            bottom={"380px"}
            bottomTablet={"-250px"}
            bottomMobile={"-420px"}
            bottomSmallMobile={"-670px"}
            leftSmallMobile={"0px"}
       
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </ExternalContentContainer>
        <ExternalContentContainer>
          <ReverseInternalContentContainer
            tabletTop={"390px"}
            mobileTop={"480px"}
            smallMobileTop={"730px"}
          >
            <ImageBox
              imageBoxParams={{
                imageUrl:
                  "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/industrial.jpg",
                dimensions: {
                  height: "396px",
                  width: "529px",
                  minHeight: "396px",
                  minWidth: "529px",
                },
                positioning: {
                  margin: "30px 15px 0 15px",
                  tablet: {
                    top: "240px",
                  },
                  mobile: {
                    top: "300px",
                  },
                  mobileSmall: {
                    top: "420px",
                  },
                },
                breakpoints: {
                  breakpoint1: "1440px",
                },
              }}
            />

            <ContentBox>
              <ContentBoxTitle>{`Nagy belmagasságú épületek takarítása`}</ContentBoxTitle>
              <ContentBoxText>
                {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
              </ContentBoxText>
              <ContentBoxText
                width={"535px"}
                margin={"0px auto 0px auto"}
                top={"0px"}
                padding={"0px"}
                display={"none"}
                displayTablet={"block"}
                paddingTablet={"20px 0px 0px 0px"}
              >
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
              </ContentBoxText>
            </ContentBox>
          </ReverseInternalContentContainer>
          <ContentBoxText
            width={"1080px"}
            margin={"0px auto 0px auto"}
            top={"60px"}
            display={"block"}
            displayTablet={"none"}
            displayMobile={"none"}
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
          </ContentBoxText>
          <WaterSplash
            bottom={"380px"}
            bottomTablet={"-470px"}
            bottomMobile={"-660px"}
            bottomSmallMobile={"-1020px"}
            right={""}
            rightTablet={""}
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </ExternalContentContainer>
      </ServicesMainContainer>
      <SimpledLayer
        top={"4px"}
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
        }
      />
    </>
  );
};

export default ServicesPageContent;

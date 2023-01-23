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
  BottomWaterSplash
} from "./style";

const ServicesPageContent: React.FC = () => {
  return (
    <>
      <ServicesMainContainer>
        <StyledIconContainer>
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
                    tablet:{
                      top:"180px"
                    },
                  },
                breakpoints: {
                  breakpoint1: "1440px"
                }
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
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
          </ContentBoxText>

          <div id="middle-content"></div>
          <WaterSplash
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </UniqueExternalContentContainer>

        <ExternalContentContainer>
          <InternalContentContainer>
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
                    minHeight:  "397px",
                    minWidth:"397px",      
                  },
                  positioning: {
                    margin: "30px 15px 0 15px",
                    tablet:{
                      top:"180px"
                    },
                  },
                breakpoints: {
                  breakpoint1: "1440px"
                }
              }}
            />
          </InternalContentContainer>
          <ContentBoxText
            width={"1100px"}
            margin={"0px auto 0px auto"}
            top={"-30px"}
            display={"block"}
            displayTablet={"none"}
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
          </ContentBoxText>

          <div id="last-content"></div>
          <RightSideWaterSplash
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </ExternalContentContainer>
        <ExternalContentContainer>
          <ReverseInternalContentContainer>
            <ImageBox
              imageBoxParams={{
                imageUrl:
                  "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/industrial.jpg",
                  dimensions: {
                    height:"396px",
                    width: "529px",
                    minHeight:  "529px",
                    minWidth:"396px",      
                  },
                  positioning: {
                    margin: "30px 15px 0 15px",
                    tablet:{
                      top:"240px"
                    },
                  },
                breakpoints: {
                  breakpoint1: "1440px"
                }
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
            top={"0px"}
            display={"block"}
            displayTablet={"none"}
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.`}
          </ContentBoxText>
          <BottomWaterSplash
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </ExternalContentContainer>
      </ServicesMainContainer>
    </>
  );
};

export default ServicesPageContent;

import type { NextPage } from "next";
import { ChampagneSwanHomePage, Page } from "@molitio/ui-core";

const HomePage: NextPage = () => {
  return (
    <Page id={"home"}>
      <ChampagneSwanHomePage
        segmentParams={{
          hero: {
            pageName: "home",
            titleFontSize: "2.8rem",
            titleTextShadow: "0 2px 4px #8c7b6ccc",
            titleFontWeight: "lighter",
            descriptionTextFontWeight: "lighter",
            descriptionTextAlign: "center",
            descriptionTextDimensions: { maxWidth: "26em" },
            descriptionSubTextAlign: "center",
            descriptionTextShadow: "0 1px 1.5px #8c7b6ccc",
            descriptionSubTextDimensions: { maxWidth: "18em" },
            backgroundType: "image",
            heroIconType: "drop-shadow",
            innerPaddingTop: "2em",
            disableLineDecorator: true,
            iconBorderRadius: "0.2em",
          },
        }}
      />
    </Page>
  );
};

export default HomePage;

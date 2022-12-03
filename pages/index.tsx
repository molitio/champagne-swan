import type { NextPage } from "next";
import { ChampagneSwanHomePage, Page } from "@molitio/ui-core";

const HomePage: NextPage = () => {
  return (
    <Page minHeight="100vh">
      <ChampagneSwanHomePage
        segmentParams={{
          hero: {
            titleFontSize: "2.8rem",
            titleTextShadow: "0 2px 4px #8c7b6ccc",
            titleFontWeight: "lighter",
            descriptionTextFontWeight: "lighter",
            descriptionTextAlign: "center",
            descriptionSubTextAlign: "center",
            descriptionTextShadow: "0 1px 1.5px #8c7b6ccc",
            backgroundType: "image",
            heroIconType: "drop-shadow",
            innerPaddingTop: "10em",
            disableLineDecorator: true,
            iconBorderRadius: "0.2em",
          },
        }}
      />
    </Page>
  );
};

export default HomePage;

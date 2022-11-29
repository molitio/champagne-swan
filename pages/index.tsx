import type { NextPage } from "next";
import { ChampagneSwanHomePage, Page } from "@molitio/ui-core";

const HomePage: NextPage = () => {
  return (
    <main>
      <Page>
        <ChampagneSwanHomePage segmentParams={{ innerPaddingTop: "2em" }} />
      </Page>
    </main>
  );
};

export default HomePage;

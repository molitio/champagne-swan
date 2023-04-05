import { NextPage } from "next";
import { About } from "../components/about";
import AboutCover from "../components/about/AboutCover";

const AboutPage: NextPage = () => {
  return (
    <main>
      <AboutCover />
      <About />;
    </main>
  );
};

export default AboutPage;

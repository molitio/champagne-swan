import {
  AboutCover,
  AboutPremiumQuality,
  AboutOpinions,
  Contact,
} from "../components";

const AboutPage: React.FC = () => {
  return (
    <section>
      <AboutCover />
      <AboutPremiumQuality />
      <AboutOpinions />
      <Contact />
    </section>
  );
};

export default AboutPage;

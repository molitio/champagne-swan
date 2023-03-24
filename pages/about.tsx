import {
  AboutCover,
  AboutPremiumQuality,
  AboutOpinions,
} from "../components/about";
import { Contact } from "../components/contact";

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

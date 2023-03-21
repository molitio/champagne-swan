import {
  AboutCover,
  AboutPremiumQuality,
  AboutOpinions,
  ContactContent,
} from "../components";

const AboutPage: React.FC = () => {
  return (
    <section>
      <AboutCover />
      <AboutPremiumQuality />
      <AboutOpinions />
      <ContactContent />
    </section>
  );
};

export default AboutPage;

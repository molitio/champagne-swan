import { AboutHeroSegment } from "../components";
import { AboutPremiumQuality } from "../components";
import { AboutOpinions } from "../components";
import { ContactContent } from "../components";

const About: React.FC = () => {
  return (
    <section>
      <AboutHeroSegment />
      <AboutPremiumQuality />
      <AboutOpinions />
      <ContactContent />
    </section>
  );
};

export default About;

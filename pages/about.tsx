import { AboutHeroSegment } from "../components/page";
import { AboutPremiumQuality } from "../components/page";
import { AboutOpinions } from "../components/page";
import ContactContent from "../components/page/ContactContent";

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

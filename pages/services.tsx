import { ServicesPageContent } from "../components/page";
import { ServicesHeroSegment } from "../components/page";
import ContactContent from "../components/page/ContactContent";

const Services: React.FC = () => {
  return (
    <>
      <ServicesHeroSegment />
      <ServicesPageContent />
      <ContactContent />
    </>
  );
};

export default Services;

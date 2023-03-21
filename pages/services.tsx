import { ServicesPageContent } from "../components/page";
import { ServicesHeroSegment } from "../components/page";
import ContactContent from "../components/contact/ContactContent";
import { NextPage } from "next";

const ServicesPage: NextPage = () => {
  return (
    <section>
      <ServicesHeroSegment />
      <ServicesPageContent />
      <ContactContent />
    </section>
  );
};

export default ServicesPage;

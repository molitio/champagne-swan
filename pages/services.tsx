import { ServicesPageContent } from "../components";
import { ServicesHeroSegment } from "../components";
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

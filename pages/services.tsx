import { ServicesPageContent } from "../components";
import { ServicesCover } from "../components";
import ContactContent from "../components/contact/ContactContent";
import { NextPage } from "next";

const ServicesPage: NextPage = () => {
  return (
    <section>
      <ServicesCover />
      <ServicesPageContent />
      <ContactContent />
    </section>
  );
};

export default ServicesPage;

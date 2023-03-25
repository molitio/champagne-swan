import { NextPage } from "next";
import { ServicesContent, ServicesCover } from "../components/services";
import { ContactInfo } from "../components/contact";

const ServicesPage: NextPage = () => {
  return (
    <section>
      <ServicesCover />
      <ServicesContent />
      <ContactInfo />
    </section>
  );
};

export default ServicesPage;

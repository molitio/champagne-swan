import { NextPage } from "next";
import { ServicesContent, ServicesCover } from "../components/services";
import { Contact } from "../components/contact";

const ServicesPage: NextPage = () => {
  return (
    <section>
      <ServicesCover />
      <ServicesContent />
      <Contact />
    </section>
  );
};

export default ServicesPage;

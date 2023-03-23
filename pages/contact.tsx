import { NextPage } from "next";
import { ContactPageCover, ContactPageContent } from "../components/contact";

const ContactPage: NextPage = () => {
  return (
    <section>
      <ContactPageCover />
      <ContactPageContent />
    </section>
  );
};

export default ContactPage;

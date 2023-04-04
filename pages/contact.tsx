import { NextPage } from "next";
import { ContactPageCover, ContactPageContent } from "../components/contact";

const ContactPage: NextPage = () => {
  return (
    <main>
      <ContactPageCover />
      <ContactPageContent />
    </main>
  );
};

export default ContactPage;

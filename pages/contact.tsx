import { NextPage } from "next";
import { ContactCover, ContactContent } from "../components/contact";

const ContactPage: NextPage = () => {
  return (
    <main>
      <ContactCover />
      <ContactContent />
    </main>
  );
};

export default ContactPage;

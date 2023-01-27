import React, { useState } from "react";
import { StyledForm } from "./style";
import { ContactButton } from "./style";
import Input from "./Input";
import { StyledField } from "./style";
import { handleRecaptcha } from "../utils";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface FormProps {
  position?: string;
}

type FormValues = {
  from_name: string;
  from_email: string;
  message: string;
};

const ContactForm: React.FC<FormProps> = () => {
  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required("User name is required"),
    from_email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues: FormValues = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const handleSubmit = async (values: FormValues, actions: any) => {
    try {
      const isRecaptchaPass = await handleRecaptcha(
        "CONTACT_FORM",
        process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY ?? ""
      );

      if (!isRecaptchaPass) {
        return;
      } else {
        const { from_name, from_email, message } = values;

        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from_name: from_name,
            from_email: from_email,
            message: message,
          }),
        });

        const result = response.json();
      }
    } catch (error: any) {
      console.error(error.message);
    }

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledField
            placeholdercolor={"#0C7B93"}
            type="text"
            placeholder=" Név:"
            name="from_name"
          />
          <StyledField
            margin={"43px 0px 0px 0px"}
            placeholdercolor={"#0C7B93"}
            type="email"
            placeholder=" E-mail cím:"
            name="from_email"
          />
          <StyledField
            margin={"43px 0px 43px 0px "}
            height={"320px"}
            placeholdercolor={"#0C7B93"}
            component="textarea"
            placeholder=" Üzenet szövege"
            name="message"
          />
          <ContactButton type="submit" disabled={isSubmitting} className="hiro-content">
            {`Elküld`}
          </ContactButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;

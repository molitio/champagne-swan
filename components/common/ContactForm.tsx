import React, { useState } from "react";
import { StyledForm } from "./style";
import { ContactButton } from "./style";
import Input from "./Input";
import { Formik, Form, Field } from "formik";
import { handleRecaptcha } from "../utils";
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
 
              <Field
                type="text"
                placeholder="Az Ön neve"
                name="from_name"
              />
              <Field
                type="email"
                placeholder="E-mail címe"
                name="from_email"
              />
              <Field
                component="textarea"
                placeholder="Az üzenet szövege"
                name="message"
              />
              <button type="submit" disabled={isSubmitting}>
                {`ELKÜLD`}
              </button>

          </StyledForm>
        )}
      </Formik>

/* 
    
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="input"
        name="name"
        placeholder=" Név:"
        value={inputFields.name}
        onChange={handleChangeInput}
        margin={"0px 0px 40px 0px"}
        placeholderColor={"#0C7B93"}
      />
      <Input
        type="input"
        name="email"
        placeholder=" E-mail cím:"
        value={inputFields.email}
        onChange={handleChangeInput}
        margin={"0px 0px 40px 0px"}
        placeholderColor={"#0C7B93"}
      />
      <Input
        type="textarea"
        name="textarea"
        placeholder=" Üzenet szövege:"
        value={inputFields.textarea}
        onChange={handleChangeInput}
        margin={"0px 0px 40px 0px"}
        placeholderColor={"#0C7B93"}
      />

      <ContactButton type="submit" className="hiro-content">
        {`Elküld`}
      </ContactButton>
    </StyledForm> */
  );
};

export default ContactForm;

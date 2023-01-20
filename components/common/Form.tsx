import React, { useState } from "react";
import { StyledForm } from "./style";
import { ContactButton } from "./style";
import Input from "./Input";

interface FormProps {
  position?: string;
}

const Form: React.FC<FormProps> = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputFields);
  };

  const handleChangeInput = (
    e:
       React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
    </StyledForm>
  );
};

export default Form;

import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";

interface FormProps {
  position?: string;
}

type StyledFormProps = {
  position?: string;
};

const ContactButton = styled.button`
  display: block;
  color: white;
  background-color: #c1a87d;
  padding: 0.5em 0.93em 0.5em 0.93em;
  font-size: 24px;
  font-weight: 200;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  z-index: 100;
  margin: auto;
  :hover {
    color: #c1a87d;
    background-color: white;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 5em;
`;

const ContactInfo = styled.p`
  font-size: 2.4rem;
`;

const StyledForm = styled.form<StyledFormProps>`
  position: ${(props) => props.position || "relative"};
`;

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
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
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
        {`Bővebben`}
      </ContactButton>
    </StyledForm>
  );
};

export default Form;

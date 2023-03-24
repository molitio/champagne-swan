import React from "react";
import { useState } from "react";
import { StyledSelectForm } from "../common";
import Input from "./Input";
import { ContactButton, StyledFormContainer } from "./style";
import {
  StyledServicesButtonContainer,
  ServicesWaterSplash,
} from "../services";

const SelectForm: React.FC = () => {
  type InputFields = {
    input1Value: number | string;
    input2Value: number | string;
    input3Value: number | string;
  };

  const [inputFields, setInputFields] = useState<InputFields>({
    input1Value: "Select the interface!",
    input2Value: "Select the surface size!",
    input3Value: "",
  });

  console.log(inputFields.input1Value);
  console.log(inputFields.input2Value);
  console.log(inputFields.input3Value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const options1 = ["Select interface!", 10, 400, 600, 800];
  const options2 = ["Select interface!", 100, 500, 1000, 2000];
  return (
    <StyledSelectForm onSubmit={handleSubmit} margin={"8em 0 0 0"}>
      <StyledFormContainer>
        <div>
          <Input
            type="select"
            name="input1Value"
            value={inputFields.input1Value}
            options={options1}
            onChange={handleChange}
            width={"329px"}
            margin={"0px 0px 40px 0px"}
            placeholderColor={"#0C7B93"}
          />
        </div>
        <div>
          <Input
            type="select"
            name="input2Value"
            value={inputFields.input2Value}
            options={options2}
            onChange={handleChange}
            width={"329px"}
            margin={"0px 0px 40px 0px"}
            placeholderColor={"#0C7B93"}
          />
        </div>
        <div>
          <Input
            type="input"
            name="input3Value"
            onChange={handleChange}
            value={inputFields.input3Value}
            width={"329px"}
            margin={"0px 0px 40px 0px"}
            placeholderColor={"#0C7B93"}
          />
        </div>
      </StyledFormContainer>
      <StyledServicesButtonContainer>
        <ContactButton type="submit" className="hero-content">
          {"Számol"}
        </ContactButton>
        <ServicesWaterSplash
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
          }
        />
      </StyledServicesButtonContainer>
    </StyledSelectForm>
  );
};

export default SelectForm;

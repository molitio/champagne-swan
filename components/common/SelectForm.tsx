import React from "react";
import { useState } from "react";
import { StyledForm } from "../common/style";
import Input from "./Input";
import { StyledFormContainer } from "./style/StyledFormContainer";
import {
  StyledServicesButtonContainer,
  ServicesWaterSplash,
  ContactButton,
} from "../page/style";

const SelectForm: React.FC = () => {
  type InputFields = {
    input1Value: number | string;
    input2Value: number | string;
    input3Value: number | string;
  };

  const [result, setResult] = useState<string | number>(0);
  const [inputFields, setInputFields] = useState<InputFields>({
    input1Value: "Válassza ki a felületet!",
    input2Value: "Válassza ki a felületet nagyságát!",
    input3Value: result,
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };
  /* 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Num1: number | string = inputFields.input1Value;
    const Num2: number | string = inputFields.input2Value;
    if (typeof Num1 === "number" && typeof Num2 === "number") {
      setResult(Num1 * Num2);
    }
  };

  */
  const options1 = ["Válassza ki a felületet!", 0, 400, 600, 800];
  const options2 = ["Válassza ki a felületet!", 100, 500, 1000, 2000];
  return (
    //TODO: fix on submit
    <StyledForm margin={"8em 0 0 0"} onSubmit={() => {}}>
      <StyledFormContainer>
        <div>
          <Input
            key={inputFields.input1Value}
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
            key={inputFields.input2Value}
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
            key={inputFields.input3Value}
            type="input"
            name="input3Value"
            value={inputFields.input3Value}
            onChange={handleChange}
            width={"329px"}
            margin={"0px 0px 40px 0px"}
            placeholderColor={"#0C7B93"}
          />
        </div>
      </StyledFormContainer>
      <StyledServicesButtonContainer>
        <ContactButton type="submit" className="hiro-content">
          {`Számol`}
        </ContactButton>

        <ServicesWaterSplash
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
          }
        />
      </StyledServicesButtonContainer>
    </StyledForm>
  );
};

export default SelectForm;

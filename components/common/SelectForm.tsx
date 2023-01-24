import React from "react";
import { useState } from "react";
import { StyledForm } from "../common/style";
import Input from "./Input";

const SelectForm: React.FC = () => {
  type InputFields = {
    input1Value: number;
    input2Value: number;
  };

  const [inputFields, setInputFields] = useState<InputFields>({
    input1Value: 0,
    input2Value: 0,
  });

  const [result, setResult] = useState<string | number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Num1: number = inputFields.input1Value;
    const Num2: number = inputFields.input2Value;
    setResult(Num1 * Num2);
  };

  const options1 = [0, 400, 600, 800];
  const options2 = [0, 60, 80, 40];

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Input
          key={inputFields.input1Value}
          type="select"
          name="input1Value"
          value={inputFields.input1Value}
          options={options1}
          onChange={handleChange}
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
        />
      </div>
      <br />
      <button type="submit">Submit</button>
      <br />
      <p>Result: {result}</p>
    </StyledForm>
  );
};

export default SelectForm;

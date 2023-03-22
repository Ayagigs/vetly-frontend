import React from "react";
import { FormLabel, TextArea } from "./form.textarea.styles";

const FormTextArea = ({ labelName, width, name, value, handleChange }) => {
  return (
    <>
      <FormLabel>{labelName}</FormLabel>
      <TextArea
        width={width}
        name={name}
        value={value}
        onChange={handleChange}
      ></TextArea>
    </>
  );
};

export default FormTextArea;

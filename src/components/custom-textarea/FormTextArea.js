import React from "react";
import { FormLabel, TextArea } from "./form.textarea.styles";

const FormTextArea = ({ labelName, width }) => {
  console.log(labelName);
  return (
    <>
      <FormLabel>{labelName}</FormLabel>
      <TextArea width={width}></TextArea>
    </>
  );
};

export default FormTextArea;

import React from "react";
import { FormControl, FormLabel } from "./text.input.styles";

const FormTextInput = ({ labelName, placeholder }) => {
  return (
    <>
      <FormLabel>{labelName}</FormLabel>
      <FormControl>
        <input type="text" className="form-input" placeholder={placeholder} />
      </FormControl>
    </>
  );
};

export default FormTextInput;

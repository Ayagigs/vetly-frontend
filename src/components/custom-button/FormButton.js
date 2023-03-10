import React from "react";
import { NavigateButton } from "./form.button.styles";

const FormButton = ({
  text,
  backgroundColor,
  color,
  borderColor,
  handleClick,
}) => {
  return (
    <>
      <NavigateButton
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={() => handleClick()}
      >
        {text}
      </NavigateButton>
    </>
  );
};

export default FormButton;

import React from "react";
import { NavigateButton } from "./form.button.styles";

const FormButton = ({
  text,
  backgroundColor,
  color,
  borderColor,
  handleClick,
  width,
  disabled = false,
}) => {
  console.log(borderColor);
  return (
    <>
      <NavigateButton
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={() => handleClick()}
        type="button"
        width={width}
        disabled={disabled}
      >
        {text}
      </NavigateButton>
    </>
  );
};

export default FormButton;

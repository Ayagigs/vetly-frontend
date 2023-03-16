import React from "react";
import { NavigateButton } from "./form.button.styles";

const FormButton = ({
  text,
  backgroundColor,
  color,
  borderColor,
  handleClick,
  width,
}) => {
  return (
    <>
      <NavigateButton
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={() => handleClick()}
        type="button"
        width={width}
      >
        {text}
      </NavigateButton>
    </>
  );
};

export default FormButton;

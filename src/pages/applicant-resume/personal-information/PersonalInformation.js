import React from "react";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import {
  PersonalInformationParent,
  PersonalInfoWrapper,
  ResumeForm,
  FormLabel,
  Heading,
  FormControl,
} from "./person.information.styles";

const PersonalInformation = () => {
  return (
    <PersonalInformationParent>
      <PersonalInfoWrapper>
        <Heading>Personal Information</Heading>

        <ResumeForm>
          <FormTextInput labelName="First Name" placeholder="first name" />
          <FormTextInput labelName="Last Name" placeholder="last name" />
        </ResumeForm>
      </PersonalInfoWrapper>
    </PersonalInformationParent>
  );
};

export default PersonalInformation;

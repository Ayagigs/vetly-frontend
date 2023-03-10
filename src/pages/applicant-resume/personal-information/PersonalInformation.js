import React from "react";
import {
  PersonalInformationParent,
  PersonalInfoWrapper,
  ResumeForm,
  FormLabel,
  Heading,
} from "./person.information.styles";

const PersonalInformation = () => {
  return (
    <PersonalInformationParent>
      <PersonalInfoWrapper>
        <Heading>Personal Information</Heading>

        <ResumeForm>
          First Name
          <FormLabel>First Name</FormLabel>
        </ResumeForm>
      </PersonalInfoWrapper>
    </PersonalInformationParent>
  );
};

export default PersonalInformation;

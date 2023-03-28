import { Box, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import FormButton from "../../../components/custom-button/FormButton";
import FormDateInput from "../../../components/custom-date-input/FormDateInput";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import FormTextArea from "../../../components/custom-textarea/FormTextArea";
import {
  getResumeState,
  updateResume,
  getWorkExperienceState,
} from "../../../slices/resume";
import {
  addItemToList,
  isObjectValuesEmpty,
  isSomeObjectValuesEmpty,
} from "../../../utils";
import {
  DivideWrapper,
  Heading,
  WorkExperienceForm,
  WorkExperienceParent,
  WorkExperienceWrapper,
  Side,
} from "./work.experience.styles";

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState(
    useSelector(getWorkExperienceState)
  );
  const [isNewExperienceAdded, setIsNewExperienceAdded] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (isNewExperienceAdded) {
      toast({
        position: "top-left",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            New experience added!
          </Box>
        ),
        onCloseComplete: () => {
          setIsNewExperienceAdded(false);
        },
      });
    }
  }, [isNewExperienceAdded, toast]);

  useEffect(() => {
    if (isFormEmpty) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="red.500" fontSize={15}>
            Please fill All fields
          </Box>
        ),
        onCloseComplete: () => {
          setIsFormEmpty(false);
        },
      });
    }
  }, [isFormEmpty, toast]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getResumeState);


  const routeToNextPage = () => {
    const isEmpty = isSomeObjectValuesEmpty(workExperience);
    if (isEmpty) {
      setIsFormEmpty(true);
      return;
    }
    const newActiveHeaders = [...data?.activeHeaders, 2];
    const resume = {
      ...data,
      workExperience,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
    navigate("/applicant/resume/build/education");
  };

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/personal-information");
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 1);
    const resume = {
      ...data,
      workExperience,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setWorkExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearInputs = () => {
    setWorkExperience((prev) => ({
      ...prev,
      uuid: uuidv4(),
      occupation: "",
      company: "",
      email_address: "",
      phone_number: "",
      city: "",
      country: "",
      from: "",
      to: "",
      main_activities: "",
    }));
  };

  const handleAddNewExperience = () => {
    if (isObjectValuesEmpty(workExperience)) {
      return setIsFormEmpty(true);
    }

    clearInputs();

    setIsNewExperienceAdded(true);

    let { work_experience, ...rest } = data;

    const resume = {
      ...rest,
      work_experience: addItemToList(work_experience, workExperience),
    };
    dispatch(updateResume(resume));
  };

  const {
    occupation,
    company,
    email_address,
    phone_number,
    city,
    country,
    from,
    to,
    main_activities,
  } = workExperience;
  return (
    <WorkExperienceParent>
      <WorkExperienceWrapper>
        <Heading>Work Experience</Heading>

        <WorkExperienceForm>
          <FormTextInput
            labelName="Occupation"
            placeholder=""
            value={occupation}
            name="occupation"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Company"
            placeholder=""
            value={company}
            name="company"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Enter email address"
            placeholder="enter Email address"
            value={email_address}
            name="email_address"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Phone Number"
            placeholder="enter phone number"
            value={phone_number}
            name="phone_number"
            handleChange={handleChange}
          />

          <DivideWrapper>
            <Side>
              {" "}
              <FormTextInput
                labelName="City"
                placeholder="enter city"
                width="100%"
                value={city}
                name="city"
                handleChange={handleChange}
              />
            </Side>

            <Side>
              {" "}
              <FormTextInput
                labelName="Country"
                placeholder="enter country"
                width="100%"
                value={country}
                name="country"
                handleChange={handleChange}
              />
            </Side>
          </DivideWrapper>

          <DivideWrapper>
            <Side>
              {" "}
              <FormDateInput
                labelName="From"
                placeholder=""
                width="100%"
                value={from}
                name="from"
                handleChange={handleChange}
              />
            </Side>

            <Side>
              {" "}
              <FormDateInput
                labelName="To"
                placeholder=""
                width="100%"
                value={to}
                name="to"
                handleChange={handleChange}
              />
            </Side>
          </DivideWrapper>

          <FormTextArea
            labelName="More activities and responsibilities"
            name="main_activities"
            value={main_activities}
            handleChange={handleChange}
          />

          <FormButton
            text="Add more experience"
            color="#0570fb"
            width={"75%"}
            handleClick={handleAddNewExperience}
          />

          <DivideWrapper>
            <FormButton
              text="Previous"
              color="#0570fb"
              handleClick={routeToPreviousPage}
            />
            <FormButton
              text="Next"
              backgroundColor="#0570fb"
              handleClick={routeToNextPage}
            />
          </DivideWrapper>
        </WorkExperienceForm>
      </WorkExperienceWrapper>
    </WorkExperienceParent>
  );
};

export default WorkExperience;

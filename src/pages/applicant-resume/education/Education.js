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
  getEducationState,
  getResumeState,
  updateResume,
} from "../../../slices/resume";
import {
  addItemToList,
  isObjectValuesEmpty,
  isSomeObjectValuesEmpty,
} from "../../../utils";
import {
  DivideWrapper,
  Heading,
  EducationForm,
  Parent,
  Wrapper,
  Side,
} from "./education.styles";

const Education = () => {
  const [education, seteducation] = useState(useSelector(getEducationState));
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const [isNewEducationAdded, setIsNewEducationAdded] = useState(false);

  const toast = useToast();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (isNewEducationAdded) {
      toast({
        position: "top-left",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            New education added!
          </Box>
        ),
        onCloseComplete: () => {
          setIsNewEducationAdded(false);
        },
      });
    }
  }, [isNewEducationAdded, toast]);

  const data = useSelector(getResumeState);
  // console.log(data);

  const routeToNextPage = () => {
    const isEmpty = isSomeObjectValuesEmpty(education);
    if (isEmpty) {
      setIsFormEmpty(true);
      return;
    }
    const newActiveHeaders = [...data?.activeHeaders, 3];
    const resume = {
      ...data,
      education,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));

    navigate("/applicant/resume/build/skills");
  };

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/work-experience");
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 2);
    const resume = {
      ...data,
      education,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    seteducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearInputs = () => {
    seteducation((prev) => ({
      ...prev,
      uuid: uuidv4(),
      experience: "",
      organization: "",
      website: "",
      final_grade: "",
      city: "",
      country: "",
      from: "",
      to: "",
      main_activities: "",
    }));
  };

  const handleAddNewEducation = () => {
    if (isObjectValuesEmpty(education)) {
      return setIsFormEmpty(true);
    }
    clearInputs();

    setIsNewEducationAdded(true);

    let { education_training, ...rest } = data;

    const resume = {
      ...rest,
      education_training: addItemToList(education_training, education),
    };
    dispatch(updateResume(resume));
  };

  const {
    experience,
    organization,
    website,
    final_grade,
    city,
    country,
    from,
    to,
    main_activities,
  } = education;
  return (
    <Parent>
      <Wrapper>
        <Heading>Education and Training</Heading>

        <EducationForm>
          <FormTextInput
            labelName="Education and training experience"
            placeholder=""
            value={experience}
            name="experience"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Organization providing education and training"
            placeholder=""
            value={organization}
            name="organization"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Website"
            placeholder="enter email address"
            value={website}
            name="website"
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

          <FormTextInput
            labelName="Final grade"
            placeholder="enter email address"
            value={final_grade}
            name="final_grade"
            handleChange={handleChange}
          />

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
            handleClick={handleAddNewEducation}
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
        </EducationForm>
      </Wrapper>
    </Parent>
  );
};

export default Education;

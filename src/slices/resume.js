import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // personal info inputs
  saved: false,
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    contactAddress: "",
    city: "",
    country: "",
    dateOfBirth: "",
    gender: "",
  },
  // work experience inputs
  workExperience: {
    occupation: "",
    company: "",
    email_address: "",
    phone_number: "",
    city: "",
    country: "",
    from: "",
    to: "",
    main_activities: "",
  },

  work_experience: [],
  // education/training inputs
  education: {
    educationExperience: "",
    educationOrganization: "",
    educationWebsite: "",
    educationCity: "",
    educationCountry: "",
    educationStartDate: "",
    educationEndDate: "",
    finalGrade: "",
    main_activities: "",
  },
  education_training: [],

  // listOfEducationExperiences: [],
  // personal skills inputs
  personal_skill: [],
  activeHeaders: [0],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState: { value: initialState },
  reducers: {
    updateResume: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },

    // updateActiveHeaders: (state, action) => {
    //   state.value
    // }
  },
});

// Action creator
export const { updateResume } = resumeSlice.actions;

export const getResumeState = (state) => state.resume.value;

export const getPersonaalInfo = (state) => state.resume.value.personalInfo;

export const getWorkExperienceState = (state) =>
  state.resume.value.workExperience;

export const getPersonalSkillState = (state) =>
  state.resume.value.personal_skill;

export const getEducationState = (state) => state.resume.value.education;

// export const getWorkExperienceState = (state) =>
//   state.resume.value.listOfWorkExperiences;

export default resumeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // personal info inputs
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
    position: "",
    company: "",
    workEmail: "",
    workPhoneNumber: "",
    workCity: "",
    workCountry: "",
    workStartDate: "",
    workEndDate: "",
  },

  listOfWorkExperiences: [],
  // education/training inputs
  education: {
    educationExperience: "",
    educationOrganization: "",
    educationWebsite: "",
    educationCity: "",
    educationCompany: "",
    educationStartDate: "",
    educationEndDate: "",
    fullGrade: "",
  },

  listOfEducationExperiences: [],
  // personal skills inputs
  personalSkills: "",
  activeHeaders: [0],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState: { value: initialState },
  reducers: {
    updateResume: (state, action) => {
      state.value = action.payload;
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

export const getEducationState = (state) => state.resume.value.education;

// export const getWorkExperienceState = (state) =>
//   state.resume.value.listOfWorkExperiences;

export default resumeSlice.reducer;

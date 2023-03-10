import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  contactAddress: "",
  city: "",
  country: "",
  activeHeaders: [0]
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

export default resumeSlice.reducer;

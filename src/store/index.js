import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../slices/resume";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

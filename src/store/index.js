import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../slices/resume";
import userReducer from "../slices/users";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    user: userReducer,
  },
});

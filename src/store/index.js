import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../slices/resume";
import userReducer from "../slices/users";
import modalReducer from "../slices/modal";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    user: userReducer,
    modal: modalReducer,
  },
});

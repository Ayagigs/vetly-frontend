import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpened: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: initialState },

  reducers: {
    updateModalStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateModalStatus } = modalSlice.actions;

export const getEmployersModalStatus = (state) => state.modal.value;

export default modalSlice.reducer;

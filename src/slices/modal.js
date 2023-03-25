import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpened: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: initialState },

  reducers: {
    updateModalStatus: (state, action) => {
      //   console.log(action.payload);
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const { updateModalStatus } = modalSlice.actions;

export const getEmployersModalStatus = (state) => state.modal.value;

export default modalSlice.reducer;

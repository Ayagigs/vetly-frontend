import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullnme: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creator
export const { setUser } = userSlice.actions;

export const getUser = (state) => state.value;

export default userSlice.reducer;

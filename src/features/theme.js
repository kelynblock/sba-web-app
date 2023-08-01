import { createSlice } from "@reduxjs/toolkit";

const setLightMode = { color: "black", backgroundColor: "white" };
const setDarkMode = { color: "white", backgroundColor: "black" };

export const themeSlice = createSlice({
  name: "theme",
  intialState: { value: setLightMode },
  reducers: {
    darkMode: (state) => {
      state.value = setDarkMode;
    },
    LightMode: (state) => {
      state.value = setLightMode;
    },
  },
});

export const { darkMode, lightMode } = themeSlice.actions;
export default themeSlice.reducer;

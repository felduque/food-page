import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer
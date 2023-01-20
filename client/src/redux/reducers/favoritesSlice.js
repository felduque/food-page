import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exist = state.some((fav) => fav.id === action.payload.id);
      if (!exist) {
        state.push(action.payload);
      }
    }
  }
})

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      if(state === true){
        return false;
      }else {
        return action.payload;
      }
    }
  }
})

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
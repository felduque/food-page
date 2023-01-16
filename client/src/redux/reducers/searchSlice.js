import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.push(action.payload)
      //  if(state.length === 0){
      //    state.push(action.payload)
      //  }else{
      //   state.splice(0, 1, action.payload)
      //  }
    }
  },
})


export const { addSearch } = searchSlice.actions

export default searchSlice.reducer
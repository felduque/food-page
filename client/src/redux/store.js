import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducers/searchSlice.js';
import recipeSlice from './reducers/recipeSlice.js';
import filterSlice from './reducers/filterSlice.js';

const store =  configureStore({
  reducer: {
    search: searchSlice,
    recipe: recipeSlice,
    filter: filterSlice,
  },
})

export default store

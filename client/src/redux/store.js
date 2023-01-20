import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducers/searchSlice.js';
import recipeSlice from './reducers/recipeSlice.js';
// import favoritesSlice from './reducers/favoritesSlice.js';

const store =  configureStore({
  reducer: {
    search: searchSlice,
    recipe: recipeSlice,
    // favorite: favoritesSlice,
  },
})

export default store

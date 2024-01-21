import { configureStore } from '@reduxjs/toolkit';
import sliceCardReducer, { fetchRecipes } from '../store/slices/sliceCardSlice';
import searchReducer from '../store/slices/searchSlice' ;
import recipeReducers from '../store/slices/sliceRecepieDetail'

const store = configureStore({
  reducer: {
    sliceCard: sliceCardReducer,
    search: searchReducer,
    recipe :recipeReducers,
    
    
  },
  
});

store.dispatch(fetchRecipes()); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../interfaces';

interface SliceCardState {
  recipes: User[];
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: SliceCardState = {
  recipes: [],
  error: null,
  status: 'idle',
};

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchRecipes = createAsyncThunk('sliceCard/fetchRecipes', async () => {
  const categories = ['Beef', 'Chicken', 'Goat'];
  try {
   

    const promises = categories.map(category =>
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}&apiKey=${apiKey}`)
    );
    const responses = await Promise.all(promises);
    const allRecipes = responses.flatMap(response => response.data.meals);
    const shuffledRecipes = allRecipes.sort(() => Math.random() - 0.5);

    return shuffledRecipes;
  } catch (error) {
    throw new Error('Error fetching data');
  }
});

const sliceCardSlice = createSlice({
  name: 'sliceCard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.recipes = action.payload;
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.error = action.error.message || 'An error occurred';
        state.status = 'failed';
      });
  },
});

export default sliceCardSlice.reducer;

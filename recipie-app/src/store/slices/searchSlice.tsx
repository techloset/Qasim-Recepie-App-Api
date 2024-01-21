import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

interface SearchState {
    searchResults: Meal[] | null;
    status: string;
    error: string | null;
}

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (query: string, thunkAPI) => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        console.log('API Response:', response.data);
        return response.data.meals || [];
      } catch (error) {
        return thunkAPI.rejectWithValue('Error fetching search results');
      }
    }
  );

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: null,
        status: 'idle',
        error: null,
    } as SearchState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchResults = action.payload;
                state.error = null;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.status = 'failed';
                state.error =action.error.message || 'An error occurred'
            });
    },
});

export default searchSlice.reducer;

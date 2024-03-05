import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../instance/AxiosInstance";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface SearchState {
  searchResults: Meal[] | null;
  status: string;
  selectedCard: Meal | null;
  error: string | null;
}

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      return response.data.meals || [];
    } catch (error) {
      return thunkAPI.rejectWithValue("Error fetching search results");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: null,
    status: "idle",
    selectedCard: null,
    error: null,
  } as SearchState,
  reducers: {
    selectCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    clearSelectedCard: (state) => {
      state.selectedCard = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
        state.error = null;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default searchSlice.reducer;

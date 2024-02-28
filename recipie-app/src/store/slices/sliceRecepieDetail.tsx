import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../instance/AxiosInstance";

interface Recipe {
  strIngredient1: string | null;
  strIngredient2: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeState {
  recipeDetails: Recipe | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RecipeState = {
  recipeDetails: null,
  status: "idle",
  error: null,
};

export const fetchRecipeDetails = createAsyncThunk<
  Recipe | null,
  string,
  { rejectValue: string }
>(
  "recipe/fetchRecipeDetails",
  async (idCategory: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idCategory}`
      );
      return response.data.meals?.[0] || null;
    } catch (error) {
      return rejectWithValue("Error fetching recipe details");
    }
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipeDetails = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipeDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default recipeSlice.reducer;

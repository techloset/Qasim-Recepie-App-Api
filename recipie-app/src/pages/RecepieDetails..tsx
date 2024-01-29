import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeDetails } from "../store/slices/sliceRecepieDetail";
import { RootState } from "../store/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

type RouteParams = {
  idCategory: string;
};

interface Recipe {
  strIngredient1: string | null;
  strIngredient2: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
}

const RecipeDetails: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const recipeDetails = useSelector(
    (state: RootState) => state.recipe.recipeDetails
  );
  // const status = useSelector((state: RootState) => state.recipe.status);
  const error = useSelector((state: RootState) => state.recipe.error);
  const { idCategory } = useParams<RouteParams>();

  useEffect(() => {
    if (idCategory) {
      dispatch(fetchRecipeDetails(idCategory));
    }
  }, [dispatch, idCategory]);
  if (error) {
    return <p>{error}</p>;
  }

  if (!recipeDetails) {
    return (
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-sm bg-cover bg-no-repeat lg:p-12 text-center sm:p-4"
        style={{
          backgroundImage: `url(${recipeDetails.strMealThumb})`,
          height: 400,
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h1 className="text-center w-97 text-white text-4xl font-bold font-['Inter'] text-wrap">
                {recipeDetails.strMeal}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="top-16 py-12">
        <div>
          <h1 className="text-3xl font-bold p-5 mx-8 text-start">
            Ingredients
          </h1>
          <ul className="flex flex-wrap p-5 m-5 flex-col items-start justify-start">
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (index) => {
                const ingredientKey = `strIngredient${index}` as keyof Recipe;
                const measureKey = `strMeasure${index}` as keyof Recipe;

                const ingredient: string | null | undefined =
                  recipeDetails?.[ingredientKey];
                const measure: string | null | undefined =
                  recipeDetails?.[measureKey];

                if (ingredient !== undefined && measure !== undefined) {
                  return (
                    <li key={index} className="mx-8 list-disc p-1 text-xl">
                      {`${measure ?? ""} ${ingredient ?? ""}`}
                    </li>
                  );
                }

                return null;
              }
            )}
          </ul>
        </div>
      </div>
      <div className="top-8 py-4">
        <div>
          <h1 className="text-3xl font-semibold p-5 mx-8 text-start">
            Instructions
          </h1>
          <ol className="list-decimal list-inside flex flex-wrap p-5 m-5 flex-col items-start justify-start">
            {recipeDetails.strInstructions
              .split("\n")
              .map((instruction: string, index: number) => (
                <li
                  className="mx-8 p-1 text-wrap lg:text-xl  sm:text-sm sm:text-start "
                  key={index}
                >
                  {instruction.slice(0, 45)}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/slices/sliceCardSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Footer from "../components/footer/Footer";

const RecentlyView = () => {
  const { recipes } = useSelector((state: RootState) => state.sliceCard);
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-3xl text-black font-bold p-3"> Recent Recipes</h2>

      <div className="flex flex-col justify-center items-center flex-wrap ">
        {recipes
          .map((recipe) => (
            <div
              key={recipe.idMeal}
              className="max-w-md mx-auto bg-stone-100 rounded-xl shadow-md overflow-hidden md:max-w-4xl  my-9 transition duration-300 hover:scale-105"
            >
              <div className="md:flex md:mx-5j">
                <div className="md:shrink-0">
                  <Link to={`/mel/${recipe.idMeal}`}>
                    <img
                      className="h-60 w-full object-cover md:h-full md:w-48"
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal || "Recipe Image"}
                    />
                  </Link>
                </div>
                <div className="p-8 m-7">
                  <div className="uppercase tracking-wide text-lg font-semibold py-9">
                    {recipe.strMeal.slice(0, 10)}
                  </div>
                  <div className="">
                    <button className="all-[unset] box-border inline-flex items-center justify-center gap-[80px] lg:px-[33px] lg:py-[9px] px-[23px] py-[2px] relative bg-yellow-300 rounded-[32px] overflow-hidden">
                      <div className="relative w-fit font-bold text-neutral-800 lg:text-[20.7px] text-[16.7px] tracking-[0] leading-[normal]">
                        View Recipe
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
          .slice(0, 4)}
      </div>
      <Footer />
    </div>
  );
};

export default RecentlyView;

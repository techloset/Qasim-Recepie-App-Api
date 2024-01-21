import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/slices/sliceCardSlice';
import { RootState } from '../store/store';
// import { Link } from 'react-router-dom';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const RecentlyView = () => {

  const { recipes, } = useSelector((state: RootState) => state.sliceCard);
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      <h2 className='text-3xl text-black font-bold p-3'> Recent Recipes</h2>

      <div className='flex flex-col justify-center items-center flex-wrap '>
        {recipes.map((recipe) => (



          <div key={recipe.idMeal} className="max-w-md mx-auto bg-stone-100 rounded-xl shadow-md overflow-hidden md:max-w-4xl  my-9 transition duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal || 'Recipe Image'}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-lg font-semibold py-5">{recipe.strMeal.slice(0, 10)}</div>
                <div className="">
                  <button
                    className="all-[unset] box-border inline-flex items-center justify-center gap-[80px] lg:px-[33px] lg:py-[9px] px-[23px] py-[2px] relative bg-yellow-300 rounded-[32px] overflow-hidden"
                  >
                    <div className="relative w-fit font-bold text-neutral-800 lg:text-[20.7px] text-[16.7px] tracking-[0] leading-[normal]">
                      View Recipe
                    </div>
                  </button>
                </div>

              </div>
            </div>
          </div>
          // <div key={recipe.idMeal} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:my-3 lg:py-3 transition duration-300 hover:scale-105 py-6 my-9 ">
          //   <div className="md:flex  object-cover">
          //     <div className="md:shrink-0">
          //       <img
          //         className="h-full  object-cover md:h-full w-48 "
          //         src={recipe.strMealThumb}
          //         alt={recipe.strMeal || 'Recipe Image'}
          //       />
          //     </div>
          //     <div className="p-8 m-4 rounded-3xl ">
          //       <div className="uppercase tracking-wide text-2xl font-semibold">
          //         <h1 className="title-font text-2xl text-center font-semibold ">{recipe.strMeal.slice(0, 10)}</h1>
          //       </div>

          //       
          //     </div>
          //   </div>
          // </div>
        )).slice(0, 4)}
      </div>

    </div>
  )
}

export default RecentlyView
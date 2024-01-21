import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../store/slices/sliceCardSlice';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const SliceCard: React.FC = () => {
  const { recipes, error } = useSelector((state: RootState) => state.sliceCard);
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);



  if (error) {
    return <p>{error}</p>;
  }

  if (recipes.length === 0) {
    return (
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
        </div>
      </div>
    );
  }

 

  return (
    <div className="py-9">
      {error && <p>{error}</p>}

<h1 className='lg:text-3xl font-extrabold text-black md:text-2xl text-xl'>Popular Recipes</h1>

      <div className=" grid grid-cols-1 m-5 place-content-center sm:grid-cols-2 md:m-5 md:grid-cols-3 lg:grid-cols-3 gap-8 my-4 place-items-center text-start ">
        {recipes?.slice(0, 3).map((recipe) => (
          <div key={recipe.idMeal} className="p-2 rounded-full">
            <div className="border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden object-cover transition duration-300 hover:scale-105">
              <Link to={`/mel/${recipe.idMeal}`}>
                <img
                  className="h-52 w-full object-cover md:h-full md:w-80 lg:h-64 rounded-s-3xl"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  
                />
              </Link>
              <div className="p-6 bg-stone-100 ">
                <h1 className="title-font lg:text-2xl text-start font-semibold text-black mb-3 sm:text-sm">
                  {recipe.strMeal.slice(0,9)}
                </h1>
                <div className="">
                  <button
                    className="all-[unset] box-border inline-flex items-center justify-center gap-[80px] lg:px-[33px] lg:py-[9px] px-[23px] py-[3px] relative bg-yellow-300 rounded-[32px] overflow-hidden"
                  >
                    <div className="relative w-fit font-bold text-neutral-800 lg:text-[20.7px] text-[16.7px] tracking-[0] leading-[normal]">
                      View Recipe
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliceCard;
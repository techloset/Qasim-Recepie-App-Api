
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface User {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const SliceCard: React.FC = () => {
  const [recipes, setRecipes] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL!);
        setRecipes(response.data.categories);
      } catch (error) {
    console.log(error);
    
      }
    };
    fetchData();
  }, []);
  const handleClick = (recipe: User) => {
    localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
  }
  return (
    <div className="py-9">
      <div className="m-12"> <h1 className="text-center text-wrap text-3xl font-semibold">Popular Recipes</h1></div>
     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-4">
     
  {recipes.map((recipe) => (
    <div key={recipe.idCategory} className="p-2 rounded-full">


      <div className="border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">


        <Link to={`/slice/${recipe.idCategory}/${encodeURIComponent(recipe.strCategory)}/${encodeURIComponent(recipe.strCategoryThumb)}`}>
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={recipe.strCategoryThumb}
            alt="blog"
            onClick={() => handleClick(recipe)}
          />
        </Link>
        <div className="p-6 bg-slate-100">
          <Link to={`/slice/${recipe.idCategory}/${encodeURIComponent(recipe.strCategory)}/${encodeURIComponent(recipe.strCategoryThumb)}`}>
            <h1 className="title-font text-2xl text-start font-semibold text-gray-900 mb-3">
              {recipe.strCategory}
            </h1>
          </Link>
          <p className="leading-relaxed m-5 text-start w-90 h-12 text-zinc-800 text-xl font-normal font-['Inter']">
            {recipe.strCategoryDescription.slice(0, 70)}
          </p>
          <div className="flex items-center flex-wrap my-5  py-8">
            <Link to={`/slice/${recipe.idCategory}/${encodeURIComponent(recipe.strCategory)}/${encodeURIComponent(recipe.strCategoryThumb)}`}>
              <button className="all-[unset] box-border inline-flex items-center justify-center gap-[80px] px-[33px] py-[9px] relative bg-yellow-300 rounded-[32px] overflow-hidden">
                <div className="relative w-fit font-bold text-neutral-800 text-[20.7px] tracking-[0] leading-[normal] md:px-[29px]">
                  View Recipe
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )).slice(11, 15)}
</div>

    </div>
  );
};

export default SliceCard;

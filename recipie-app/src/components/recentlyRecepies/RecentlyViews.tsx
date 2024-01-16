import React, { useState, useEffect } from 'react';

interface Recipe {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const AnotherPage: React.FC = () => {
  const [recentRecipes, setRecentRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    console.log('Fetching recent recipes from local storage');
    const storedRecipes = localStorage.getItem('recentRecipes');
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes) as Recipe[];
      console.log('Parsed recipes:', parsedRecipes);
      setRecentRecipes(parsedRecipes);
    }
  }, []);
  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <h1>Recent Recipes</h1>
      {recentRecipes.length > 0 ? (
        <div>
          {recentRecipes.map((recipe) => (
            <div key={recipe.idCategory} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48 cursor-pointer"
                    src={recipe.strCategoryThumb}
                    alt={recipe.strCategory}
                    onClick={() => handleRecipeClick(recipe)}
                  />
                </div>
                <div className="p-8 m-4">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <h2>{recipe.strCategory}</h2>
                  </div>
                  <p>{recipe.strCategoryDescription.slice(0, 80)}</p>
                  <div>
                    <button className="all-[unset] box-border inline-flex items-center justify-center gap-[80px] px-[33px] py-[9px] relative bg-yellow-300 rounded-[32px] overflow-hidden" onClick={() => handleRecipeClick(recipe)}>
                      <div className="relative w-fit font-bold text-neutral-800 text-[20.7px] tracking-[0] leading-[normal] md:px-[29px]">
                        View Recipe
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No recent recipes available.</p>
      )}

      {selectedRecipe && (
        <div>
          {/* Display details of the selected recipe */}
          <h2>{selectedRecipe.strCategory}</h2>
          <img src={selectedRecipe.strCategoryThumb} alt={selectedRecipe.strCategory} />
          <p>{selectedRecipe.strCategoryDescription}</p>
        </div>
      )}
    </div>
  );
};

export default AnotherPage;

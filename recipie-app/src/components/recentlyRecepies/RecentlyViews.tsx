import React, { useState, useEffect } from 'react';

interface Recipe {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const AnotherPage: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const storedRecipe = localStorage.getItem('selectedRecipe');
    if (storedRecipe) {
      setSelectedRecipe(JSON.parse(storedRecipe) as Recipe);
    }
  }, []);

  return (
    <div>
      <h1>Recent Recipes</h1>
      {selectedRecipe ? (
        <div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48 lg:"
                  src={selectedRecipe.strCategoryThumb}
                  alt={selectedRecipe?.strCategory || 'Recipe Image'}
                />
              </div>
              <div className="p-8 m-4 ">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <h2>{selectedRecipe.strCategory}</h2>
                </div>

                <p>{selectedRecipe.strCategoryDescription.slice(0, 80)}</p>
                <div>
                  <button className="all-[unset] box-border inline-flex items-center justify-center gap-[80px] px-[33px] py-[9px] relative bg-yellow-300 rounded-[32px] overflow-hidden">
                    <div className="relative w-fit font-bold text-neutral-800 text-[20.7px] tracking-[0] leading-[normal] md:px-[29px]">
                      View Recipe
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No recipe selected.</p>
      )}
    </div>
  );
};

export default AnotherPage;

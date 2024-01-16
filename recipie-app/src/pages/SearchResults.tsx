// SearchResultsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb:string ;
}

const SearchResultsPage: React.FC = () => {
  const { query } = useParams<{ query: string }>(); // Get the search query from the URL parameters
  const [searchResults, setSearchResults] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        setSearchResults(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:m-5 md:grid-cols-3 lg:grid-cols-3 gap-8 my-4 place-content-center place-items-center	">
      {searchResults.map((result) => (
          <div key={result.idMeal} className="p-2 rounded-full" >{result.strMeal}
          <div className="border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">
         <img src={result.strMealThumb} alt="" />
          </div>
          
          
          </div>
        ))}
      </div>
        
     
    </div>
  );
};

export default SearchResultsPage;

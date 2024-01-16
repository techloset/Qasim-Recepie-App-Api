// SearchResultsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

const SearchResultsPage: React.FC = () => {
    const { query } = useParams<{ query: string }>();
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
            <h1> {query}</h1>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:m-5 md:grid-cols-3 lg:grid-cols-4 gap-8 my-4 place-content-center place-items-center	">
                {searchResults.map((result) => (
                    <div key={result.idMeal} className="p-2 rounded-full" >
                        <div className="border-2 border-gray-200 border-opacity-60  overflow-hidden rounded-lg transform transition duration-500 hover:scale-110 ">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center md:w-48 lg:min-w-full" src={result.strMealThumb} alt="" />
                             <h1 className='m-5 font-semibold text-xl'>{result.strMeal}</h1>     
                            <div>

                            </div>
                        </div>


                    </div>
                ))}
            </div>


        </div>
    );
};

export default SearchResultsPage;

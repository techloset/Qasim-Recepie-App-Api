import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../store/slices/searchSlice';
import { RootState } from '../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import icon from '../assets/Icon.png'
const SearchResultsPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    const searchResults = useSelector((state: RootState) => state.search.searchResults);
    const status = useSelector((state: RootState) => state.search.status);

    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        if (query.trim() !== '') {
            console.log('Search Query:', query.trim());
            try {
                await dispatch(fetchSearchResults(query.trim()));
                console.log('API Response:', searchResults);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };




    return (
        <div>
        <div className='flex flex-col items-center justify-center'>
            <div className='py-4'>
                <h1 className='text-2xl font-bold tex p-3'>Search Recepies</h1>
                <div className=" flex items-center justify-center py-5">
                    <div className=" border-1 rounded-3xl bg-stone-100 border hover:border-yellow-300 py-3 px-5 flex flex-row justify-between items-center">
                   
                    <button onClick={handleSearch}><img src={icon} alt="" className='me-5' /></button> 
                        <input
                            type='text'
                            
                            value={query}
                            placeholder="Search your Recepies"
                            className="w-80 outline-none bg-stone-100"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
               
            </div>
            </div>

            <div className='flex py-2  m-3 '><h1 className='text-start text-3xl font-semibold'>Search Results</h1></div>
            {status === 'succeeded' && searchResults && searchResults.length === 0 && (
                <p>No results found for the given query.</p>
            )}
               
            {status === 'succeeded' && searchResults && (

                
              <div className="grid grid-cols-1 m-5 place-content-center sm:grid-cols-2 sm:py-4 md:m-5 md:grid-cols-3 lg:grid-cols-3 gap-8 my-4 place-items-center text-start">

             
             {searchResults.map((meal) => (
                <div key={meal.idMeal} className="p-2 rounded-full transition duration-300 hover:scale-105">
             
                  <div className="border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden object-fill">
                    <Link to={`/mel/${meal.idMeal}`}>
                      <img
                        className="h-52 w-full object-cover md:h-full md:w-80 lg:h-64 rounded-s-3xl"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        
                      />
                    </Link>
                    <div className="p-6 bg-stone-100">
                      <h1 className="title-font text-2xl text-start font-semibold text-gray-900 mb-3">
                        {meal.strMeal}
                      </h1>
                      <div className="">
                        <button
                          className="all-[unset] box-border inline-flex items-center justify-center gap-[80px] px-[33px] py-[9px] relative bg-yellow-300 rounded-[32px] overflow-hidden"
                        >
                          <div className="relative w-fit font-bold text-neutral-800 text-[20.7px] tracking-[0] leading-[normal]">
                            View Recipe
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> 
            )}
        </div>
    );
};

export default SearchResultsPage;





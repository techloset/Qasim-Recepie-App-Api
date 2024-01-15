
import React,{useEffect,useState} from "react";
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
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setRecipes(response.data.categories);
            } catch (error) {
                // Handle error if necessary
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    {recipes.map((recipe) => (
                        <div key={recipe.idCategory} className="p-4 md:w-1/3 rounded-full">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={recipe.strCategoryThumb}
                                    alt="blog"
                                />
                                <div className="p-6 bg-slate-100">
                                    <Link to={`/slice/${recipe.idCategory}/${encodeURIComponent(recipe.strCategory)}/${encodeURIComponent(recipe.strCategoryThumb)}`}>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {recipe.strCategory}
                                        </h1>
                                    </Link>

                                    <p className="leading-relaxed mb-3 text-start">
                                        {recipe.strCategoryDescription.slice(0, 80)}
                                    </p>
                                    <div className="flex items-center flex-wrap">
                                        <button className="all-[unset] box-border inline-flex items-center justify-center gap-[10px] px-[33px] py-[9px] relative bg-yellow-300 rounded-[32px] overflow-hidden">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-neutral-800 text-[20.7px] tracking-[0] leading-[normal]">
                                                View Recipe
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )).slice(0,3)}
                </div>
            </div>
        </div>
    );
};

export default SliceCard;















































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// interface User {
//     idCategory: number;
//     strCategory: string;
//     strCategoryThumb: string;
//     strCategoryDescription: string;


// }


// const SliceCard: React.FC = () => {


//     const [recepies, setRecepies] = useState<User[]>([]);



//     useEffect(() => {
//         const fetchData = async () => {
//             try {




//                 const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');


//                 // console.log('API Response:', response.data.categories);

//                 setRecepies(response.data.categories);
//             } catch (error) {
    

//             } finally {

//             }
//         };
//         fetchData();


//     }, [])

//         ;
//     return (
//         <div>

//             <div className='container px-5 py-24 mx-auto '>
//                 <div className='flex flex-wrap -m-4'>
//                     {recepies.map((recepie) => (<div className="p-4 md:w-1/3 rounded-full">
//                         <div key={recepie.idCategory} className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden ">
//                             <img
//                                 className="lg:h-48 md:h-36 w-full object-cover object-center"
//                                 src={recepie.strCategoryThumb}
//                                 alt="blog"
//                             />
//                             <div className="p-6 bg-slate-100">
//                                 <Link to={`/slice/${recepie.idCategory}/${encodeURIComponent(recepie.strCategory)}/${encodeURIComponent(recepie.strCategoryThumb)}`}>
//                                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                         {recepie.strCategory}
//                                     </h1>
//                                 </Link>

//                                 <p className="leading-relaxed mb-3 text-start">
//                                     {recepie.strCategoryDescription.slice(0, 80)}
//                                 </p>
//                                 <div className="flex items-center flex-wrap ">
//                                     <button className="all-[unset] box-border inline-flex items-center justify-center gap-[10px] px-[33px] py-[9px] relative bg-yellow-300 rounded-[32px] overflow-hidden">
//                                         <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-neutral-800 text-[20.7px] tracking-[0] leading-[normal]">
//                                             View Recipe
//                                         </div>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>)).slice(0, 3)}
//                 </div>


//             </div>
//         </div>


//     )
// }

// export default SliceCard;
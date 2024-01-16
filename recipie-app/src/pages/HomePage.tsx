import React from 'react'
import SliceCard from '../components/sliceItems/SliceCard'
import Navbar from '../components/Header/Navbar'
import Banner from '../components/Header/Banner'
import imageUrl from '../../src/assets/ban.png'

import Footer from '../components/footer/Footer'
import AnotherPage from '../components/recentlyRecepies/RecentlyViews'


const HomePage = () => {
  return (
    <div className=''>
      <Navbar />


      <Banner imageUrl={imageUrl} title="Get Inspired, Cook with passion and enjoy unforgettable moments at the table" />
      <SliceCard />

      <AnotherPage />
      <Footer />
 
    </div>
  )
}

export default HomePage



































































































































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import icon from '../../src/assets/Icon.png';

// interface Category {
//   idCategory: string;
//   strCategory: string;
//   strCategoryThumb: string;
// }

// const SearchPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState<Category[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [filteredData, setFilteredData] = useState<Category[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<{ categories: Category[] }>(
//           'https://www.themealdb.com/api/json/v1/1/categories.php'
//         );
//         setData(response.data.categories);
//       } catch (error) {
//         console.error('Error fetching data from the API:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const filtered = data.filter((item) =>
//       item.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleCategoryClick = (id: string) => {
//     // Navigate to the dynamic category page
//     navigate(`/category/${id}`);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Search bar */}
//       <form onSubmit={handleSearch} className="flex items-center border p-2 rounded-md">
//         <button type="submit" className="ml-2 p-2 text-white rounded-md bg-blue-500">
//           <img src={icon} alt="" />
//         </button>
//         <input
//           type="text"
//           placeholder="Search by category"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="p-2 flex-1 border rounded-md focus:outline-none"
//         />
//       </form>

//       {/* Grid with cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {filteredData.map((item) => (
//           <div
//             key={item.idCategory}
//             className="border p-4 rounded-md cursor-pointer"
//             onClick={() => handleCategoryClick(item.idCategory)}
//           >
//             <img src={item.strCategoryThumb} alt={item.strCategory} className="w-full h-32 object-cover mb-2" />
//             <h3 className="text-lg font-semibold mb-2">{item.strCategory}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;

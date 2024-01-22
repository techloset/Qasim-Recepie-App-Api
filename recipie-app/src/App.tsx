import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Navbar from './components/Header/Navbar';
import SearchResultsPage from './pages/SearchResults';
import RecipeDetails from './pages/RecepieDetails.';
import Footer from './components/footer/Footer';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path="/mel/:idCategory" element={<RecipeDetails />} />
        <Route path='/search' element={<SearchResultsPage />} />
        <Route path='*' element={<ErrorPage />}  />
      </Routes>
    <Footer />





    </div>
  );
}

export default App;























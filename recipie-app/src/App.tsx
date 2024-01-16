import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SlicePage from './pages/SlicePage';
import SearchResultsPage from './pages/SearchResults';
import Navbar from './components/Header/Navbar';
import Footer from './components/footer/Footer';
// import SearchPage from './pages/Search';



function App() {
  return (
    <div className="App">

<Navbar />
      <Routes>

        
        <Route path='/' element={<HomePage />} />
        <Route path="/slice/:idCategory/:strCategory/:strCategoryThumb" element={<SlicePage />} />
        <Route path='/search/:query' element={<SearchResultsPage />} />
        
      </Routes>
      <Footer />


    
    </div>
  );
}

export default App;

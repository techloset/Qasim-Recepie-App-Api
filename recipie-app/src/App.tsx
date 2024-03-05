import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Navbar from "./components/header/Navbar";
import SearchResultsPage from "./pages/SearchResults";
import RecipeDetails from "./pages/RecepieDetails.";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/mel/:idCategory" element={<RecipeDetails />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandinPage from "../pages/LandinPage";
import MovieDetails from "../pages/MovieDetails";

export default function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandinPage />} />
        <Route  path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import NavBar from "../components/NavBar/NavBar";
import Products from "../pages/Products";
import Reports from "../pages/Reports";
import Reports1 from "../pages/Reports1";
import Reports2 from "../pages/Reports2";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports />} />
        <Route exact path="/reports1" element={<Reports1 />} />
        <Route exact path="/reports2" element={<Reports2 />} />
      </Routes>
    </BrowserRouter>
  );
}

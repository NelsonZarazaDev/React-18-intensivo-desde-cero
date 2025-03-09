import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Products from "../pages/Products";
import Reports from "../pages/Reports";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

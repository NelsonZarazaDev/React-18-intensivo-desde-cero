import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MenuPrincipal from "../pages/MenuPrincipal";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exac path="/" element={<MenuPrincipal />} />
      </Routes>
    </BrowserRouter>
  );
}

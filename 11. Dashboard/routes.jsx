import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./src/pages/Home";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

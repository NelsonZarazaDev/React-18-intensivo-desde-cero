import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import PokeList from "./components/PokeList";
import BottomBar from "./components/BottomBar";

function App() {

  return (
    <>
      <TopBar />
      <PokeList />
      <BottomBar />
    </>
  );
}

export default App;

import React from "react";
import Navegation from "../components/Navegation";
import { Light } from "../style/Themes";
import { ThemeProvider } from "styled-components";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import RoadMap from "../components/sections/RoadMap";
import ShowCase from "../components/sections/ShowCase";
import Team from "../components/sections/Team";

export default function MenuPrincipal() {
  return (
    <main>
      <ThemeProvider theme={Light}>
        <Navegation />
        <Home />
        <About />
        <RoadMap />
        <ShowCase />
        <Team />
      </ThemeProvider>
    </main>
  );
}

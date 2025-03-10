import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import "./PokeList.css"

export default function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const getAllPokemons = async () => {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=648&offset=0"
    );
    const data = await respuesta.json();

    function createPokemObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.id}
              id={pokemonStats.id.toString().padStart(3, 0)}
              name={pokemonStats.name}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

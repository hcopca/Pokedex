import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const getPokes = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const { data } = await res;
    setPokemon(data.results);
  };

  useEffect(() => {
    getPokes();
  }, []);

  if (!pokemon) return <p>Loading</p>;
  return (
    <>
      <h3 class="list-group-item text-center border border-primary p-3 mb-2 bg-dark text-white">
        👾🐛🐠🐬 Lista de los primeros 151 Pokemon 🎊 👾🐛🐠🐬
      </h3>
      <div>
        {pokemon.map((e, id) => {
          console.log(e);
          return (
            <div class="row justify-content-center">
              <ul class="list-group col-md-6 col-lg-10 " key="{id}">
                <Link to={`/pokemon/${e.name}`}>
                  <li class="list-group-item text-center col-md-6 col-lg-10">
                    {e.name}
                  </li>
                </Link>
              </ul>
            </div>
          );
        })}
      </div>
      <h5 class="list-group-item text-center border border-primary p-3 mb-2 bg-dark text-white">
        Hugo Copca Lara
      </h5>
    </>
  );
}

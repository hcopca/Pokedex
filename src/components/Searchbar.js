import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupItem, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Searchbar = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <div class="input-group">
      <div class="input-group rounded  row justify-content-center">
        <form class="col-md-6 col-lg-6" onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            class="form-control rounded"
            placeholder="Busca tu Pokemon favorito"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </form>
      </div>

      {pokemonData.map((data, i) => {
        return (
          <div className="container" key={i}>
            <div class="row justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={data.sprites["front_default"]}
                  alt="imagen del pokemon"
                />
                <Card.Body>
                  <Card.Title class="p-3 mb-2 p-3 mb-2 bg-dark text-white">
                    Nombre: {data.name}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem class="p-3 mb-2 p-3 mb-2 bg-dark text-white">
                    Weight: {data.weight} lbs
                  </ListGroupItem>
                  <ListGroupItem class="p-3 mb-2 p-3 mb-2 bg-dark text-white">
                    Type: {pokemonType}
                  </ListGroupItem>
                  <ListGroupItem class="p-3 mb-2 p-3 mb-2 bg-dark text-white">
                    Number of battles: {data.game_indices.length}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Searchbar;

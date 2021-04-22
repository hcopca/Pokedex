import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupItem, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";
import PokemonList from "./PokemonList";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState({});
  const { details } = useParams();

  useEffect(async () => {
    await getPokes();
  }, []);

  async function getPokes() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${details}/`)
      .then(({ data }) => {
        setPokemon(data);
      });
  }

  if (!pokemon) return <p>Loading</p>;

  return (
    <>
      <div class="row justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={pokemon?.sprites?.front_shiny}
            alt="Imagen del pokemon"
          />

          <Card.Body>
            <Card.Title class="p-3 mb-2 p-3 mb-2 bg-dark text-white">
              Nombre: {pokemon?.name}
            </Card.Title>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroupItem>Weight: {pokemon.weight} lbs</ListGroupItem>

            <ListGroupItem>
              Type: {pokemon?.types?.map((e) => e.type.name)}
            </ListGroupItem>

            <ListGroupItem>
              Ability: {pokemon?.abilities?.map((e) => e.ability.name)}
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>

      <div class="row justify-content-center margin-top:">
        <Link to="/">
          <Button variant="warning">Lista de Pokemon</Button> {PokemonList}
        </Link>
      </div>
    </>
  );
}

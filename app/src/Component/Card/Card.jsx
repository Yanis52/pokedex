import { useEffect, useState } from "react";
import Button from "../Button/button.jsx";
const Card = (pokemon) => {
  const pokemonData = pokemon.pokemon;
  const pokedexIsActive = pokemon.isPokedex;
  console.log("card ", pokedexIsActive);
  const [onePokemon, setOnePokemon] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(pokemonData.url);
        const data = await request.json();
        setOnePokemon(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [pokemonData]);

  return (
    <div className="card">
      <div className="card-body">
        <img
          src={onePokemon && onePokemon.sprites.back_default}
          alt="Description de l'image"
        />

        <h1>{onePokemon && onePokemon.name}</h1>

        {onePokemon && (
          <p className="cardTypes">
            types : {onePokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        )}

        {/*  {onePokemon &&
          onePokemon.types.map((type, index) => {
            return (
              <p key={index} className="cardTypes">
                {" "}
                types : {type.type.name}
              </p>
            );
          })} */}

        <p className="cardNumber"> id : {onePokemon && onePokemon.id} </p>
      </div>

      <Button
        pokemonData={
          onePokemon && {
            id: onePokemon.id,
            name: onePokemon.name,
            types: onePokemon.types,
            img: onePokemon.sprites.back_default,
            url: pokemonData.url,
          }
        }
        isPokedex={pokedexIsActive}
      />
    </div>
  );
};

export default Card;

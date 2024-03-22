import { useEffect, useState } from "react";
import ButtonAdd from "../Button/button";
const Card = (pokemon) => {
  const pokemonData = pokemon.pokemon;
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
    <div>
      <img
        src={onePokemon && onePokemon.sprites.back_default}
        alt="Description de l'image"
      />

      <h1>{onePokemon && onePokemon.name}</h1>

      {onePokemon &&
        onePokemon.types.map((type, index) => {
          return (
            <p key={index} className="cardTypes">
              {" "}
              types : {type.type.name}
            </p>
          );
        })}

      <p className="cardNumber"> id : {onePokemon && onePokemon.id} </p>

      <ButtonAdd
        pokemonData={
          onePokemon && {
            id: onePokemon.id,
            name: onePokemon.name,
            types: onePokemon.types,
            img: onePokemon.sprites.back_default,
          }
        }
      />
    </div>
  );
};

export default Card;

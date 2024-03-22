import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../Component/Button/button";
import Grid from "../Component/Grid/Grid";
import SearchBar from "../Component/Searchbar/SearchBar";
import { getAllPokemons } from "../api_service/fetch_api";
const Pokedex = () => {
  const context = useOutletContext();
  const [pokemons, setPokemon] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllPokemons();
      setPokemon(data);
    };
    getData();
  }, []);

  const parsedObjects = context.localData.map((jsonString) =>
    JSON.parse(jsonString)
  );
  return (
    <>
      {" "}
      <Button isDeleteAll={true} pokemonData={[]} isPokedex={false} />
      <Grid searchResults={parsedObjects} isPokedex={"true"} />
      <SearchBar pokemons={pokemons} />
    </>
  );
};

export default Pokedex;

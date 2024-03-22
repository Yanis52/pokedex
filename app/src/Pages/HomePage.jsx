import { useEffect, useState } from "react";
import SearchBar from "../Component/Searchbar/SearchBar";
import { getAllPokemons } from "../api_service/fetch_api";
const HomePage = () => {
  const [pokemons, setPokemon] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllPokemons();
      setPokemon(data);
    };
    getData();
  }, []);

  return (
    <div>
      Salut les amis
      <SearchBar pokemons={pokemons} />
    </div>
  );
};

export default HomePage;

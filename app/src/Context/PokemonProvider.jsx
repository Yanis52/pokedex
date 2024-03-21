import { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../api_service/fetch_api";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllPokemons();
      setAllPokemons(data);
    };
    getData();
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

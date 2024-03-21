import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonProvider";

const HomePage = () => {
  const pokemonContext = useContext(PokemonContext);

  console.log(pokemonContext);

  return <div>Salut les amis</div>;
};

export default HomePage;

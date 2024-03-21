import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonProvider";

const HomePage = () => {
  const { allPokemons } = useContext(PokemonContext);

  console.log("HomePage context", allPokemons);

  return <div>Salut les amis</div>;
};

export default HomePage;

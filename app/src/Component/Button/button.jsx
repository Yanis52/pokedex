import { useNavigate } from "react-router-dom";

const ButtonAdd = (pokemonData) => {
  const pokemonInfo = pokemonData.pokemonData;
  const pokemonInfoJson = JSON.stringify(pokemonInfo);
  const navigationTo = useNavigate();

  const handleClick = () => {
    localStorage.setItem(`pokemon_id${pokemonInfo.id}`, pokemonInfoJson);
    navigationTo("/Pokedex");
  };

  return <div onClick={handleClick}> + </div>;
};

export default ButtonAdd;

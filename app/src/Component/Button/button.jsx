import { useOutletContext } from "react-router-dom";

const Button = (pokemonData) => {
  const pokemonInfo = pokemonData.pokemonData;
  const pokedexIsActive = pokemonData.isPokedex;
  const deleteAll = pokemonData.isDeleteAll;
  const pokemonInfoJson = JSON.stringify(pokemonInfo);
  const context = useOutletContext();

  const handleClickAdd = () => {
    localStorage.setItem(`pokemon_id${pokemonInfo.id}`, pokemonInfoJson);
    context.updateData();
  };

  const handleClickDelete = () => {
    localStorage.removeItem(`pokemon_id${pokemonInfo.id}`, pokemonInfoJson);
    context.updateData();
  };

  const handleClickDeleteAll = () => {
    localStorage.clear();
    context.updateData();
  };

  return (
    <div>
      {pokedexIsActive ? (
        <div className="button-container">
          <div className="button" onClick={handleClickAdd}>
            ajouter
          </div>
          <div className="button delete" onClick={handleClickDelete}>
            enlever
          </div>
        </div>
      ) : deleteAll ? (
        <div className="button-container">
          <div className="button delete" onClick={handleClickDeleteAll}>
            deletteAll
          </div>{" "}
        </div>
      ) : (
        <div className="button-container">
          <div className="button" onClick={handleClickAdd}>
            ajouter
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;

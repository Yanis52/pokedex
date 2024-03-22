import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Grid = (pokedex) => {
  const data = pokedex.searchResults;
  const pokedexIsActive = pokedex.isPokedex;
  const [number, setNumber] = useState([0, 5]);
  console.log("grid", pokedexIsActive);

  useEffect(() => {
    setNumber([0, 5]);
  }, [data]);

  const handleClickRight = () => {
    if (number[1] + 5 >= data.length) {
      return;
    } else {
      return setNumber([number[1], number[1] + 5]);
    }
  };

  const handleClickLeft = () => {
    if (number[1] - 5 == 0) {
      return setNumber([0, 5]);
    } else {
      return setNumber([number[0] - 5, number[0]]);
    }
  };

  return (
    <div
      className="grid "
      style={{
        backgroundColor:
          pokedexIsActive && data.length > 0 ? " #20242a" : "#2b2f39",
      }}
    >
      <div className="arrowLeft" onClick={handleClickLeft}>
        {"<"}
      </div>
      <div className="cardsContainer">
        {data.slice(number[0], number[1]).map((pokemon, index) => {
          return (
            <div key={index}>
              {" "}
              <Card
                pokemon={pokemon}
                isPokedex={pokedexIsActive ? true : false}
              />{" "}
            </div>
          );
        })}
      </div>

      <div className="arrowRight" onClick={handleClickRight}>
        {">"}
      </div>
    </div>
  );
};

export default Grid;

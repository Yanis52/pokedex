import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Grid = (searchResults) => {
  const data = searchResults.searchResults;
  const [number, setNumber] = useState([0, 5]);

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
    <div className="Grid">
      <div className="arrowLeft" onClick={handleClickLeft}>
        {" "}
        clickLeft
      </div>

      {data.slice(number[0], number[1]).map((pokemon, index) => {
        return (
          <div key={index}>
            {" "}
            <Card pokemon={pokemon} />{" "}
          </div>
        );
      })}

      <div className="arrowRight" onClick={handleClickRight}>
        {" "}
        clickDroit
      </div>
    </div>
  );
};

export default Grid;

import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../Context/PokemonProvider";
/* import Grid from "../Grid/Grid"; */

function SearchBar() {
  // add search functionality

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { allPokemons } = useContext(PokemonContext);
  const data = allPokemons;

  useEffect(() => {
    if (data) {
      const results = data.results.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(results);
    }
  }, [searchTerm, data]);

  console.log("results", searchResults);

  return (
    <div>
      <p>coucou</p>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search..."
      />

      {/*     <Grid props={searchResults}/> */}
    </div>
  );
}
// test commit

export default SearchBar;

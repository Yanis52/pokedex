import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";

function SearchBar(pokemons) {
  // add search functionality

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const data = pokemons.pokemons;
  console.log(data);

  useEffect(() => {
    if (data) {
      const results = data.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(results);
    }
  }, [searchTerm, data]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search..."
      />

      <Grid searchResults={searchResults} />
    </div>
  );
}
// test commit

export default SearchBar;

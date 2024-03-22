import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";

function SearchBar(pokemons) {
  // add search functionality

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const data = pokemons.pokemons;

  useEffect(() => {
    if (data) {
      const results = data.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(results);
    }
  }, [searchTerm, data]);

  return (
    <div className="search_container">
      <input
        className="search"
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

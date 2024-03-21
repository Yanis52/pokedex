import SearchBar from "./Component/Searchbar/SearchBar";
import PokemonProvider from "./Context/PokemonProvider";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <>
      <PokemonProvider>
        <HomePage />
        <SearchBar />
      </PokemonProvider>
    </>
  );
}

export default App;

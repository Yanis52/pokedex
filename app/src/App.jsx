<<<<<<< Updated upstream
import PokemonProvider from "./Context/PokemonProvider";
=======
import SearchBar from "./Component/Searchbar/SearchBar";
>>>>>>> Stashed changes
import HomePage from "./Pages/HomePage";
function App() {
  console.log("salut");
  return (
    <>
<<<<<<< Updated upstream
      <PokemonProvider>
        <HomePage />
      </PokemonProvider>
=======
      <HomePage />
      <SearchBar></SearchBar>
>>>>>>> Stashed changes
    </>
  );
}

export default App;

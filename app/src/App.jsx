import SearchBar from "./Component/Searchbar/SearchBar";
import PokemonProvider from "./Context/PokemonProvider";
import HomePage from "./Pages/HomePage";
import Header from "./header";

function App() {
  return (
    <>
      <PokemonProvider>
        <Header/>
        <HomePage />
        <SearchBar />
      </PokemonProvider>
    </>
  );
}

export default App;

import PokemonProvider from "./Context/PokemonProvider";
import HomePage from "./Pages/HomePage";
function App() {
  console.log("salut");
  return (
    <>
      <PokemonProvider>
        <HomePage />
      </PokemonProvider>
    </>
  );
}

export default App;

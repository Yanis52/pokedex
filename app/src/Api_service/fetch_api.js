export async function getAllPokemons() {
  try {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await request.json();
    return data.results;
  } catch (error) {
    console.log(error);

    return error;
  }
}

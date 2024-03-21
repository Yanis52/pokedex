export async function getAllPokemons() {
  try {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
    const data = await request.json();

    return data;
  } catch (error) {
    console.log(error);

    return error;
  }
}


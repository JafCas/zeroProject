interface PokeDataReturn {
  pokemonSprite: string;
  pokemonName: string;
  pokemonId: number;
}

/**
 * Function to call the Pokemon API and get each Pokemon Data.
 * @param pokemonUrl the endpoint where the function will get the data from.
 * @returns Pokemon data to be displayed in Poke Cards.
 */
const fetchPokeData = async (pokemonUrl: string): Promise<PokeDataReturn> => {
  try {
    const pokemonResponse = await fetch(pokemonUrl);
    const pokeJson = await pokemonResponse.json();
    const formatPokemonName =
      pokeJson.name.charAt(0).toUpperCase() + pokeJson.name.slice(1);

    const pokemonData: PokeDataReturn = {
      pokemonSprite: pokeJson.sprites.front_default,
      pokemonName: formatPokemonName,
      pokemonId: pokeJson.id,
    };

    return pokemonData;
  } catch (error) {
    console.log('there was an error: ', error);

    throw error;
  }
};

export default fetchPokeData;

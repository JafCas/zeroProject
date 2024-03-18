export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export interface PokeCardDataReturn {
  pokemonId: number | null;
  pokemonName: string | null;
  pokemonSprite?: string;
  pokemonTypes?: PokemonType[];
}

/**
 * Function to call the Pokemon API and get each Pokemon Data.
 * @param pokemonUrls the endpoint where the function will get the data from.
 * @returns Pokemon data to be displayed in Poke Cards.
 */
const fetchPokeCardData = async (
  pokemonUrls?: string[],
): Promise<{ pokeData: PokeCardDataReturn[] }> => {
  try {
    if (!pokemonUrls || pokemonUrls.length === 0) {
      return { pokeData: [] };
    }

    //Promise array for the API calls.
    const pokeApiResponses = pokemonUrls.map(async url => {
      const response = await fetch(url);
      const pokeJson = await response.json();
      const formatPokemonName =
        pokeJson.name.charAt(0).toUpperCase() + pokeJson.name.slice(1);

      return {
        pokemonId: pokeJson.id,
        pokemonName: formatPokemonName,
        pokemonSprite: pokeJson.sprites.front_default,
        pokemonTypes: pokeJson.types,
      } as PokeCardDataReturn;
    });

    const pokeData = await Promise.all(pokeApiResponses);

    return { pokeData };
  } catch (error) {
    console.log('error: ', error);

    throw { data: null, isLoading: false, error };
  }
};

export default fetchPokeCardData;

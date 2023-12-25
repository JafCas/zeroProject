import React, { useEffect, useState } from 'react';
import { FlatList, Modal, SafeAreaView, View } from 'react-native';

import PokeCard, { pokeCardProps } from '../../cards/pokeCard/pokeCard';

import getStyles from './styles';
import { Pokimon } from '../../../screens/mainInfo/MainInfo';
import fetchPokeData, { PokeDataReturn } from '../../../services/fetchPokeData';

interface PokeSelectorModalProps {
  isModalVisible: boolean;
  onDisplayModal: () => void;
  pokeData: Pokimon[];
}

const PokeSelectorModal = ({
  isModalVisible,
  onDisplayModal,
  pokeData,
}: PokeSelectorModalProps) => {
  const styles = getStyles();

  const [pokemonsData, setPokemonData] = useState<PokeDataReturn[]>([
    {
      pokemonSprite: undefined,
      pokemonName: null,
      pokemonId: null,
    },
  ]);
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Mandar el fetch a una funcion exportable para solo mandarlo a llamar
  // y con ello, regresar la data del pokemon en cuestion

  const getPokemonInfo = async (pokemonUrl: string[]) => {
    console.log('pokemon URL received: ', pokemonUrl);

    try {
      setIsLoading(true);
      const pokeApiResponse = await fetchPokeData(pokemonUrl);
      const pokeCardInfo = pokeApiResponse.data;
      console.log('pokeCardInfo', pokeCardInfo);
      setPokemonData(pokeCardInfo);
    } catch (error) {
      console.log('error al obtener la pokemonData: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const RenderPokeCards = ({ pokeItem }: { pokeItem: PokeDataReturn }) => {
    return (
      <PokeCard
        key={pokeItem.pokemonId} // Asegúrate de proporcionar una clave única si estás utilizando una lista de componentes
        onPress={onDisplayModal}
        isLoading={isLoading}
        data={pokeItem}
      />
    );
  };

  /**
   * Map and store the first 10 pokemon url to display through cards.
   * @param pokimonList The pokemon list whose url will be set into the state.
   */
  const callForPokeData = (pokimonList: Pokimon[]) => {
    // obtain the first 10 URL
    const firsUrls = pokimonList.slice(0, 10).map(pokemon => pokemon.url);
    setPokemons(prevPokemons => [...prevPokemons, ...firsUrls]);
  };

  useEffect(() => {
    if (pokeData.length > 0) {
      callForPokeData(pokeData);
    }
  }, [pokeData]);

  useEffect(() => {
    if (pokemons.length > 0) {
      getPokemonInfo(pokemons);
    }
  }, [pokemons]);

  console.log('state changed in pokeselector');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        console.log('cerrao');
      }}
    >
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              flex: 1,
              width: '100%',
            }}
          >
            <FlatList
              style={{ borderRadius: 16, margin: 8 }}
              data={pokemonsData}
              renderItem={({ item: pokeItem }) => (
                <RenderPokeCards pokeItem={pokeItem} />
              )}
              // keyExtractor={item => item.pokemonNumber?.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

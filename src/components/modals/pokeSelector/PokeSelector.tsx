import React, { useEffect, useState } from 'react';
import { FlatList, Modal, SafeAreaView, View } from 'react-native';

import fetchPokeData, { PokeDataReturn } from '../../../services/fetchPokeData';

import getStyles from './styles';

import PokeCard from '../../cards/pokeCard/pokeCard';

import { Pokimon } from '../../../screens/mainInfo/MainInfo';

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

  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsData, setPokemonData] = useState<PokeDataReturn[]>([
    {
      pokemonSprite: undefined,
      pokemonName: null,
      pokemonId: null,
    },
  ]);

  // TODO: Mandar el fetch a una funcion exportable para solo mandarlo a llamar
  // y con ello, regresar la data del pokemon en cuestion

  const getPokemonInfo = async (pokemonUrl: string[]) => {
    try {
      setIsLoading(true);
      const { pokeData: data } = await fetchPokeData(pokemonUrl);
      const pokeCardInfo = data;
      console.log('pokeCardInfo', pokeCardInfo);
      setPokemonData(pokeCardInfo);
    } catch (error) {
      console.log('error al obtener la pokemonData: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Map and store the first 10 pokemon url to display through cards.
  useEffect(() => {
    if (pokeData.length > 0) {
      const firsUrls = pokeData.slice(0, 10).map(pokemon => pokemon.url);
      getPokemonInfo(firsUrls);
    }
  }, [pokeData]);

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
          <View style={{ flex: 1, width: '100%' }}>
            <FlatList
              style={{ borderRadius: 16, margin: 8 }}
              data={pokemonsData}
              renderItem={({ item: pokeItem }) => (
                <PokeCard
                  key={pokeItem.pokemonId}
                  onPress={onDisplayModal}
                  isLoading={isLoading}
                  data={pokeItem}
                />
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

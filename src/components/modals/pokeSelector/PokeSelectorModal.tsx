import React, { useEffect, useState } from 'react';
import { FlatList, Modal, SafeAreaView, View } from 'react-native';

import fetchPokeCardData, {
  PokeCardDataReturn,
} from '../../../services/fetchPokeData';

import getStyles from './styles';

import PokeCard from '../../cards/pokeCard/pokeCard';

import { Pokimon } from '../../../screens/mainInfo/MainInfo';
import { useAppDispatch } from '../../../app/hooks';
import {
  CARD_DATA_SET_ID,
  CARD_DATA_SET_NAME,
} from '../../../counter/pokeDataSlice';

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
  const [pokeCardsData, setPokeCardsData] = useState<PokeCardDataReturn[]>([
    {
      pokemonSprite: undefined,
      pokemonName: null,
      pokemonId: null,
    },
  ]);

  /**
   * Makes the API call and set isLoading value.
   * @param pokemonUrl the list of Url that will be used to make the API call.
   */
  const getPokemonInfo = async (pokemonUrl: string[]) => {
    try {
      setIsLoading(true);
      const { pokeData: data } = await fetchPokeCardData(pokemonUrl);
      const pokeCardInfo = data;
      setPokeCardsData(pokeCardInfo);
    } catch (error) {
      console.log('error al obtener la pokemonData: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const dispatch = useAppDispatch();

  const onCardPress = (pokemonName: string, pokemonId: number) => {
    onDisplayModal();
    dispatch(CARD_DATA_SET_NAME(pokemonName));
    dispatch(CARD_DATA_SET_ID(pokemonId));
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
          {/* TODO: Add empty cards and modal content for empty scenario */}
          {pokeCardsData && !isLoading ? (
            <FlatList
              style={styles.flatListView}
              data={pokeCardsData}
              renderItem={({ item: pokeItem }) =>
                pokeItem ? (
                  <PokeCard
                    key={pokeItem.pokemonId}
                    onPress={() =>
                      onCardPress(
                        pokeItem.pokemonName || '',
                        pokeItem.pokemonId || 0,
                      )
                    }
                    isLoading={isLoading}
                    data={pokeItem}
                  />
                ) : null
              }
            />
          ) : null}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

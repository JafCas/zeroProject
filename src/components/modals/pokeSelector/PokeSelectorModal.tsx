import React, { useEffect, useState } from 'react';
import { FlatList, Modal, SafeAreaView, View } from 'react-native';

import fetchPokeCardData, {
  PokeCardDataReturn,
  PokemonType,
} from '../../../services/fetchPokeData';

import getStyles from './styles';

import PokeCard from '../../cards/pokeCard/PokeCard';

import { Pokimon } from '../../../screens/mainInfo/MainInfo';
import { useAppDispatch } from '../../../context/redux/hooks';
import {
  CARD_DATA_SET_ID,
  CARD_DATA_SET_NAME,
  CARD_DATA_SET_TYPES,
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
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pokeCardsData, setPokeCardsData] = useState<PokeCardDataReturn[]>([
    {
      pokemonSprite: undefined,
      pokemonName: null,
      pokemonId: 0,
      pokemonTypes: [],
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

  const onCardPress = (
    pokemonName: string,
    pokemonId: number,
    pokemonTypes: PokemonType[],
  ) => {
    let pokemonTypesArray: string[] = [];
    pokemonTypes.map(type => {
      pokemonTypesArray.push(type.type.name);
    });

    onDisplayModal();
    dispatch(CARD_DATA_SET_NAME(pokemonName));
    dispatch(CARD_DATA_SET_ID(pokemonId));
    dispatch(CARD_DATA_SET_TYPES(pokemonTypesArray));
  };

  // Map and store the first 10 pokemon url to display through cards.
  useEffect(() => {
    if (pokeData.length > 0) {
      const firsUrls = pokeData.slice(0, 16).map(pokemon => pokemon.url);
      getPokemonInfo(firsUrls);
    }
  }, [pokeData]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        console.log('cerrao');
      }}
    >
      <SafeAreaView style={styles.modalBackgroundView}>
        <View style={styles.modalView}>
          {/* TODO: Add empty cards and modal content for empty scenario */}
          {!isLoading && pokeCardsData ? (
            <FlatList
              data={pokeCardsData}
              keyExtractor={item => item.pokemonId.toString()}
              renderItem={({ item }) => (
                <PokeCard
                  onPress={() => {
                    onCardPress(
                      item.pokemonName || '',
                      item.pokemonId || 0,
                      item.pokemonTypes || [],
                    );
                  }}
                  isLoading={isLoading}
                  data={item}
                />
              )}
              refreshing={isRefreshing}
              onRefresh={() => {
                console.log('refreshing');
              }}
              onEndReached={() => {
                console.log('end reached');
              }}
              showsVerticalScrollIndicator={false}
              style={styles.flatListView}
            />
          ) : null}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

import React, { useEffect, useState } from 'react';
import { Modal, SafeAreaView, View } from 'react-native';

import PokeCard from '../../cards/pokeCard/pokeCard';

import getStyles from './styles';
import { Pokimon } from '../../../screens/mainInfo/MainInfo';

interface PokeSelectorModalProps {
  isModalVisible: boolean;
  onDisplayModal: () => void;
  pokeData?: Pokimon[];
}

const PokeSelectorModal = ({
  isModalVisible,
  onDisplayModal,
  pokeData,
}: PokeSelectorModalProps) => {
  const [pokemonSprite, setPokemonSprite] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonId, setPokemonId] = useState(0);

  const getPokemonInfo = async (pokemonUrl: string) => {
    try {
      const pokemonResponse = await fetch(pokemonUrl);
      const pokeJson = await pokemonResponse.json();
      console.log('quiero ver un cleffa: ', pokeJson);
      setPokemonSprite(pokeJson.sprites.front_default);
      const formatPokemonName =
        pokeJson.name.charAt(0).toUpperCase() + pokeJson.name.slice(1);
      setPokemonName(formatPokemonName);
      setPokemonId(pokeJson.id);
    } catch (error) {
      console.log('there was an error: ', error);
    }
  };

  console.log('cambio el esteit del selector');

  const styles = getStyles();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onShow={() => {
        pokeData?.map((pokimon, index) => {
          if (index === 172) {
            getPokemonInfo(pokimon.url);
          }
        });
      }}
      visible={isModalVisible}
      onRequestClose={() => {
        console.log('cerrao');
      }}
    >
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <PokeCard
            onPress={onDisplayModal}
            imageUrl={pokemonSprite}
            pokemonName={pokemonName}
            pokemonNumer={pokemonId}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

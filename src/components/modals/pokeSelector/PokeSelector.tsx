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
  const [pokemonUrl, setPokemonUrl] = useState('');
  //   const handleCallback = displayModal;
  console.log('pokeData: ', pokeData);

  const getPokemonInfo = async (pokemonUrl: string) => {
    try {
      const pokemonResponse = await fetch(pokemonUrl);
      const pokeJson = await pokemonResponse.json();
      console.log('quiero ver un cleffa: ', pokeJson);
    } catch (error) {
      console.log('there was an error: ', error);
    }
  };

  useEffect(() => {
    // console.log(
    //   'Quiero ver a Cleffa: ',
    pokeData?.map((pokimon, index) => {
      if (index === 172) {
        console.log('pokimon.url for index', index, ': ', pokimon.url);
        getPokemonInfo(pokimon.url);
      }
    });
    // );
  });

  const styles = getStyles();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        console.log('cerrao');
      }}
    >
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <PokeCard onPress={onDisplayModal} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

import React, { useEffect, useState } from 'react';
import { Modal, SafeAreaView, ScrollView, View } from 'react-native';

import PokeCard from '../../cards/pokeCard/pokeCard';

import getStyles from './styles';
import { Pokimon } from '../../../screens/mainInfo/MainInfo';
import fetchPokeData from '../../../services/fetchPokeData';

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

  // TODO: Mandar el fetch a una funcion exportable para solo mandarlo a llamar
  // y con ello, regresar la data del pokemon en cuestion
  const getPokemonInfo = async (pokemonUrl: string) => {
    fetchPokeData(pokemonUrl)
      .then(pokemonData => {
        setPokemonId(pokemonData.pokemonId);
        setPokemonName(pokemonData.pokemonName);
        setPokemonSprite(pokemonData.pokemonSprite);
      })
      .catch(error => {
        console.log('Error al obtener la pokemonData: ', error);
      });
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
          <ScrollView style={{ width: '100%', borderRadius: 16 }}>
            <PokeCard
              onPress={onDisplayModal}
              imageUrl={pokemonSprite}
              pokemonName={pokemonName}
              pokemonNumer={pokemonId}
            />
            <PokeCard
              onPress={onDisplayModal}
              imageUrl={pokemonSprite}
              pokemonName={pokemonName}
              pokemonNumer={pokemonId}
            />
            <PokeCard
              onPress={onDisplayModal}
              imageUrl={pokemonSprite}
              pokemonName={pokemonName}
              pokemonNumer={pokemonId}
            />
            <PokeCard
              onPress={onDisplayModal}
              imageUrl={pokemonSprite}
              pokemonName={pokemonName}
              pokemonNumer={pokemonId}
            />
            <PokeCard
              onPress={onDisplayModal}
              imageUrl={pokemonSprite}
              pokemonName={pokemonName}
              pokemonNumer={pokemonId}
            />
            <PokeCard
              onPress={onDisplayModal}
              imageUrl={pokemonSprite}
              pokemonName={pokemonName}
              pokemonNumer={pokemonId}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

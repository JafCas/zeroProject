import React, { useState } from 'react';
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
  const styles = getStyles();

  const [pokemonSprite, setPokemonSprite] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonId, setPokemonId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Mandar el fetch a una funcion exportable para solo mandarlo a llamar
  // y con ello, regresar la data del pokemon en cuestion
  const getPokemonInfo = async (pokemonUrl: string) => {
    fetchPokeData(pokemonUrl)
      .then(pokemonData => {
        setIsLoading(true);
        setPokemonId(pokemonData.data.pokemonId);
        setPokemonName(pokemonData.data.pokemonName);
        setPokemonSprite(pokemonData.data.pokemonSprite);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error al obtener la pokemonData: ', error);
      });
  };

  const renderPokeCards = () => {
    const pokeCards = [];

    for (let i = 0; i < 10; i++) {
      pokeCards.push(
        <PokeCard
          key={i} // Asegúrate de proporcionar una clave única si estás utilizando una lista de componentes
          onPress={onDisplayModal}
          isLoading={isLoading}
          imageUrl={pokemonSprite}
          pokemonName={pokemonName}
          pokemonNumber={pokemonId}
        />,
      );
    }

    return pokeCards;
  };

  console.log('cambio el esteit del selector');

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
            {renderPokeCards()}
            {/* )} */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

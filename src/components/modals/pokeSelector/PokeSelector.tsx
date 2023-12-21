import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import PokeCard from '../../cards/pokeCard/pokeCard';

import getStyles from './styles';
import { Pokimon } from '../../../screens/mainInfo/MainInfo';
import fetchPokeData from '../../../services/fetchPokeData';

interface PokeSelectorModalProps {
  isModalVisible: boolean;
  onDisplayModal: () => void;
  pokeData?: Pokimon[];
}

const DATA: PokeData[] = [
  {
    pokemonName: 'First Name',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png',
    pokemonNumber: 1,
  },
  {
    pokemonName: 'Second Name',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png',
    pokemonNumber: 2,
  },
  {
    pokemonName: 'Third Name',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png',
    pokemonNumber: 3,
  },
];

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

  const RenderPokeCards = ({ pokeItem }: { pokeItem: PokeData }) => {
    return (
        <PokeCard
        // key={i} // Asegúrate de proporcionar una clave única si estás utilizando una lista de componentes
          onPress={onDisplayModal}
          isLoading={isLoading}
        data={pokeItem}
        // style={}
      />
      );
    // );
    // }

    // return pokeCards;
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
          <View
            style={{
              flex: 1,
              width: '100%',
            }}
          >
            {/* {renderPokeCards()} */}
            <FlatList
              style={{ borderRadius: 16, margin: 8 }}
              data={DATA}
              renderItem={({ item: pokeItem }) => (
                <RenderPokeCards pokeItem={pokeItem} />
              )}
              // keyExtractor={item => item.pokemonNumber?.toString()}
              // style
            />
            {/* )} */}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

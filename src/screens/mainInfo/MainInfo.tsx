import React, { createContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Components
import MyPokeDisplay from '../myPokeDisplay/MyPokeDisplay';

// Styles
import { optionsArray } from '../../components/misc/optionsArray';
import PokeSelectorModal from '../../components/modals/pokeSelector/PokeSelector';
import StatusButton from '../../components/buttons/statusButton/StatusButton';

import { HEADER_TEXT } from '../../constants';

import getStyles from './styles';

import { useTheme } from '../../context/ThemeContext';
import PokeCard from '../../components/cards/pokeCard/pokeCard';

export type Pokimon = {
  name: string;
  url: string;
};

export const UrlContext = createContext('');

export const FlagContext = createContext(false);
// export const CleffaContext = createContext(Response);

const MainInfo = () => {
  const url = 'https://pokeapi.co/api/v2/';
  const endpoint = 'pokemon?limit=173&offset=0';
  const cleffaEndpoint = 'pokemon?limit=173';
  const uri = `${url}${cleffaEndpoint}`;
  const cleffaUri = `${url}${cleffaEndpoint}`;

  const [isStatusActive, setIsStatusActive] = useState(false);
  const [pokemonResults, setPokemonResults] = useState<Pokimon[]>([]);
  const [displayImage, setDisplayImage] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState<Response>();
  // const [isLoading, setIsLoading] = useState(true);

  const isDarkMode = useTheme();
  const styles = getStyles(isDarkMode, isStatusActive);

  const photoUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png';

  const onStatusTrigger = async () => {
    console.log('apretao');
    setIsStatusActive(!isStatusActive);
    setDisplayImage(!displayImage);
    setIsModalVisible(true);
    try {
      const response = await fetch(uri);
      const json = await response.json();
      setPokemonResults(json.results);
      setPokemonInfo(response);
      // console.log('json: ', json);
      console.log('json.results: ', json.results);
      // console.log('response: ', response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(pokemonResults.map(pokimon => pokimon.name));
  }, [pokemonResults]);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <CleffaContext.Provider value={pokemonInfo}> */}
      <PokeSelectorModal
        isModalVisible={isModalVisible}
        pokeData={pokemonResults}
        onDisplayModal={() => {
          setIsModalVisible(false);
        }}
      />
      {/* </CleffaContext.Provider> */}
      <View style={styles.container}>
        <View style={styles.statusView}>
          <TouchableOpacity onPress={onStatusTrigger}>
            <FlagContext.Provider value={isStatusActive}>
              <StatusButton />
            </FlagContext.Provider>
          </TouchableOpacity>
        </View>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.headerText}>{HEADER_TEXT}</Text>
          </View>
          <View style={styles.square} />
        </View>
        <View style={styles.optionsView}>
          {optionsArray.map((option, index) => {
            return (
              <TouchableOpacity key={index}>
                <Text style={styles.optionsText}>
                  {option.name.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.infoView}>
          <UrlContext.Provider value={photoUrl}>
            <MyPokeDisplay isImageDisplayable={displayImage} />
          </UrlContext.Provider>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

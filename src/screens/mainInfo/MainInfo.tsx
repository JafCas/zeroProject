import React, { createContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Components
import MyPokeDisplay from '../myPokeDisplay/MyPokeDisplay';

// Styles
import { optionsArray } from '../../components/misc/optionsArray';
import StatusButton from '../../components/buttons/statusButton/StatusButton';

import { HEADER_TEXT } from '../../constants';

import getStyles from './styles';

import { useTheme } from '../../context/ThemeContext';

type Pokimon = {
  name: string;
  url: string;
};

export const UrlContext = createContext('');

export const FlagContext = createContext(false);

const MainInfo = () => {
  const url = 'https://pokeapi.co/api/v2/';
  const endpoint = 'pokemon?limit=173&offset=0';
  const uri = `${url}${endpoint}`;

  const [isStatusActive, setIsStatusActive] = useState(false);
  const [testPokemon, setTestPokemon] = useState<Pokimon[]>([]);
  const [displayImage, setDisplayImage] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const isDarkMode = useTheme();
  const styles = getStyles(isDarkMode, isStatusActive);

  const photoUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png';

  const onStatusTrigger = async () => {
    console.log('apretao');
    setIsStatusActive(!isStatusActive);
    setDisplayImage(!displayImage);
    try {
      const response = await fetch(uri);
      const json = await response.json();
      setTestPokemon(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(testPokemon.map(pokimon => pokimon.name));
  }, [testPokemon]);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.statusButtonContainer}>
          <TouchableOpacity onPress={onStatusTrigger}>
            <FlagContext.Provider value={isStatusActive}>
              <StatusButton />
            </FlagContext.Provider>
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerText}>{HEADER_TEXT}</Text>
          </View>
          <View style={styles.square} />
        </View>
        <View style={styles.optionsContainer}>
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
        <View style={styles.infoContainer}>
          <UrlContext.Provider value={photoUrl}>
            <MyPokeDisplay isImageDisplayable={displayImage} />
          </UrlContext.Provider>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

import React, { createContext, useState } from 'react';
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

import config from '../../config';

export type Pokimon = {
  name: string;
  url: string;
};

export const UrlContext = createContext('');
export const FlagContext = createContext(false);
// export const CleffaContext = createContext(Response);

const MainInfo = () => {
  const url = config.API_URL;
  // const endpoint = 'pokemon?limit=173&offset=0';
  const cleffaEndpoint = 'pokemon?limit=173';
  // const uri = `${url}${endpoint}`;
  const cleffaUri = `${url}${cleffaEndpoint}`;

  const [isStatusActive, setIsStatusActive] = useState(false);
  const [pokemonResults, setPokemonResults] = useState<Pokimon[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const isDarkMode = useTheme();
  const styles = getStyles(isDarkMode, isStatusActive);

  const photoUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png';

  const onStatusTrigger = async () => {
    setIsStatusActive(!isStatusActive);
    setIsModalVisible(true);
    try {
      setIsLoading(true);
      const response = await fetch(cleffaUri);
      const json = await response.json();
      console.log('fetch response', response);
      if (response.status === 200) {
        setPokemonResults(json.results);
        console.log('json that has been sent', json.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log('cambio el esteit');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {isModalVisible && !isLoading && (
        <PokeSelectorModal
          isModalVisible={isModalVisible}
          pokeData={pokemonResults}
          onDisplayModal={() => {
            setIsModalVisible(false);
          }}
        />
      )}
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
            <MyPokeDisplay isImageDisplayable={true} />
          </UrlContext.Provider>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

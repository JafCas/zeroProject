import React, { createContext, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Components
import MyPokeDisplay from '../myPokeDisplay/MyPokeDisplay';

// Styles
import { optionsArray } from '../../components/misc/optionsArray';
import PokeSelectorModal from '../../components/modals/pokeSelector/PokeSelectorModal';
import StatusButton from '../../components/buttons/statusButton/StatusButton';

import getStyles from './styles';

import { useTheme } from '../../context/ThemeContext';

import config from '../../config';
import { useAppDispatch, useAppSelector } from '../../context/redux/hooks';

import { CARD_DATA_SET_NAME } from '../../counter/pokeDataSlice';
import TypeBadge from '../../components/badges/TypeBadge';
import TestSlider from '../../components/sliders/TestSlider';

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

  const pickedName = useAppSelector(state => state.pokemonData.pokemonName);
  const pickedId = useAppSelector(state => state.pokemonData.pokemonId);
  const pickedTypes = useAppSelector(state => state.pokemonData.pokemonTypes);

  const dispatch = useAppDispatch();

  const isDarkMode = useTheme();
  const styles = getStyles(isDarkMode, isStatusActive);

  const photoUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png';

  const isPokemonSelected = pickedId !== 0;

  const onStatusTrigger = async () => {
    setIsModalVisible(true);
    try {
      setIsLoading(true);
      const response = await fetch(cleffaUri);
      const json = await response.json();
      if (response.status === 200) {
        setPokemonResults(json.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      // setIsStatusActive(isPokemonSelected);
    }
  };

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
            <FlagContext.Provider value={isPokemonSelected}>
              <StatusButton statusId={pickedName} />
            </FlagContext.Provider>
          </TouchableOpacity>
        </View>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.headerText}>{`#${pickedId}`}</Text>
          </View>
          {pickedTypes.length > 0 ? (
            [
              pickedTypes.map((type, index) => {
                return <TypeBadge key={index} iconName={type} />;
              }),
            ]
          ) : (
            <TypeBadge iconName="pokeball" />
          )}
        </View>
        <View style={styles.optionsView}>
          {optionsArray.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => {}}>
              <Text style={styles.optionsText}>
                {option.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoView}>
          <TestSlider />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

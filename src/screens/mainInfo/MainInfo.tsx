import React, { createContext, useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Styles
import PokeSelectorModal from '../../components/modals/pokeSelector/PokeSelectorModal';
import StatusButton from '../../components/buttons/statusButton/StatusButton';

import getStyles from './styles';

import { useTheme } from '../../context/ThemeContext';

import config from '../../config';
import { useAppSelector } from '../../context/redux/hooks';

import TypeBadge from '../../components/badges/TypeBadge';
import SliderContainer from '../../components/slider/SliderContainer';

export type Pokimon = {
  name: string;
  url: string;
};

export const UrlContext = createContext('');
export const FlagContext = createContext(false);

const MainInfo = ({ navigation }) => {
  const url = config.API_URL;
  // const endpoint = 'pokemon?limit=173&offset=0';
  const cleffaEndpoint = 'pokemon?limit=173';
  // const uri = `${url}${endpoint}`;
  const cleffaUri = `${url}${cleffaEndpoint}`;

  const [pokemonResults, setPokemonResults] = useState<Pokimon[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const pickedName = useAppSelector(state => state.pokemonData.pokemonName);
  const pickedId = useAppSelector(state => state.pokemonData.pokemonId);
  const pickedTypes = useAppSelector(state => state.pokemonData.pokemonTypes);

  const isDarkMode = useTheme();
  const styles = getStyles(isDarkMode, false);

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

  const secondRef = React.useRef<FlatList>(null);

  const [sliderIndex, setSliderIndex] = useState(0);

  const onOptionPress = (optionIndex: number) => {
    setSliderIndex(optionIndex);
  };

  useEffect(() => {
    secondRef.current?.scrollToIndex({
      index: sliderIndex,
      viewPosition: 0,
    });
  }, [sliderIndex]);

  const SLIDER_DATA = [
    { name: 'Info' },
    { name: 'Evolutions' },
    { name: 'Third' },
    { name: 'Fourth' },
  ];

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
          {SLIDER_DATA.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onOptionPress(index);
              }}
            >
              <Text
                style={[
                  styles.optionsText,
                  { borderWidth: sliderIndex === index ? 1 : 0 },
                ]}
              >
                {option.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoView}>
          <FlatList
            horizontal
            ref={secondRef}
            keyExtractor={item => item.name}
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={sliderIndex}
            data={SLIDER_DATA}
            pagingEnabled
            style={styles.flatListView}
            decelerationRate={'fast'}
            renderItem={({ item }) => (
              <SliderContainer key={`Flatlist.item.${item}`} name={item.name} />
            )}
            onMomentumScrollEnd={event => {
              const index = Math.floor(
                event.nativeEvent.contentOffset.x /
                  event.nativeEvent.layoutMeasurement.width,
              );
              if (sliderIndex !== index) {
                setSliderIndex(index);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

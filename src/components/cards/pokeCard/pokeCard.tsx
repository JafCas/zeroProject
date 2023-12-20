import React, { useRef } from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import getStyles from './styles';
import { Colors } from '../../../assets/colors/mainColors';

type pokeCardProps = {
  onPress: () => void;
  imageUrl?: string;
  isLoading: boolean;
  pokemonName?: string;
  pokemonNumer?: number;
  style?: ViewStyle;
};

export default function PokeCard({
  onPress,
  imageUrl,
  isLoading,
  pokemonName = 'Hellow',
  pokemonNumer = 0,
  style,
}: pokeCardProps) {
  const styles = getStyles();

  const provitionalFunction = async () => {
    console.log('card presionaa');
    await setTimeout(() => {
      changeIn();
    }, 1000);
    // changeIn();
  };

  const changeColor = useRef(new Animated.Value(0)).current;

  const changeIn = () => {
    // Will change fadeAnim value to 1 in 0.5 seconds
    Animated.timing(changeColor, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const changeOut = () => {
    // Will change fadeAnim value to 0 in 0.5 seconds
    Animated.timing(changeColor, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const displayPokemonNumer = isLoading ? ' ' : `# ${pokemonNumer}`;
  const displayPokemonName = isLoading ? ' ' : pokemonName;
  const numberTextViewStyle = isLoading
    ? styles.loadingNumberTextView
    : styles.numberTextView;
  const nameTextViewStyle = isLoading
    ? styles.loadingNameTextView
    : styles.nameTextView;
  const infoTextStyle = isLoading ? styles.loadingInfoText : styles.infoText;

  console.log('state en pokecard');
  return (
    <TouchableOpacity style={styles.pressCard} onPress={onPress}>
      <Animated.View style={[styles.pokeCardView, style]}>
        <View style={styles.largeImageView}>
          {imageUrl !== '' && !isLoading && (
            <Image style={styles.largeImage} source={{ uri: imageUrl }} />
          )}
        </View>
        <View style={styles.innerView}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.pokeImageView}>
              {isLoading ? (
                <View
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: Colors.loadingJordyBlue,
                    borderRadius: 32,
                  }}
                ></View>
              ) : (
                <Image
                  style={styles.imageCircle}
                  source={{ uri: imageUrl }}
                  // resizeMode="contain"
                />
              )}
            </View>
            {/* {{}} */}
          </View>
          <View style={styles.infoView}>
            {/* TODO: change this to be a RESPONSIVE COMPONENT */}
            <View style={numberTextViewStyle}>
              <Text style={infoTextStyle}>{displayPokemonNumer}</Text>
            </View>
            <View style={nameTextViewStyle}>
              <Text style={infoTextStyle}>{displayPokemonName}</Text>
            </View>
          </View>
          <View style={styles.elementView}>
            {isLoading ? (
              <View
                style={{
                  backgroundColor: Colors.loadingJordyBlue,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                }}
              />
            ) : (
              <AntDesign
                name="customerservice"
                size={32}
                style={styles.elementIcon}
              />
            )}
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

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

type pokeCardProps = {
  onPress: () => void;
  imageUrl?: string;
  pokemonName?: string;
  pokemonNumer?: number;
  style?: ViewStyle;
};

export default function PokeCard({
  onPress,
  imageUrl,
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

  console.log('state en pokecard');
  return (
    <TouchableOpacity style={styles.pressCard} onPress={onPress}>
      <Animated.View style={[styles.pokeCardView, style]}>
        <View style={styles.largeImageView}>
          {imageUrl !== '' && (
            <Image style={styles.largeImage} source={{ uri: imageUrl }} />
          )}
        </View>
        <View style={styles.innerView}>
          <View style={styles.pokeImageView}>
            {imageUrl !== '' && (
              <Image style={styles.imageCircle} source={{ uri: imageUrl }} />
            )}
          </View>
          <View style={styles.infoView}>
            <View style={styles.numberTextView}>
              <Text style={styles.infoText}>{`# ${pokemonNumer}`}</Text>
            </View>
            <View style={styles.nameTextView}>
              <Text style={styles.infoText}>{pokemonName}</Text>
            </View>
          </View>
          <View style={styles.elementView}>
            <AntDesign
              name="customerservice"
              size={32}
              style={styles.elementIcon}
            />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

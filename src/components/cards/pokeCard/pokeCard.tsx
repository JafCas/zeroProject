import React, { ReactElement, useRef } from 'react';
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
import { MotiView } from 'moti';

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

  // const LoadingCircle = ({ size }: { size: number }) => {
  //   return (
  //     <MotiView
  //       from={{
  //         width: size,
  //         height: size,
  //         borderRadius: size / 2,
  //       }}
  //       animate={{
  //         width: size + 20,
  //         height: size + 20,
  //         borderRadius: (size + 20) / 2,
  //       }}
  //       transition={{
  //         type: 'timing',
  //         duration: 800,
  //         loop: true,
  //       }}
  //       style={{
  //         width: size,
  //         height: size,
  //         borderRadius: size / 2,
  //         borderWidth: size / 10,
  //         borderColor: Colors.peach,
  //         // neon effect
  //         shadowColor: Colors.lightPeach,
  //         shadowOffset: { width: 0, height: 0 },
  //         shadowOpacity: 1,
  //         shadowRadius: 4,
  //       }}
  //     />
  //   );
  // };

  interface LoadingAvatarProps {
    children: ReactElement;
  }

  const LoadingAvatar = ({ children }: LoadingAvatarProps) => {
    return (
      <MotiView
        from={{
          opacity: 0.4,
          // width: 64,
        }}
        animate={{
          opacity: 0.8,
          // width: 68,
        }}
        transition={{
          type: 'timing',
          duration: 669,
          loop: true,
        }}
        style={{
          opacity: 0,
          // width: 0,
        }}
      >
        {children}
      </MotiView>
    );
  };

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
          {isLoading ? (
            <>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.pokeImageView}>
                  {/* // <LoadingCircle size={60} />
                  // <LoadingAvatar size={60} /> */}
                  <LoadingAvatar>
                    <View
                      style={{
                        width: 64,
                        height: 64,
                        backgroundColor: Colors.loadingJordyBlue,
                        borderRadius: 32,
                        opacity: 1,
                      }}
                    />
                  </LoadingAvatar>
                </View>
              </View>
              <View style={styles.infoView}>
                <View style={numberTextViewStyle}>
                  <LoadingAvatar>
                    <Text style={infoTextStyle}>{displayPokemonNumer}</Text>
                  </LoadingAvatar>
                </View>
                <View style={nameTextViewStyle}>
                  <LoadingAvatar>
                    <Text style={infoTextStyle}>{displayPokemonName}</Text>
                  </LoadingAvatar>
                </View>
              </View>
              <View style={styles.elementView}>
                <LoadingAvatar>
                  <View
                    style={{
                      backgroundColor: Colors.loadingJordyBlue,
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                    }}
                  />
                </LoadingAvatar>
              </View>
            </>
          ) : (
            <>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.pokeImageView}>
                  <Image
                    style={styles.imageCircle}
                    source={{ uri: imageUrl }}
                    // resizeMode="contain"
                  />
                </View>
              </View>
              <View style={styles.infoView}>
                <View style={numberTextViewStyle}>
                  <Text style={infoTextStyle}>{displayPokemonNumer}</Text>
                </View>
                <View style={nameTextViewStyle}>
                  <Text style={infoTextStyle}>{displayPokemonName}</Text>
                </View>
              </View>
              <View style={styles.elementView}>
                <AntDesign
                  name="customerservice"
                  size={32}
                  style={styles.elementIcon}
                />
              </View>
            </>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

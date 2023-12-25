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

export type PokeData = {
  imageUrl?: string;
  pokemonName: string | null;
  pokemonNumber: number | null;
};

export type pokeCardProps = {
  onPress?: () => void;
  isLoading?: boolean;
  data?: PokeData;
  style?: ViewStyle;
};

export default function PokeCard({
  onPress,
  isLoading,
  data,
  style,
}: pokeCardProps) {
  const styles = getStyles();

  const displaypokemonNumber = isLoading
    ? ' '
    : `# ${data && data.pokemonNumber}`;
  const displayPokemonName = isLoading ? ' ' : data && data.pokemonName;
  const numberTextViewStyle = isLoading
    ? styles.loadingNumberTextView
    : styles.numberTextView;
  const nameTextViewStyle = isLoading
    ? styles.loadingNameTextView
    : styles.nameTextView;
  const infoTextStyle = isLoading ? styles.loadingInfoText : styles.infoText;

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

  return (
    <TouchableOpacity style={styles.pressCard} onPress={onPress}>
      <Animated.View style={[styles.pokeCardView, style]}>
        <View style={styles.largeImageView}>
          {data && data.imageUrl !== '' && !isLoading && (
            <Image
              style={styles.largeImage}
              // TODO: Cambiar el conditioning para data, quiza se necesite state changes, ojala no
              source={{ uri: data && data.imageUrl }}
            />
          )}
        </View>
        <View style={styles.innerView}>
          {isLoading ? (
            <>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.pokeImageView}>
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
                    <Text style={infoTextStyle}>{displaypokemonNumber}</Text>
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
                    source={{ uri: data && data.imageUrl }}
                    // resizeMode="contain"
                  />
                </View>
              </View>
              <View style={styles.infoView}>
                <View style={numberTextViewStyle}>
                  <Text style={infoTextStyle}>{displaypokemonNumber}</Text>
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

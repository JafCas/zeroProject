import React, { ReactElement } from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import { MotiView } from 'moti';

import { Colors } from '../../../assets/colors/mainColors';

import getStyles from './styles';

import { PokeDataReturn } from '../../../services/fetchPokeData';

export type PokeData = {
  pokemonSprite?: string;
  pokemonName: string | null;
  pokemonNumber: number | null;
};

export type pokeCardProps = {
  onPress?: () => void;
  isLoading?: boolean;
  data?: PokeDataReturn;
  style?: ViewStyle;
};

export default function PokeCard({
  onPress,
  isLoading,
  data,
  style,
}: pokeCardProps) {
  const styles = getStyles();

  const displaypokemonNumber = isLoading ? ' ' : `# ${data && data.pokemonId}`;
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
  console.log('rendering pokecard');

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
          duration: 740,
          loop: true,
        }}
      >
        {children}
      </MotiView>
    );
  };

  return (
    <TouchableOpacity style={styles.pressCard} onPress={onPress}>
      <View style={[styles.pokeCardView, style]}>
        <View style={styles.largeImageView}>
          {data && data.pokemonSprite !== '' && !isLoading && (
            <Image
              style={styles.largeImage}
              // TODO: Cambiar el conditioning para data, quiza se necesite state changes, ojala no
              source={{ uri: data && data.pokemonSprite }}
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
                        width: 60,
                        height: 60,
                        backgroundColor: Colors.darkTyrianPurple,
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
                  <AntDesign
                    name="pokeball"
                    size={32}
                    style={styles.elementIcon}
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
                    source={{ uri: data && data.pokemonSprite }}
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
                  name="pokeball"
                  size={32}
                  style={styles.elementIcon}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

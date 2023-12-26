import React, { ReactElement } from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import { MotiView } from 'moti';

import { Colors } from '../../../assets/colors/mainColors';

import getStyles from './styles';

import { PokeCardDataReturn } from '../../../services/fetchPokeData';

export type PokeData = {
  pokemonSprite?: string;
  pokemonName: string | null;
  pokemonNumber: number | null;
};

export type pokeCardProps = {
  onPress?: () => void;
  isLoading?: boolean;
  data?: PokeCardDataReturn;
  style?: ViewStyle;
};

export default function PokeCard({
  onPress,
  isLoading,
  data,
  style,
}: pokeCardProps) {
  const styles = getStyles();

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

  const DisplayLoadingCard = () => {
    return (
      <>
        <View style={styles.pokeImageView}>
          <LoadingAvatar>
            <View style={styles.loadingCircleView} />
          </LoadingAvatar>
        </View>
        <View style={styles.infoView}>
          <LoadingAvatar>
            <View style={styles.emptyInfoView} />
          </LoadingAvatar>
          <LoadingAvatar>
            <View style={styles.emptyInfoView} />
          </LoadingAvatar>
        </View>
        <View style={styles.elementView}>
          <LoadingAvatar>
            <AntDesign
              name="circle"
              size={32}
              style={styles.elementIcon}
              color={Colors.darkTyrianPurple}
            />
          </LoadingAvatar>
        </View>
      </>
    );
  };

  return (
    <TouchableOpacity style={[styles.pressCard, style]} onPress={onPress}>
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
          <DisplayLoadingCard />
        ) : (
          <>
            <View style={styles.pokeImageView}>
              <Image
                style={styles.imageCircle}
                source={{ uri: data && data.pokemonSprite }}
              />
            </View>
            <View style={styles.infoView}>
              <View style={styles.numberTextView}>
                <Text style={styles.infoText}>{`# ${
                  data && data.pokemonId
                }`}</Text>
              </View>
              <View style={styles.nameTextView}>
                <Text style={styles.infoText}>{data && data.pokemonName}</Text>
              </View>
            </View>
            <View style={styles.elementView}>
              <AntDesign name="pokeball" size={32} style={styles.elementIcon} />
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

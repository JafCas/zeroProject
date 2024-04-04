import React from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import getStyles from './styles';

import { PokeCardDataReturn } from '../../../services/fetchPokeData';
import TypeBadge from '../../badges/TypeBadge';
import LoadingPokeCard from './LoadingPokeCard';

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
      <View style={styles.insideCardView}>
        {isLoading ? (
          <LoadingPokeCard />
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
            <View style={styles.typeIconsView}>
              {data &&
                data.pokemonTypes &&
                data.pokemonTypes.length &&
                data.pokemonTypes.map((type, index) => (
                  <TypeBadge key={index} iconName={type.type.name} />
                ))}
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

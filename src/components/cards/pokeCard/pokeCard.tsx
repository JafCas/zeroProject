import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import getStyles from './styles';

type pokeCardProps = {
  onPress: () => void;
  imageUrl: string;
  pokemonName: string;
  pokemonNumer: number;
};

export default function PokeCard({
  onPress,
  imageUrl,
  pokemonName,
  pokemonNumer,
}: pokeCardProps) {
  const styles = getStyles();
  console.log('state en pokecard');
  return (
    <TouchableOpacity style={styles.pressCard} onPress={onPress}>
      <View style={styles.pokeCardView}>
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
            <View style={styles.elementIcon} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

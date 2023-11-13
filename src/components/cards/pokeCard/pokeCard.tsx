import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import getStyles from './styles';

type pokeCardProps = {
  onPress: () => void;
};

export default function PokeCard({ onPress }: pokeCardProps) {
  const styles = getStyles();
  return (
    <TouchableOpacity style={styles.pressCard} onPress={onPress}>
      <View style={styles.pokeCardView}>
        <View style={styles.largeImageView} />
        <View style={styles.innerView}>
          <View style={styles.pokeImageView}>
            {/* TODO: change for pkimage */}
            <View style={styles.imageCircle} />
          </View>
          <View style={styles.infoView}>
            <View style={styles.numberTextView}>
              <Text style={styles.infoText}>#173</Text>
            </View>
            <View style={styles.nameTextView}>
              <Text style={styles.infoText}>Cleffa</Text>
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

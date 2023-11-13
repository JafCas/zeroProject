import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import getStyles from './styles';

export default function PokeCard() {
  const styles = getStyles();
  return (
    <TouchableOpacity style={styles.pressCard}>
      <View style={styles.pokeCardView}>
        <View style={styles.largeImageView} />
        <View style={styles.innerView}>
          <View style={styles.pokeImageView}>
            {/* TODO: change for pkimage */}
            <View style={styles.imageCircle} />
          </View>
          <View style={styles.infoView}>
            <View style={styles.numberTextView}>
              <Text style={styles.infoText}>#001</Text>
            </View>
            <View style={styles.nameTextView}>
              <Text style={styles.infoText}>Treecko</Text>
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

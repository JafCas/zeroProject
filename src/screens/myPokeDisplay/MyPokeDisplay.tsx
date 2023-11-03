import React from 'react';
import { Image, Text, View } from 'react-native';

// Styles
import styles from './styles';
import { EMPTY_DATA } from '../../constants';

type MyPokeDisplayProps = {
  isImageDisplayable: Boolean;
};

const MyPokeDisplay = ({ isImageDisplayable }: MyPokeDisplayProps) => {
  return (
    <View style={styles.container}>
      {isImageDisplayable ? (
        <Image
          style={styles.square}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png',
          }}
        />
      ) : (
        <View style={styles.square} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{EMPTY_DATA}</Text>
      </View>
      <View style={styles.reloadCircle} />
    </View>
  );
};

export default MyPokeDisplay;

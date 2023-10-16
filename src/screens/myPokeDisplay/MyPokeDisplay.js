import React from 'react';
import { Text, View } from 'react-native';

// Styles
import styles from './styles';
import { EMPTY_DATA } from '../../constants';

const MyPokeDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{EMPTY_DATA}</Text>
      </View>
      <View style={styles.reloadCircle} />
    </View>
  );
};

export default MyPokeDisplay;

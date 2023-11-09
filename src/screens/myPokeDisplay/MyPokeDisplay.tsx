import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { UrlContext } from '../mainInfo/MainInfo';

// Styles
import styles from './styles';
import { EMPTY_DATA } from '../../constants';

type MyPokeDisplayProps = {
  isImageDisplayable: Boolean;
};

const MyPokeDisplay = ({ isImageDisplayable }: MyPokeDisplayProps) => {
  const imageUrl = useContext(UrlContext);
  return (
    <View style={styles.container}>
      {isImageDisplayable ? (
        <Image
          style={styles.square}
          source={{
            uri: imageUrl,
          }}
        />
      ) : (
        <View style={styles.square} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{EMPTY_DATA}</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.reloadCircle} />
      </TouchableOpacity>
    </View>
  );
};

export default MyPokeDisplay;

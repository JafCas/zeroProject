import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

type Props = {
  name: string;
};

const SliderContainer = ({ name }: Props) => {
  return (
    <View style={styles.slider}>
      {/* Slider */}
      <Text>{name}</Text>
    </View>
  );
};

export default SliderContainer;

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    width: Dimensions.get('window').width,
    // marginHorizontal: horizontalScalE(0),
    padding: 10,

    backgroundColor: 'lightgrey',
  },
});

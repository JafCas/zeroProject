import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

const SLIDER_DATA = [
  { name: 'Info' },
  { name: 'Evolutions' },
  { name: 'Third' },
  { name: 'Fourth' },
];

const TestSlider = () => {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={item => item.name}
      horizontal
      snapToInterval={100}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      showsHorizontalScrollIndicator={false}
      decelerationRate={'fast'}
      //   style={styles.slider}
      renderItem={({ item }) => {
        return (
          <View style={styles.slider}>
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
};

export default TestSlider;

const styles = StyleSheet.create({
  slider: {
    height: 100,
    width: 200,
    backgroundColor: 'lightgrey',
    margin: 10,
  },
});

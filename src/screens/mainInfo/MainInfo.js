import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const MainInfo = () => {
  const [isStatusActive, setIsStatusActive] = useState(false);

  const optionsArray = [
    { id: 0, name: 'First' },
    { id: 1, name: 'Second' },
    { id: 2, name: 'Third' },
    { id: 3, name: 'Fourth' },
  ];
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.statusButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('apretao');
            setIsStatusActive(!isStatusActive);
          }}
        >
          <View style={styles.buttonContent}>
            <View style={styles.statusCircle(isStatusActive)} />
            <Text style={styles.statusText(isStatusActive)}>Status</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Main Info</Text>
        </View>
        <View style={styles.square} />
      </View>
      <View style={styles.optionsContainer}>
        {optionsArray.map(option => {
          return (
            <TouchableOpacity>
              <Text style={styles.optionsText}>
                {option.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.infoContainer}>
        <View style={{ height: 200, width: 200, backgroundColor: 'gray' }} />
        <View style={{ margin: 5 }}>
          <Text>There is nothing to be displayed yet</Text>
        </View>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'gray',
            borderRadius: 25,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Components
import MyPokeDisplay from '../myPokeDisplay/MyPokeDisplay';

// Styles
import { HEADER_TEXT, STATUS } from '../../constants';
import styles from './styles';

const MainInfo = () => {
  const [isStatusActive, setIsStatusActive] = useState(false);

  function onStatusTrigger() {
    console.log('apretao');
    setIsStatusActive(!isStatusActive);
  }

  const optionsArray = [
    { id: 0, name: 'First' },
    { id: 1, name: 'Second' },
    { id: 2, name: 'Third' },
    { id: 3, name: 'Fourth' },
  ];
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.statusButtonContainer}>
        <TouchableOpacity onPress={onStatusTrigger}>
          <View style={styles.buttonContent}>
            <View style={styles.statusCircle(isStatusActive)} />
            <Text style={styles.statusText(isStatusActive)}>{STATUS}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>{HEADER_TEXT}</Text>
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
        <MyPokeDisplay />
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

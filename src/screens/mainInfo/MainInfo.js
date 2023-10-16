import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

// Components
import MyPokeDisplay from '../myPokeDisplay/MyPokeDisplay';

// Styles
import { HEADER_TEXT, STATUS } from '../../constants';
import styles from './styles';

const MainInfo = () => {
  const [isStatusActive, setIsStatusActive] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

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
    <SafeAreaView style={styles.safeAreaView(isDarkMode)}>
      <View style={styles.container(isDarkMode)}>
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
            <Text style={styles.headerText(isDarkMode)}>{HEADER_TEXT}</Text>
          </View>
          <View style={styles.square} />
        </View>
        <View style={styles.optionsContainer}>
          {optionsArray.map(option => {
            return (
              <TouchableOpacity>
                <Text style={styles.optionsText(isDarkMode)}>
                  {option.name.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.infoContainer}>
          <MyPokeDisplay />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;

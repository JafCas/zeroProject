import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FlagContext } from '../../../screens/mainInfo/MainInfo';

import { STATUS } from '../../../constants';

import getStyles from './styles';

function StatusButton() {
  const StatusContext = useContext(FlagContext);

  const styles = getStyles(StatusContext);

  return (
    <View style={styles.buttonContent}>
      <MaterialCommunityIcons
        name="pokeball"
        size={32}
        style={styles.statusCircle}
      />
      <Text style={styles.statusText}>{STATUS}</Text>
    </View>
  );
}

export default StatusButton;

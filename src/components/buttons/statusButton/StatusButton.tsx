import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FlagContext } from '../../../screens/mainInfo/MainInfo';

import { STATUS } from '../../../constants';

import getStyles from './styles';

type StatusButtonProps = {
  statusId: string;
};

function StatusButton({ statusId: statusText }: StatusButtonProps) {
  const isStatusActive = useContext(FlagContext);

  const styles = getStyles(isStatusActive);

  return (
    <View style={styles.buttonContent}>
      <MaterialCommunityIcons
        name="pokeball"
        size={32}
        style={styles.statusCircle}
      />
      <Text style={styles.statusText}>{statusText}</Text>
    </View>
  );
}

export default StatusButton;

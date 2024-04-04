import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FlagContext } from '../../../screens/mainInfo/MainInfo';

import getStyles from './styles';
import { moderateScale } from '../../../utils/metrics';

type StatusButtonProps = {
  statusId: string;
};

function StatusButton({ statusId: statusText }: StatusButtonProps) {
  const isStatusActive = useContext(FlagContext);

  const styles = getStyles(isStatusActive);

  const iconSize = moderateScale(20);

  return (
    <View style={styles.buttonContent}>
      <MaterialCommunityIcons
        name="pokeball"
        size={iconSize}
        style={styles.statusCircle}
      />
      <Text style={styles.statusText}>{statusText}</Text>
    </View>
  );
}

export default StatusButton;

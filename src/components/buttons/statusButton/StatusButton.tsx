import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlagContext } from '../../../screens/mainInfo/MainInfo';
import { STATUS } from '../../../constants';
import { Status } from '../../../assets/colors/mainColors';

function StatusButton() {
  const StatusContext = useContext(FlagContext);

  const styles = StyleSheet.create({
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusCircle: {
      height: 30,
      width: 30,
      borderRadius: 16,
      backgroundColor: StatusContext ? Status.active : Status.inactive,
      marginHorizontal: 10,
    },
    statusText: {
      color: StatusContext ? Status.active : Status.inactive,
      fontSize: 16,
    },
  });

  return (
    <View style={styles.buttonContent}>
      <View style={styles.statusCircle} />
      <Text style={styles.statusText}>{STATUS}</Text>
    </View>
  );
}

export default StatusButton;

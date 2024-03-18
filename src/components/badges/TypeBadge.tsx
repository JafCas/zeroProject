import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../assets/colors/mainColors';

const TypeBadge = ({ iconName }: { iconName: string }) => {
  const name = iconName ? iconName : 'pokeball';
  return (
    <View style={styles.iconView}>
      <MaterialCommunityIcon
        name={name}
        size={24}
        style={styles.elementIcon}
        color={Colors.lightPeach}
      />
    </View>
  );
};

export default TypeBadge;

const styles = StyleSheet.create({
  iconView: {
    backgroundColor: '#bd4034',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 29,
    height: 29,
    margin: 4,

    borderColor: '#e0e0e0',
    borderWidth: 0.5,
  },

  elementIcon: {},
});

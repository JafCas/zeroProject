import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, elementTypeColors } from '../../assets/colors/mainColors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

/**
 * Sets the icon name and type color based on the given name.
 * @param name - The name of the icon.
 * @returns An object containing the iconName and typeColor.
 */
const setIconName = (name: string): { iconName: string; typeColor: string } => {
  let iconName = name;
  const unknownTypeNamesList = [
    'poison',
    'flying',
    'normal',
    'fairy',
    'psychic',
  ];
  enum unkwnownTypeNames {
    'poison' = 'skull',
    'flying' = 'bird',
    'normal' = 'paw',
    'fairy' = 'heart',
    'psychic' = 'brain',
  }

  // If the name is in the list, set the iconName to the corresponding value in the enum.
  if (unknownTypeNamesList.includes(name)) {
    iconName =
      unkwnownTypeNames[name as keyof typeof unkwnownTypeNames] || name;
  }
  // Set the typeColor to the corresponding value in the enum.
  const typeColor = elementTypeColors[name as keyof typeof elementTypeColors];

  return { iconName, typeColor };
};

const TypeBadge = ({ iconName }: { iconName: string }) => {
  // let name = iconName ? iconName : 'pokeball';

  const { iconName: name, typeColor } = setIconName(iconName);

  const styles = getStyles(typeColor);

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

const getStyles = (typeColor?: string) => {
  return StyleSheet.create({
    iconView: {
      backgroundColor: typeColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(20),
      width: horizontalScale(29),
      height: verticalScale(29),
      marginHorizontal: horizontalScale(4),
      marginVertical: verticalScale(4),

      borderColor: Colors.whiteBorder,
      borderWidth: moderateScale(0.5),
    },

    elementIcon: {},
  });
};

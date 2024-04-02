import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../assets/colors/mainColors';

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
  enum typeColors {
    water = '#6890f0',
    fire = '#f08030',
    grass = '#78c850',
    poison = '#b97fc9',
    flying = '#a890f0',
    normal = '#a8a878',
    fairy = '#ee99ac',
    psychic = '#f85888',
    electric = '#f8d030',
  }

  // If the name is in the list, set the iconName to the corresponding value in the enum.
  if (unknownTypeNamesList.includes(name)) {
    iconName =
      unkwnownTypeNames[name as keyof typeof unkwnownTypeNames] || name;
  }
  // Set the typeColor to the corresponding value in the enum.
  const typeColor = typeColors[name as keyof typeof typeColors];

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
      borderRadius: 20,
      width: 29,
      height: 29,
      margin: 4,

      borderColor: '#e0e0e0',
      borderWidth: 0.5,
    },

    elementIcon: {},
  });
};

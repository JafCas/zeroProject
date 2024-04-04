import React, { ReactElement } from 'react';
import { View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MotiView } from 'moti';

import getStyles from './styles';
import { Colors } from '../../../assets/colors/mainColors';

interface LoadingAvatarProps {
  children: ReactElement;
}

const LoadingPokeCard = () => {
  const LoadingAvatar = ({ children }: LoadingAvatarProps) => {
    return (
      <MotiView
        from={{
          opacity: 0.4,
          // width: 64,
        }}
        animate={{
          opacity: 0.8,
          // width: 68,
        }}
        transition={{
          type: 'timing',
          duration: 740,
          loop: true,
        }}
      >
        {children}
      </MotiView>
    );
  };

  const styles = getStyles();

  return (
    <View>
      <View style={styles.pokeImageView}>
        <LoadingAvatar>
          <View style={styles.loadingCircleView} />
        </LoadingAvatar>
      </View>
      <View style={styles.infoView}>
        <LoadingAvatar>
          <View style={styles.emptyInfoView} />
        </LoadingAvatar>
        <LoadingAvatar>
          <View style={styles.emptyInfoView} />
        </LoadingAvatar>
      </View>
      <View style={styles.elementView}>
        <LoadingAvatar>
          <MaterialCommunityIcon
            name="circle"
            size={32}
            style={styles.elementIcon}
            color={Colors.darkTyrianPurple}
          />
        </LoadingAvatar>
      </View>
    </View>
  );
};

export default LoadingPokeCard;

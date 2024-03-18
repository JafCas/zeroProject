import React, { ReactElement } from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { MotiView } from 'moti';

import { Colors } from '../../../assets/colors/mainColors';

import getStyles from './styles';

import { PokeCardDataReturn } from '../../../services/fetchPokeData';
import TypeBadge from '../../badges/TypeBadge';

export type PokeData = {
  pokemonSprite?: string;
  pokemonName: string | null;
  pokemonNumber: number | null;
};

export type pokeCardProps = {
  onPress?: () => void;
  isLoading?: boolean;
  data?: PokeCardDataReturn;
  style?: ViewStyle;
};

export default function PokeCard({
  onPress,
  isLoading,
  data,
  style,
}: pokeCardProps) {
  const styles = getStyles();

  interface LoadingAvatarProps {
    children: ReactElement;
  }

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

  const DisplayLoadingCard = () => {
    return (
      <>
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
      </>
    );
  };

  // console.log('data: ', data);

  return (
    <TouchableOpacity style={[styles.pressCard, style]} onPress={onPress}>
      <View style={styles.largeImageView}>
        {data && data.pokemonSprite !== '' && !isLoading && (
          <Image
            style={styles.largeImage}
            // TODO: Cambiar el conditioning para data, quiza se necesite state changes, ojala no
            source={{ uri: data && data.pokemonSprite }}
          />
        )}
      </View>
      <View style={styles.insideCardView}>
        {isLoading ? (
          <DisplayLoadingCard />
        ) : (
          <>
            <View style={styles.pokeImageView}>
              <Image
                style={styles.imageCircle}
                source={{ uri: data && data.pokemonSprite }}
              />
            </View>
            <View style={styles.infoView}>
              <View style={styles.numberTextView}>
                <Text style={styles.infoText}>{`# ${
                  data && data.pokemonId
                }`}</Text>
              </View>
              <View style={styles.nameTextView}>
                <Text style={styles.infoText}>{data && data.pokemonName}</Text>
              </View>
            </View>
            <View style={styles.typeIconsView}>
              {data &&
                data.pokemonTypes &&
                data.pokemonTypes.length &&
                data.pokemonTypes.map((type, index) => (
                  <TypeBadge key={index} iconName={type.type.name} />
                ))}
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

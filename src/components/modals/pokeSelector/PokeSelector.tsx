import React from 'react';
import { Modal, SafeAreaView, View } from 'react-native';

import PokeCard from '../../cards/pokeCard/pokeCard';

import getStyles from './styles';

interface PokeSelectorModalProps {
  isModalVisible: boolean;
  onDisplayModal: () => void;
}

const PokeSelectorModal = ({
  isModalVisible,
  onDisplayModal,
}: PokeSelectorModalProps) => {
  //   const handleCallback = displayModal;

  const styles = getStyles();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        console.log('cerrao');
      }}
    >
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <PokeCard onPress={onDisplayModal} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PokeSelectorModal;

import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import getStyles from './styles';

interface PokeSelectorProps {
  isModalVisible: boolean;
  onDisplayModal: () => void;
}

const PokeSelector = ({
  isModalVisible,
  onDisplayModal,
}: PokeSelectorProps) => {
  //   const handleCallback = displayModal;

  const styles = getStyles();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        console.log('cerrao');
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.button} onPress={onDisplayModal}>
            <Text>Button</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PokeSelector;

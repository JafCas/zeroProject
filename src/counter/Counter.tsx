import React, { useState } from 'react';
import {
  CARD_DATA_SET_ID,
  decrement,
  increment,
  incrementByAmount,
} from './pokeDataSlice';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../context/redux/hooks';

export function Counter() {
  const count = useAppSelector(state => state.pokemonData.value);
  const pickedId = useAppSelector(state => state.pokemonData.pokemonId);
  const pickedName = useAppSelector(state => state.pokemonData.pokemonName);
  const pickedSprite = useAppSelector(state => state.pokemonData.spriteUri);
  const pickedElement = useAppSelector(state => state.pokemonData.element);
  const dispatch = useAppDispatch();

  const [counterValue, setCounterValue] = useState('10');

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text>{pickedId}</Text>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          onChangeText={setCounterValue}
          value={counterValue}
          keyboardType="numeric"
        />
        <Button
          title="incrementAmount"
          onPress={() => {
            dispatch(CARD_DATA_SET_ID(Number(counterValue) || 0));
          }}
        />
      </View>
    </View>
  );
}

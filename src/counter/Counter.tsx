import React from 'react';
import { decrement, increment } from './counterSlice';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

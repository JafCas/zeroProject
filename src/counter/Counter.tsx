import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { Text, TouchableOpacity, View } from 'react-native';

export function Counter() {
  const count = useSelector((state: unknown) => state.counter.value);
  const dispatch = useDispatch();

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

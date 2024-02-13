import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface CounterState {
  value: number;
  pokemonId: number;
  spriteUri: string;
  pokemonName: string;
  element: string;
}

const initialState: CounterState = {
  value: 0,
  pokemonId: 0,
  spriteUri: '',
  pokemonName: '',
  element: '',
};

export const counterSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    CARD_DATA_SET_ID: (state, action: PayloadAction<number>) => {
      state.pokemonId = action.payload;
    },
    CARD_DATA_SET_SPRITE: (state, action: PayloadAction<string>) => {
      state.spriteUri = action.payload;
    },
    CARD_DATA_SET_NAME: (state, action: PayloadAction<string>) => {
      state.pokemonName = action.payload;
    },
    CARD_DATA_SET_ELEMENT: (state, action: PayloadAction<string>) => {
      state.element = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  CARD_DATA_SET_ID,
  CARD_DATA_SET_SPRITE,
  CARD_DATA_SET_NAME,
  CARD_DATA_SET_ELEMENT,
} = counterSlice.actions;

export const selectPokemonId = (state: RootState) =>
  state.pokemonData.pokemonId;
export const selectPokemonSprite = (state: RootState) =>
  state.pokemonData.spriteUri;
export const selectPokemonName = (state: RootState) =>
  state.pokemonData.pokemonName;
export const selectPokemonElement = (state: RootState) =>
  state.pokemonData.element;

export default counterSlice.reducer;

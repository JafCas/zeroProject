import { configureStore } from '@reduxjs/toolkit';
import pokedataReducer from '../counter/pokeDataSlice';

export const store = configureStore({
  reducer: {
    pokemonData: pokedataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


import { combineReducers } from '@reduxjs/toolkit';

import { default as userReducer } from './users';
import { default as searchReducer } from './search';
import { default as filmsReducer } from './films';

const rootReducer = combineReducers({
  userReducer,
  searchReducer,
  filmsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
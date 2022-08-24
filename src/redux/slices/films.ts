
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Films {
  data: string[]
}
const filmsEmptyState: Films = {
  data: []
}

export const searchSlice = createSlice({
  name: 'films',
  initialState: filmsEmptyState,
  reducers: {
    addFilms: (_, action) => {
      return action.payload
    }
  }
})

export const { addFilms } = searchSlice.actions;
export const selectFilms = (state: RootState) => state.filmsReducer
export default searchSlice.reducer;
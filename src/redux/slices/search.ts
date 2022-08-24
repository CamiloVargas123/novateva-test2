
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Search {
  value: string | undefined
}
const searchEmptyState: Search = {
  value: undefined
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchEmptyState,
  reducers: {
    search: (_, action) => {
      return action.payload
    }
  }
})

export const { search } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.searchReducer
export default searchSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { ApiReponse } from '../../api/getPeople';
import { RootState } from '../store';

const UserEmptyState: ApiReponse = {
  count: 0,
  next: '',
  previous: '',
  results: null,
}


export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (_, action) => {
      return action.payload;
    }
  }
})

export const { createUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.userReducer
export default userSlice.reducer;
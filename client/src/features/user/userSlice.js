import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchUser = createAsyncThunk('fetch/user', async () => {
  const response = await axios.get('/api/user');
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const user = {
        address: action.payload.address,
        visits: state.visits + 1
      }
      state.push(user);
    }
  }
})
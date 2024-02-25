import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (params, thunkAPI) => {
    try {
      const { data } = await api.get('/users', { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  'users/changeUser',
  async ({ id, followers }, thunkAPI) => {
    try {
      const { data } = await api.put(`/users/${id}`, { followers });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkLastPage = createAsyncThunk(
  'users/checkLastPage',
  async (params, thunkAPI) => {
    try {
      const { data } = await api.get('/users', { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTweetsByUser = createAsyncThunk(
  'users/getTweets',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/users/${id}/tweets`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

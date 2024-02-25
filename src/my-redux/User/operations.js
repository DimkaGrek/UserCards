import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (params, thunkAPI) => {
    try {
      console.log('params: ->>>', params);
      const { data } = await api.get('/users', { params });
      console.log(data);
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
      console.log('followers->>>>> ', followers);
      const { data } = await api.put(`/users/${id}`, { followers });
      console.log('data-ChangeUser->> ', data);
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
      console.log('params: ->>>', params);
      const { data } = await api.get('/users', { params });
      console.log(data);
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
      //   console.log('params: ->>>', params);
      const { data } = await api.get(`/users/${id}/tweets`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

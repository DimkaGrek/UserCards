import { createSlice } from '@reduxjs/toolkit';
import {
  changeUser,
  checkLastPage,
  getTweetsByUser,
  getUsers,
} from './operations';

const initialState = {
  users: [],
  tweets: {},
  following: [],
  page: 1,
  limit: 3,
  isAll: false,
  filter: 'all',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToFollowing: (state, action) => {
      console.log('following in action: ', Array.from(state.following));
      state.following.push(action.payload);
    },
    deleteFromFollowing: (state, action) => {
      state.following = state.following.filter(item => item !== action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = [...state.users, ...action.payload];
        state.page = state.page + 1;
      })
      .addCase(checkLastPage.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.isAll = true;
        }
      })
      .addCase(changeUser.fulfilled, (state, action) => {
        state.users = state.users.map(item => {
          if (action.payload.id === item.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(getTweetsByUser.fulfilled, (state, { payload }) => {
        console.log('action.payload in getTweets: ', payload[0].userId);
        // state.users.map(item => console.log(item.id));
        const userName = state.users.filter(
          user => user.id === payload[0].userId
        )[0].user;
        // const userProxy = new Proxy(Array.from(user), {});
        state.tweets[userName] = payload;
        console.log('userName: ', userName);
      });
  },
  selectors: {
    selectUsers: state => state.users,
    selectTweets: state => state.tweets,
    selectFollowing: state => state.following,
    selectPage: state => state.page,
    selectLimit: state => state.limit,
    selectIsAll: state => state.isAll,
    selectFilter: state => state.filter,
  },
});

export const userReducer = userSlice.reducer;
export const { addToFollowing, deleteFromFollowing, changeFilter } =
  userSlice.actions;
export const {
  selectUsers,
  selectFollowing,
  selectPage,
  selectLimit,
  selectIsAll,
  selectFilter,
  selectTweets,
} = userSlice.selectors;

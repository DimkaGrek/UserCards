import { createSelector } from '@reduxjs/toolkit';
import { selectFilter, selectFollowing, selectUsers } from './User/userSlice';

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter, selectFollowing],
  (users, filter, following) => {
    switch (filter) {
      case 'follow':
        return users.filter(item => !following.includes(item.id));
      case 'followings':
        return users.filter(item => following.includes(item.id));
      default:
        return users;
    }
  }
);

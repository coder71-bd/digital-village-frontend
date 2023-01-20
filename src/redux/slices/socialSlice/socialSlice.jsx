import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

export const allSocialUser = createAsyncThunk('getAllUser', async (email) => {
  const responce = await axios(`/social/allUsers?email=${email}`).then(
    (res) => res.data
  );
  return responce;
});

const socialSlice = createSlice({
  name: 'social',
  initialState: {
    user: {},
    socialUsers: [],
    friends: [],
    requesting: [],
    requested: [],
    noConnection: [],
  },
  reducers: {
    // add Friend
    setAddFriend: (state, { payload }) => {
      const reqUser = state.noConnection.find((user) => user._id === payload);
      const newNoConnection = state.noConnection.filter(
        (user) => user._id !== payload
      );
      state.requesting.push(reqUser);
      state.noConnection = newNoConnection;
    },
    // cancle from redux
    setCancleRequest: (state, { payload }) => {
      const reqUser = state.requesting.find((user) => user._id === payload);
      const newRequesting = state.requesting.filter(
        (user) => user._id !== payload
      );
      state.noConnection.push(reqUser);
      state.requesting = newRequesting;
    },
    // accept A Friend
    setAcceptFriend: (state, { payload }) => {
      const acceptUser = state.requested.find((user) => user._id === payload);
      const newRequested = state.requested.filter(
        (user) => user._id !== payload
      );
      state.friends.push(acceptUser);
      state.requested = newRequested;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(allSocialUser.fulfilled, (state, { payload }) => {
      state.socialUsers = payload.allUsers;
      state.user = payload.user[0];
      const { connection, requesting, requested } = payload.user[0];
      const allConnection = [...connection, ...requested, ...requesting];
      //   friends
      const friends = payload.allUsers?.filter((user) =>
        connection.includes(user._id)
      );
      // not Connected
      const notConnected = payload.allUsers?.filter(
        (user) => !allConnection.includes(user._id)
      );
      //   requesting
      const requestingUser = payload.allUsers?.filter((user) =>
        requesting.includes(user._id)
      );
      //   requested
      const requestedUser = payload.allUsers?.filter((user) =>
        requested.includes(user._id)
      );
      state.friends = friends;
      state.requesting = requestingUser;
      state.requested = requestedUser;
      state.noConnection = notConnected;
    });
  },
});

export const { setAddFriend, setCancleRequest, setAcceptFriend } =
  socialSlice.actions;

export default socialSlice.reducer;

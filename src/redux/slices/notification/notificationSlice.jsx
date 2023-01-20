import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllNotifications = createAsyncThunk(
  'notifications/fetchAllNotifications',
  async () => {
    const response = await axios.get(
      '/notification/all'.then((response) => response.data)
    );
    return response;
  }
);

export const fetchUserSpecificNotification = createAsyncThunk(
  'notifications/fetchUserSpecificNotification',
  async (info) => {
    const response = await axios
      .get(
        `/notification/userSpecificNotifciations/?email=${info.email}&page=${info.currPage}&size=${info.size}`
      )
      .then((response) => response.data);

    console.log(info.email, info.pageCount, info.size);
    console.log(response);

    return {
      size: info.size,
      count: response.count,
      notifications: response.notifications,
    };
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    count: 0,
    pageCount: 0,
    currPage: 0,
  },
  reducers: {
    setNotificationCurrPage: (state, { payload }) => {
      state.currPage = payload;
    },
    clearTheNotificationSlice: (state, { payload }) => {
      state.count = 0;
      state.pageCount = 0;
      state.currPage = 0;
      state.notifications = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllNotifications.fulfilled, (state, { payload }) => {
      state.notifications = payload;
    });
    builder.addCase(
      fetchUserSpecificNotification.fulfilled,
      (state, { payload }) => {
        state.notifications = payload.notifications;
        const count = payload.count;

        if (payload.count) {
          state.count = payload.count; // count will be used in the navbar
        }
        const pageNumber = Math.ceil(count / payload.size);

        if (pageNumber || pageNumber === 0) {
          state.pageCount = pageNumber;
        }
      }
    );
  },
});

export const { setNotificationCurrPage, clearTheNotificationSlice } =
  notificationSlice.actions;

export default notificationSlice.reducer;

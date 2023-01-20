import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (pagination) => {
    const response = await axios
      .get(`/user/all/?page=${pagination.currPage}&size=${pagination.size}`)
      .then((response) => response.data);
    return {
      allUsers: response.allUsers,
      count: response.count,
      pageCount: pagination.pageCount,
      size: pagination.size,
    };
  }
);
export const getSingleUserInfo = createAsyncThunk(
  'user/getSingleUserInfo',
  async (email) => {
    const response = await axios
      .get(`/user/singleUserInfo/?email=${email}`)
      .then((response) => response.data);
    return response;
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, formData }) => {
    const response = await axios
      .put(`/user/update/?id=${id}`, formData)
      .then((response) => response.data);
    return response;
  }
);

export const updateUserWithoutProfileImg = createAsyncThunk(
  'user/updateUserWithoutProfileImg',
  async ({ id, data }) => {
    const response = await axios
      .put(`/user/updateWithoutProfileImg/?id=${id}`, data)
      .then((response) => response.data);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    allUsers: [],
    count: 0,
    user: {},
    roles: [],
    token: '',
    uId: '',
    pageCount: 0,
    currPage: 0,
  },
  reducers: {
    setRoles: (state, { payload }) => {
      state.roles = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUId: (state, { payload }) => {
      state.uId = payload;
    },
    setAllUserCurrPage: (state, { payload }) => {
      state.currPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.allUsers = payload.allUsers;
      const count = payload.count;
      state.count = payload.count;
      const pageNumber = Math.ceil(count / payload.size);
      if (payload.search) {
        state.currPage = 0;
      }
      if (pageNumber || pageNumber === 0) {
        state.pageCount = pageNumber;
      }
    });
    // single user info
    builder.addCase(getSingleUserInfo.fulfilled, (state, { payload }) => {
      if (payload && payload.length >= 1) {
        state.user = payload[0];
        state.roles = [payload[0].roles];
        state.uId = payload[0]._id;
        state.token = payload[0].token;
      }
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      if (payload && payload.length >= 1) {
        state.user = payload[0];
      }
    });
    builder.addCase(
      updateUserWithoutProfileImg.fulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const { setRoles, setToken, setUser, setUId, setAllUserCurrPage } =
  userSlice.actions;

export default userSlice.reducer;

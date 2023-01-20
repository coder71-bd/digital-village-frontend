import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// create the thunk
export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async (pagination) => {
    if (pagination?.size) {
      const response = await axios
        .get(
          `/student/allVideos/?page=${pagination.currPage}&size=${
            pagination.size
          }&search=${pagination.search}&roles=${JSON.stringify([5000])}`
        )
        .then((response) => response.data);
      console.log(response, 'error checking');
      return {
        videos: response.videos,
        count: response.count,
        pageCount: pagination.pageCount,
        size: pagination.size,
        search: pagination.search,
      };
    } else {
      const response = await axios
        .get(`/student/allVideos/?roles=${JSON.stringify([5000])}`)
        .then((response) => response.data);
      return {
        videos: response.videos,
      };
    }
  }
);

// fetch teacher my videos
export const fetchMyVideos = createAsyncThunk(
  'videos/fetchMyVideos',
  async (email) => {
    const response = await axios.get(`/teacher/myVideos/?email=${email}`);
    return response.data;
  }
);

// delete a video
export const deleteAVideo = createAsyncThunk(
  'videos/deleteAVideo',
  async (id) => {
    const response = await axios.delete(`/teacher/deleteAVideo/?id=${id}`);
    return response?.data?._id;
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: [],
    pageCount: 0,
    currPage: 0,
  },
  reducers: {
    setVideoCurrPage: (state, { payload }) => {
      state.currPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, (state, { payload }) => {
      state.videos = payload.videos;
      if (payload?.size) {
        const count = payload.count;
        const pageNumber = Math.ceil(count / payload.size);
        if (payload.search) {
          state.currPage = 0;
        }
        if (state.pageCount) {
          state.pageCount = pageNumber;
        }
      }
    });
    builder.addCase(fetchMyVideos.fulfilled, (state, { payload }) => {
      state.videos = payload;
    });
    builder.addCase(deleteAVideo.fulfilled, (state, { payload }) => {
      state.videos = state.videos.filter((video) => video._id !== payload);
    });
  },
});

export const { setVideoCurrPage } = videoSlice.actions;

export default videoSlice.reducer;

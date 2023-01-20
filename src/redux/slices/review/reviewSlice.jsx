import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// create the thunk
export const fetchAllReview = createAsyncThunk(
  'reviews/fetchAllReview',
  async () => {
    const response = await axios
      .get('/userReview/all')
      .then((response) => response.data);

    return response;
  }
);

// add event
export const addAReview = createAsyncThunk(
  'reviews/postAReview',
  async (event) => {
    const response = await axios
      .post('/review/addReview', event)
      .then((response) => response.data);
    return response;
  }
);
// delete event
export const deleteAReview = createAsyncThunk(
  'reviews/deleteAReview',
  async (id) => {
    const response = await axios
      .delete(`/review/deleteReview/?id=${id}`)
      .then((response) => response.data._id);
    return response;
  }
);

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    allReviews: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllReview.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.allReviews = payload;
    });

    //add event
    builder.addCase(addAReview.fulfilled, (state, { payload }) => {
      console.log('add', payload);
      state.allReviews.push(payload);
    });
    builder.addCase(deleteAReview.fulfilled, (state, { payload }) => {
      console.log('delete', payload);
      state.allReviews.filter((event) => event._id !== payload);
    });
  },
});
export const { setSelectedReview } = reviewSlice.actions;

export default reviewSlice.reducer;

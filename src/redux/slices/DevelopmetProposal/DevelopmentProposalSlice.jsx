import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fectch All Development
export const fetchAllDevelopmentProposals = createAsyncThunk(
  'developmentProposals/fetchAllDevelopmentProposals',
  async () => {
    const response = axios
      .get('/developmentProposal/all')
      .then((response) => response.data);
    return response;
  }
);

export const fetchMyDevelopmentProposals = createAsyncThunk(
  'developmentProposals/fetchMyDevelopmentProposals',
  async (email) => {
    const response = axios
      .get(`/developmentProposal/all/?email=${email}`)
      .then((response) => response.data);
    return response;
  }
);

const developmentSlice = createSlice({
  name: 'developmentProposals',
  initialState: {
    developmentProposals: [],
    myDevelopmentProposals: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    //   get all development
    builder.addCase(
      fetchAllDevelopmentProposals.fulfilled,
      (state, { payload }) => {
        if (payload && payload.length >= 1) {
          state.developmentProposals = payload;
        }
      }
    );
    // get my development proposals
    builder.addCase(
      fetchMyDevelopmentProposals.fulfilled,
      (state, { payload }) => {
        if (payload && payload.length >= 1) {
          state.myDevelopmentProposals = payload;
        }
      }
    );
  },
});

export const { setMyDevelopmentProposal } = developmentSlice.actions;

export default developmentSlice.reducer;

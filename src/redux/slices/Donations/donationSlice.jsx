import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fetch all causes
export const fetchAllCauses = createAsyncThunk(
  'cuases/fetchAllCauses',
  async () => {
    const response = await axios
      .get('/donationCause/all')
      .then((response) => response.data);
    return response;
  }
);

// add cuase
export const addACuase = createAsyncThunk(
  'cuases/addACuase',
  async (formData) => {
    const response = await axios
      .post('/donationCause/add', formData)
      .then((response) => response.data);
    return response;
  }
);

// give the donation money that you want
export const giveDonation = createAsyncThunk(
  'causes/giveDonation',
  async ({ data, uId, causeId }) => {
    const response = await axios
      .put('/donationCause/take', {
        ...data,
        donarId: uId,
        causeId,
      })
      .then((response) => response.data);
    console.log(response);
    return response;
  }
);

// delete cuase
export const deleteACause = createAsyncThunk(
  'cuases/deleteACause',
  async (id) => {
    await axios.delete(`/donationCause/delete/?id=${id}`);
    return id;
  }
);
              // help requester Apply get donation 
// fetch all causes
export const fetchAllRequest = createAsyncThunk(
  'cuases/fetchAllRequest',
  async () => {
    const response = await axios
      .get('/donationRequest/requestapply')
      .then((response) => response.data);
    return response;
  }
);

export const fetchMyRequest = createAsyncThunk(
  'cuases/fetchMyRequest',
  async () => {
    const response = axios
      .get(`/donationRequest/requestapply`)
      .then((response) => response.data);
    return response ;
  }
);
// add help request apply
export const addAHelpRequest = createAsyncThunk(
  'cuases/addAHelpRequest',
  async (formData) => {
    const response = await axios
      .post('/donationRequest/helprequest', formData)
      .then((response) => response.data);
    return response;
  }
);
// request the donation money that you want
export const getRequestGive = createAsyncThunk(
  'causes/getRequestGive',
  async ({ data, uId, applyId }) => {
    const response = await axios
      .put('/donationRequest/requestpay', {
        ...data,
        requesterId: uId,
        applyId,
      })
      .then((response) => response.data);
    console.log(response);
    return response;
  }
);

// delete request
export const deleteARequest = createAsyncThunk(
  'cuases/deleteARequest',
  async (id) => {
    await axios.delete(`/donationRequest/deleterequest/?id=${id}`);
    return id;
  }
);
// donation slice 
const donationSlice = createSlice({
  name: 'causes',
  initialState: {
    causes: [],
    applys: [],
  },

  reducers: {
    updateACause: (state, { payload }) => {
      // console.log('this is payload', payload);
      const updatedCause = payload;
      const AllCausesAfterRemovingThePrev = state.causes.filter(
        (cause) => cause._id !== payload._id
      );
      state.causes = [...AllCausesAfterRemovingThePrev, updatedCause];
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchAllCauses.fulfilled, (state, { payload }) => {
      state.causes = payload;
    });
    builder.addCase(addACuase.fulfilled, (state, { payload }) => {
      state.causes.push(payload);
    });
    builder.addCase(giveDonation.fulfilled, (state, { payload }) => {
      console.log(payload);
      if (payload._id) {
        const AllCausesAfterRemovingThePrev = state.causes.filter(
          (cause) => cause._id !== payload._id
        );
        state.causes = [...AllCausesAfterRemovingThePrev, payload];
      }
    });

    //delete
    builder.addCase(deleteACause.fulfilled, (state, { payload }) => {
      state.causes = state.causes.filter((cause) => cause._id !== payload);
    });
          // help request apply
    builder.addCase(fetchAllRequest.fulfilled, (state, { payload }) => {
      state.applys = payload;
    });
    builder.addCase(addAHelpRequest.fulfilled, (state, { payload }) => {
      state.applys.push(payload);
    });
    // get sigle request
    // builder.addCase(getRequestGive.fulfilled, (state, { payload }) => {
    //   console.log(payload);
    //   if (payload._id) {
    //     const AllApply = state.applys.filter(
    //       (apply) => apply._id !== payload._id
    //     );
    //     state.applys = [...AllApply, payload];
    //   }
    // });
    // get my development proposals
    builder.addCase(fetchMyRequest.fulfilled, (state, { payload }) => {
        state.applys = payload;
      });

    // //delete
    builder.addCase(deleteARequest.fulfilled, (state, { payload }) => {
      state.applys = state.applys.filter((apply) => apply._id !== payload);
    });
  },
});

export const { updateACause , updateARequest} = donationSlice.actions;

export default donationSlice.reducer;

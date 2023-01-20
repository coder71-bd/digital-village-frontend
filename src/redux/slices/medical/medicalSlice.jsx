import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchAllAvailableAppointments = createAsyncThunk(
  'medical/fetchAllAvailableAppointments',
  async () => {
    const response = await axios
      .get('/availableAppointment/getAppointment')
      .then((response) => response.data);
    console.log(response);
    return response;
  }
);

// add appontment
export const addAnAppointment = createAsyncThunk(
  'medical/postAnAppointment',
  async (appointment) => {
    const response = await axios
      .post('/availableAppointment/saveAppointment', appointment)
      .then((response) => response.data);
    return response;
  }
);
// show user appointment event
// export const showUserAppointment = createAsyncThunk(
//   'events/showAppointment',
//   async ({ email, date }) => {
//     console.log(email);

//     const sDate = new Date(date).toLocaleDateString();
//     console.log(sDate);
//     const response = await axios
//       .get(`/appointment/findUserAppointment?email=${email}&date=${sDate}`)
//       .then((response) => response.data);
//     console.log(response);
//     return response;
//   }
// );

const medicalSlice = createSlice({
  name: 'medical',
  initialState: {
    allAvailableAppointment: [],
    userAppointment: [],
    archivedEvents: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllAvailableAppointments.fulfilled,
      (state, { payload }) => {
        state.allAvailableAppointment = payload;
      }
    );

    builder.addCase(addAnAppointment.fulfilled, (state, { payload }) => {
      state.allAvailableAppointment.filter(
        (appointment) => appointment._id !== payload
      );
    });
    // builder.addCase(showUserAppointment.fulfilled, (state, payload) => {
    //   const user = state.allAvailableAppointment.filter(
    //     (appointment) =>
    //       appointment.email === payload.email &&
    //       appointment.date === payload.date
    //   );
    //   console.log(user);
    // });
  },
});

export const { setSelectedEvent } = medicalSlice.actions;

export default medicalSlice.reducer;

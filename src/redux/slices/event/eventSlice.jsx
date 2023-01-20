import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchAllEvent = createAsyncThunk(
  'events/fetchAllEvents',
  async () => {
    const response = await axios
      .get(`/event/allEvent`)
      .then((response) => response.data);
    console.log(response);
    return response;
  }
);

// add event
export const addAnEvent = createAsyncThunk(
  'events/postAnEvent',
  async (event) => {
    const response = await axios
      .post('/event/addEvent', event)
      .then((response) => response.data);
    return response;
  }
);

// delete event
export const deleteAnEvent = createAsyncThunk(
  'events/deleteAnEvent',
  async (id) => {
    const response = await axios
      .delete(`/event/deleteEvent/?id=${id}`)
      .then((response) => response.data);
    console.log(response);
    return response;
  }
);

export const fetchUpcomingEvents = createAsyncThunk(
  'events/fetchUpcomingEvents',
  async () => {
    const response = await axios
      .get('/event/upcomingEvents')
      .then((response) => response.data);
    return response;
  }
);
export const fetchArchivedEvents = createAsyncThunk(
  'events/fetchArchivedEvents',
  async () => {
    const response = await axios
      .get('/event/archivedEvents')
      .then((response) => response.data);
    return response;
  }
);

// export const updateAEvent = createAsyncThunk(
//   'updateProduct',
//   async (data) => {
//     await axios.put(`/event/updateEvent/${data._id}`, data);
//     return data;
//   }
// );

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    allEvents: [],
    upcomingEvents: [],
    archivedEvents: [],
  },

  reducers: {
    setAllEventsCurrPage: (state, { payload }) => {
      state.allEventsCurrPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllEvent.fulfilled, (state, { payload }) => {
      state.allEvents = payload;
    });
    builder.addCase(fetchUpcomingEvents.fulfilled, (state, { payload }) => {
      state.upcomingEvents = payload;
    });
    builder.addCase(fetchArchivedEvents.fulfilled, (state, { payload }) => {
      state.archivedEvents = payload;
    });
    //add event
    builder.addCase(addAnEvent.fulfilled, (state, { payload }) => {
      state.allEvents.push(payload);
    });
    builder.addCase(deleteAnEvent.fulfilled, (state, { payload }) => {
      state.allEvents = state.allEvents.filter(
        (event) => event._id !== payload
      );
    });
  },
});

export const { setSelectedEvent, setAllEventsCurrPage } = eventSlice.actions;

export default eventSlice.reducer;

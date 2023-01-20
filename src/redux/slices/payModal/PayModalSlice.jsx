import { createSlice } from '@reduxjs/toolkit';

const payModalSlice = createSlice({
  name: 'marketModal',
  initialState: {
    payModal: false,
  },
  reducers: {
    setPayModal: (state, { payload }) => {
      state.payModal = payload;
    },
  },
});

export const { setPayModal } = payModalSlice.actions;

export default payModalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'marketModal',
  initialState: {
    showModal: false,
  },
  reducers: {
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

export const { setShowModal } = modalSlice.actions;

export default modalSlice.reducer;

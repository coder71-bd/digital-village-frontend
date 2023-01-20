import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import blogReducer from './slices/blog/blogSlice';
import DevelopmentProposalSlice from './slices/DevelopmetProposal/DevelopmentProposalSlice';
import donationSlice from './slices/Donations/donationSlice';
import { marketAllReducers } from './slices/eMarket/marketAllReducers';
import eventReducer from './slices/event/eventSlice';
import medicalSlice from './slices/medical/medicalSlice';
import MoodSlice from './slices/mood/MoodSlice';
import notificationReducer from './slices/notification/notificationSlice';
import PayModalSlice from './slices/payModal/PayModalSlice';
import reviewReducer from './slices/review/reviewSlice';
import socialSlice from './slices/socialSlice/socialSlice';
import userReducer from './slices/user/userSlice';
import videoReducer from './slices/video/videoSlice';

const reducers = combineReducers({
  reviews: reviewReducer,
  blogs: blogReducer,
  videos: videoReducer,
  notifications: notificationReducer,
  user: userReducer,
  market: marketAllReducers,
  pay: PayModalSlice,
  events: eventReducer,
  donation: donationSlice,
  mood: MoodSlice,
  developmentProposals: DevelopmentProposalSlice,
  social: socialSlice,
  medical: medicalSlice,
});

const persistConfig = {
  key: 'digital_village_storage',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

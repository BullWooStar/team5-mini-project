import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/user-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
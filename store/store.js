import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import testReducer from './testSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    test: testReducer,
  },
});

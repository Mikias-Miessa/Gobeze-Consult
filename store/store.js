import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import testReducer from './testSlice';
import partnerReducer from "./partnerSlice"
import teamReducer from './teamSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    test: testReducer,
    partner: partnerReducer,
    team: teamReducer
  },
});

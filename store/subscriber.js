import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  subscribers: [],
  loading: false,
  newSubscriberAdded: null,
};

export const addSubscriber = createAsyncThunk(
  'subscriber/add',
  async (subscriberData, thunkAPI) => {
    try {
      console.log(subscriberData);
      const res = await axios.post('/api/subscriber', partnerData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getAllSubscribers = createAsyncThunk(
  'subscriber/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/subscriber');
      return res.data.subscribers;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getSubscriberById = createAsyncThunk(
  'subscriber/getSubscriberById',
  async (subscriberId, thunkAPI) => {
    try {
      console.log(partnerId);
      const response = await axios.get(`/api/subscriber/${subscriberId}`);
      return response.data.subscriber;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState,
  reducers: {
    reset: (state) => {
      state.newSubscriberAdded = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSubscriber.pending, (state) => {
        state.loading = true;
        state.newSubscriberAdded = 'pending';
      })
      .addCase(addSubscriber.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers.push(action.payload);
        state.newSubscriberAdded = 'success';
      })
      .addCase(addSubscriber.rejected, (state) => {
        state.loading = false;
        state.newSubscriberAdded = 'failed';
      })
      .addCase(getAllSubscribers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSubscribers.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = action.payload;
      })
      .addCase(getAllSubscribers.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getSubscriberById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubscriberById.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = [action.payload];
      })
      .addCase(getSubscriberById.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export const { reset } = subscriberSlice.actions;

export default subscriberSlice.reducer;

// Selectors
export const selectAllSubscribers = (state) => state.subscriber.subscribers;
export const selectLoading = (state) => state.subscriber.loading;
export const selectSubscriberById = (state) => state.subscriber.subscribers[0];


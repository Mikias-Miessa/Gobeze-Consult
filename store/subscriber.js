import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  subscribers: [],
  loading: false,
  newSubscriberAdded: null,
  getSubscriberByIdStatus: '',
  selectedSubscriber: null,
  subscriberEdited: null,
};

export const addSubscriber = createAsyncThunk(
  'subscriber',
  async (subscriberData, thunkAPI) => {
    try {
      const res = await axios.post('/api/subscriber', subscriberData);
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
      return res.data.emails;
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
      console.log(subscriberId);
      const response = await axios.get(`/api/subscriber/${subscriberId}`);
      // console.log(response.data.subscriber);
      return response.data.subscriber;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const updateSubscriber = createAsyncThunk(
  'posts/updateSubscriber',
  async ({ subscriberId, subscriberData }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/subscriber/${subscriberId}`, subscriberData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const deleteSubscriber = createAsyncThunk(
  'posts/deleteSubscriber',
  async (subscriberId, thunkAPI) => {
    try {
      await axios.delete(`/api/subscriber/${subscriberId}`);
      return subscriberId;
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
      state.subscriberEdited = null;
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
        state.getSubscriberByIdStatus = 'loading';
      })
      .addCase(getSubscriberById.fulfilled, (state, action) => {
        state.loading = false;
        state.getSubscriberByIdStatus = 'success';
        state.subscribers = [action.payload];
      })
      .addCase(getSubscriberById.rejected, (state, action) => {
        state.loading = false;
        state.getSubscriberByIdStatus = 'failed';
      })
      .addCase(updateSubscriber.pending, (state) => {
        state.loading = true;
        state.subscriberEdited = 'pending';
      })
      .addCase(updateSubscriber.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = state.subscribers.map((subscriber) =>
          subscriber.id === action.payload.id ? action.payload : subscriber
        );
        state.subscriberEdited = 'success';
      })
      .addCase(updateSubscriber.rejected, (state, action) => {
        state.loading = false;
        state.subscriberEdited = 'failed';
      })
      .addCase(deleteSubscriber.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSubscriber.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = state.subscribers.filter((subscriber) => subscriber.id !== action.payload);
      })
      .addCase(deleteSubscriber.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { reset } = subscriberSlice.actions;

export default subscriberSlice.reducer;

// Selectors
export const selectAllSubscribers = (state) => state.subscriber.subscribers;
export const selectLoading = (state) => state.subscriber.loading;
export const selectSubscriberById = (state) => state.subscriber.subscribers[0];
export const selectNewSubscriberAdded = (state) => state.subscriber.newSubscriberAdded;
export const selectSubscriberEdited = (state) => state.subscriber.subscriberEdited;


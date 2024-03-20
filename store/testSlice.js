import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tests: [],
  loading: false,
  newTestAdded: null,
};

export const addTest = createAsyncThunk(
  'test/add',
  async (testData, thunkAPI) => {
    try {
      const res = await axios.post('/api/tests', testData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const getAllTests = createAsyncThunk(
  'test/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/tests');
      return res.data.tests;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const getTestById = createAsyncThunk(
  'test/getTestById',
  async (testId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/tests/${testId}`);
      return response.data.test;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const updateTest = createAsyncThunk(
  'posts/updateTest',
  async ({ testId, testData }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/tests/${testId}`, testData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const deleteTest = createAsyncThunk(
  'posts/deleteTest',
  async (testId, thunkAPI) => {
    try {
      await axios.delete(`/api/tests/${testId}`);
      return testId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    reset: (state) => {
      state.newTestAdded = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTest.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTest.fulfilled, (state, action) => {
        state.loading = false;
        state.tests.push(action.payload);
        state.newTestAdded = 'success';
      })
      .addCase(addTest.rejected, (state) => {
        state.loading = false;
        state.newTestAdded = 'failed';
      })
      .addCase(getAllTests.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTests.fulfilled, (state, action) => {
        state.loading = false;
        state.tests = action.payload;
      })
      .addCase(getAllTests.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getTestById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTestById.fulfilled, (state, action) => {
        state.loading = false;
        state.tests = [action.payload];
      })
      .addCase(getTestById.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateTest.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTest.fulfilled, (state, action) => {
        state.loading = false;
        state.tests = state.tests.map((test) =>
          test.id === action.payload.id ? action.payload : test
        );
      })
      .addCase(updateTest.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTest.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTest.fulfilled, (state, action) => {
        state.loading = false;
        state.tests = state.tests.filter((test) => test.id !== action.payload);
      })
      .addCase(deleteTest.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { reset } = testSlice.actions;

export default testSlice.reducer;

// Selectors
export const selectAllTests = (state) => state.test.tests;
export const selectLoading = (state) => state.test.loading;
export const selectTestById = (state) => state.test.tests[0];

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  blogs: [],
  loading: false,
  newBlogAdded: null,
};

export const addBlog = createAsyncThunk(
  'blog/add',
  async (blogData, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/blogs', blogData, config);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    resetNewBlogStatus: (state) => {
      state.newBlogAdded = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.push(action.payload);
        state.newBlogAdded = 'success';
      })
      .addCase(addBlog.rejected, (state) => {
        state.loading = false;
        state.newBlogAdded = 'failed';
      });
  },
});

export const { resetNewBlogStatus } = blogSlice.actions;

export default blogSlice.reducer;

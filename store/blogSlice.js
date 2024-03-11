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
    try {
      const res = await axios.post('/api/blogs', blogData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const getAllBlogs = createAsyncThunk(
  'blog/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/blogs');
      return res.data.blogs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const getBlogById = createAsyncThunk(
  'blog/getBlogById',
  async (blogId, thunkAPI) => {
    console.log(blogId)
    try {
      console.log("here")
      const response = await axios.get(`/api/blogs/${blogId}`);
      return response.data.blog;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors || error.message || error.toString());
    }
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    reset: (state) => {
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
      })
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = [action.payload];
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { reset } = blogSlice.actions;

export default blogSlice.reducer;

// Selectors
export const selectAllBlogs = (state) => state.blog.blogs;
export const selectLoading = (state) => state.blog.loading;
export const selectBlogById = (state) => state.blog.blogs[0];

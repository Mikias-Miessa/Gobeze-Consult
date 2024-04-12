  import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  partners: [],
  loading: false,
  newPartnerAdded: null,
};

export const addPartner = createAsyncThunk(
  'partner/add',
  async (partnerData, thunkAPI) => {
    try {
      console.log(partnerData);
      const res = await axios.post('/api/partners', partnerData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getAllPartners = createAsyncThunk(
  'partner/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/partners');
      return res.data.partners;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getPartnerById = createAsyncThunk(
  'partner/getPartnerById',
  async (partnerId, thunkAPI) => {
    try {
      console.log(partnerId);
      const response = await axios.get(`/api/partners/${partnerId}`);
      return response.data.partner;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const updatePartner = createAsyncThunk(
  'posts/updatePartner',
  async ({ partnerId, partnerData }, thunkAPI) => {
    try {
      const response = await axios.put(
        `/api/partners/${partnerId}`,
        partnerData
      );
      console.log(response.data);
      return response.data.partner;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const deletePartner = createAsyncThunk(
  'posts/deletePartner',
  async (partnerId, thunkAPI) => {
    try {
      await axios.delete(`/api/partners/${partnerId}`);
      return partnerId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    reset: (state) => {
      state.newPartnerAdded = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPartner.pending, (state) => {
        state.loading = true;
        state.newPartnerAdded = 'pending';
      })
      .addCase(addPartner.fulfilled, (state, action) => {
        state.loading = false;
        state.partners.push(action.payload);
        state.newPartnerAdded = 'success';
      })
      .addCase(addPartner.rejected, (state) => {
        state.loading = false;
        state.newPartnerAdded = 'failed';
      })
      .addCase(getAllPartners.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPartners.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = action.payload;
      })
      .addCase(getAllPartners.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getPartnerById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPartnerById.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = [action.payload];
      })
      .addCase(getPartnerById.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updatePartner.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePartner.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = state.partners.map((partner) =>
          partner._id === action.payload._id ? action.payload : partner
        );
      })
      .addCase(updatePartner.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deletePartner.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePartner.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = state.partners.filter(
          (partner) => partner.id !== action.payload
        );
      })
      .addCase(deletePartner.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { reset } = partnerSlice.actions;

export default partnerSlice.reducer;

// Selectors
export const selectAllPartners = (state) => state.partner.partners;
export const selectLoading = (state) => state.partner.loading;
export const selectPartnerById = (state) => state.partner.partners[0];

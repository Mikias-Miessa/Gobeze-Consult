import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  teams: [],
  loading: false,
  newTeamAdded: null,
};

export const addTeam = createAsyncThunk(
  'teams/add',
  async (teamData, thunkAPI) => {
    try {
      const res = await axios.post('/api/teams', teamData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getAllTeams = createAsyncThunk(
  'team/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/teams');
      return res.data.teams;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getTeamById = createAsyncThunk(
  'team/getTeamById',
  async (teamId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/teams/${teamId}`);
      return response.data.team;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const updateTeam = createAsyncThunk(
  'posts/updateTeam',
  async ({ teamId, teamData }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/teams/${teamId}`, teamData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const deleteTeam = createAsyncThunk(
  'posts/deleteTeam',
  async (teamId, thunkAPI) => {
    try {
      await axios.delete(`/api/teams/${teamId}`);
      return teamId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    reset: (state) => {
      state.newTeamAdded = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTeam.pending, (state) => {
        state.loading = true;
        state.newTeamAdded = 'pending';
      })
      .addCase(addTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.teams.push(action.payload);
        state.newTeamAdded = 'success';
      })
      .addCase(addTeam.rejected, (state) => {
        state.loading = false;
        state.newTeamAdded = 'failed';
      })
      .addCase(getAllTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(getAllTeams.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getTeamById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTeamById.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = [action.payload];
      })
      .addCase(getTeamById.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateTeam.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = state.teams.map((team) =>
          team.id === action.payload.id ? action.payload : team
        );
      })
      .addCase(updateTeam.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTeam.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = state.teams.filter((team) => team.id !== action.payload);
      })
      .addCase(deleteTeam.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { reset } = teamSlice.actions;

export default teamSlice.reducer;

// Selectors
export const selectTeams = (state) => state.team.teams;
export const selectLoading = (state) => state.team.loading;
export const selectTeamById = (state) => state.team.teams[0];
export const selectNewTeamAdded = (state) => state.team.newTeamAdded;

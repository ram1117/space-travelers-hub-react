import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { missions: [], toFetch: 'true' };

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  return response.json();
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    bookMission: (state,payload) => { 
      
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = { ...state };
      const missionList = [];
      action.payload.forEach((misObj) => {
        missionList.push({
          id: misObj.mission_id,
          name: misObj.mission_name,
          description: misObj.description,
          wiki: misObj.wikipedia,
          isReserved: false,
        });
      });
      newState.missions = missionList;
      newState.toFetch = false;
      return newState;
    });
  },
});

export const { bookMission } = missionSlice.actions;
export default missionSlice.reducer;

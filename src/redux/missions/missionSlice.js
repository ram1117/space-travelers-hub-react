import { createSlice } from '@reduxjs/toolkit';

const initialState = { missions: [], isLoading: 'true' };

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;

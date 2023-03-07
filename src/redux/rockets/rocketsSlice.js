import { createSlice } from '@reduxjs/toolkit';

const initialState = { rockets: [], isLoading: 'true' };

const rocktsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocktsSlice.reducer;

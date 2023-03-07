import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { rockets: [], toFetch: 'true' };

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  return response.json();
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const newState = { ...state };
      const rocketsCard = [];
      action.payload.forEach((rockObj) => {
        rocketsCard.push({
          id: rockObj.rocket_id,
          name: rockObj.rocket_name,
          description: rockObj.description,
          image: rockObj.flickr_images[0],
          isReserved: false,
        });
      });
      newState.rockets = rocketsCard;
      newState.toFetch = false;
      return newState;
    });
  },
});

export default rocketsSlice.reducer;

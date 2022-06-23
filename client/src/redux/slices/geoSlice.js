import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { geoAPI } from "../../api/geoAPI";


const init = {
  coords: null,
  results: [],
  error: null,
}

export const searchResults = createAsyncThunk(
  'geo/searchResults',
  async ({ phrase, limit }, { rejectWithValue, getState }) => {
    try {
      const res = await geoAPI.getGeo(phrase, limit);
      return res;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const geoSlice = createSlice({
  name: 'geo',
  initialState: init,
  reducers: {
    setCurrentGeo: (state, action) => {
      state.coords = action.payload.coords;
      state.name = action.payload.name;
      state.country = action.payload.country;
    }
  },
  extraReducers: {
    [searchResults.fulfilled]: (state, action) => {
      state.results = action.payload
    }
  },
})

export default geoSlice.reducer;

export const { setCurrentGeo } = geoSlice.actions;
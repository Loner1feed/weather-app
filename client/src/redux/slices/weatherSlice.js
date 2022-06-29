import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { weatherAPI } from '../../api/weatherAPI';


const init = {
  data: null,
  error: null,
  status: null,
}

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (_, { rejectWithValue, getState }) => {

    const { lat, lon } = getState().geo.coords;

    try {
      const res = await weatherAPI.getWeather(lat, lon);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState: init,
  reducers: {},
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.status = 'pending';
    },
    [getWeather.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled'
    },
    [getWeather.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    }
  }
})

export default weatherSlice.reducer
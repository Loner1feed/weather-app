import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { weatherAPI } from '../../api/weatherAPI';


const init = {
  data: null,
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
    [getWeather.fulfilled]: (state, action) => {
      state.data = action.payload;
    }
  }
})

export default weatherSlice.reducer
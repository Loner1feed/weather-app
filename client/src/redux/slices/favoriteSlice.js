import { createSlice } from "@reduxjs/toolkit";

// {
//   id: null,
//   name: null,
//   coord: null,
// }
const init = []

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: init,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);

    },

    overrideFavorite: (state, action) => {
      state = action.payload;
      return state;
    },

    deleteFavorite: (state, action) => {
      state = state.filter(item => item.id !== action.payload)
      return state
    }
  }
})

export default favoriteSlice.reducer;
export const { addFavorite, deleteFavorite, overrideFavorite } = favoriteSlice.actions;
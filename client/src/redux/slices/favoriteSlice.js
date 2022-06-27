import { createSlice } from "@reduxjs/toolkit";


const init = [
  {
    id: null,
    name: null,
    coord: null,
  }
]

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: init,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },

    deleteFavorite: (state, action) => {
      state.filter(item => item.id !== action.payload)
    }
  }
})

export default favoriteSlice.reducer;
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
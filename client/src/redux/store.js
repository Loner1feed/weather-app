import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";
import geoSlice from "./slices/geoSlice";
import weatherSlice from "./slices/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    geo: geoSlice,
    favorite: favoriteSlice,
  }
})
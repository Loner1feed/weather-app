import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentGeo } from "../../redux/slices/geoSlice";
import { style } from "./style/style";

export const FavItem = ({ data }) => {
  const dispatch = useDispatch();

  const favSelect = () => {
    const geoObj = {
      name: data.name,
      coords: data.coord,
      country: data.country,
    };
    dispatch(setCurrentGeo(geoObj));
  };

  return (
    <Box sx={style.item} onClick={favSelect}>
      <Box component="span">
        {data.name}, {data.country}
      </Box>
    </Box>
  );
};

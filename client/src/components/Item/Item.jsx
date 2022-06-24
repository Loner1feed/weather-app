import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { emptier, setCurrentGeo } from "../../redux/slices/geoSlice";
import { style } from "./style/style";

export const Item = ({ data }) => {
  const dispatch = useDispatch();
  const { lon, lat, name, country } = data;

  const itemClickHandler = (lon, lat, name, country) => {
    const geoObj = {
      coords: { lon: lon, lat: lat },
      name: name,
      country: country,
    };
    dispatch(setCurrentGeo(geoObj));
    dispatch(emptier());
  };

  return (
    <Box
      sx={style.item}
      onClick={() => {
        itemClickHandler(lon, lat, name, country);
      }}
    >
      {name + " " + country}
    </Box>
  );
};

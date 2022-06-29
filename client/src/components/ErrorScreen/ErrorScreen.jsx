import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const style = {
  screen: {
    width: "100%",
    height: "280px",
    display: "grid",
    placeItems: "center",
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
  },
};

export const ErrorScreen = () => {
  const { error } = useSelector((state) => state.weather);
  return <Box sx={style.screen}>{error}</Box>;
};

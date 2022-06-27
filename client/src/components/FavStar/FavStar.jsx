import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import starReg from "../../assets/icons/star-regular.svg";
import starSolid from "../../assets/icons/star-solid.svg";
import { style } from "./style/style";

export const FavStar = ({ rated = false }) => {
  const { data } = useSelector((state) => state.weather);

  const clickHandler = () => {};

  return (
    <Box sx={style.star} onClick={clickHandler}>
      {!rated ? <img src={starReg} alt="" /> : <img src={starSolid} alt="" />}
    </Box>
  );
};

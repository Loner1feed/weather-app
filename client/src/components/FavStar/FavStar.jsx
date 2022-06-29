import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import starReg from "../../assets/icons/star-regular.svg";
import starSolid from "../../assets/icons/star-solid.svg";
import { addFavorite, deleteFavorite } from "../../redux/slices/favoriteSlice";
import { v4 as uuidv4 } from "uuid";
import { style } from "./style/style";
import { useEffect } from "react";

export const FavStar = () => {
  const { data, status } = useSelector((state) => state.weather);
  const favArray = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

  let rated;
  if (data) {
    let searchedId = data.id;
    let currentFav = favArray.find((item) => item.id === searchedId);
    if (currentFav) {
      rated = true;
    }
  }

  const clickHandler = () => {
    const favObj = {
      id: data.id,
      name: data.name,
      country: data.sys.country,
      coord: data.coord,
    };
    if (!rated) {
      dispatch(addFavorite(favObj));
    } else if (rated) {
      dispatch(deleteFavorite(data.id));
      let filteredFav = favArray.filter((item) => item.id !== data.id);
      const ls = window.localStorage;
      ls.setItem("favorites", JSON.stringify(filteredFav));
    }
  };

  return (
    <Box
      sx={
        status === "rejected"
          ? { ...style.star, ...style.starDisabled }
          : style.star
      }
      onClick={clickHandler}
    >
      {!rated ? <img src={starReg} alt="" /> : <img src={starSolid} alt="" />}
    </Box>
  );
};

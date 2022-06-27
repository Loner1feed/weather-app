import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FavItem } from "../FavItem/FavItem";

export const FavList = () => {
  const favArr = useSelector((state) => state.favorite);

  useEffect(() => {
    if (favArr.length !== 0) {
      const ls = window.localStorage;
      ls.setItem("favorites", JSON.stringify(favArr));
    }
  }, [favArr]);

  return (
    <Box>
      {favArr.map((item, i) => (
        <FavItem key={i} data={item} />
      ))}
    </Box>
  );
};

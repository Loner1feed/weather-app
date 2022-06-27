import { Box, InputBase } from "@mui/material";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptier, searchResults } from "../../redux/slices/geoSlice";
import { FavStar } from "../FavStar/FavStar";
import { ItemList } from "../ItemList/ItemList";
import { style } from "./style/style";

export const Search = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.geo);
  let name = useSelector((state) => state.weather?.data?.name);
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(5);
  const inputRef = useRef();

  const geoCall = async (value, limit) => {
    dispatch(searchResults({ phrase: value, limit: limit }));
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (name) {
      setValue(name);
    }
  }, [name]);

  useEffect(() => {
    let timeout;
    if (value) {
      if (limit === 5) {
        timeout = setTimeout(() => {
          geoCall(value, limit);
        }, 500);
      }
    } else {
      if (results.length) {
        dispatch(emptier());
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return (
    <Box sx={style.wrap}>
      <InputBase
        sx={style.field}
        fullWidth
        placeholder="Search city"
        value={value}
        onChange={changeHandler}
        inputRef={inputRef}
        endAdornment={<FavStar />}
      />
      {document.activeElement === inputRef.current && <ItemList />}
    </Box>
  );
};

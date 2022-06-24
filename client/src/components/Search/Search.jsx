import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptier, searchResults } from "../../redux/slices/geoSlice";
import { ItemList } from "../ItemList/ItemList";

export const Search = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.geo);
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(5);

  const geoCall = async (value, limit) => {
    dispatch(searchResults({ phrase: value, limit: limit }));
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // dispatch(clearFull());
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
    <Box>
      <TextField
        fullWidth
        label="Search city"
        value={value}
        onChange={changeHandler}
      />
      <ItemList />
    </Box>
  );
};

import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";

export const WeatherBody = () => {
  const { data } = useSelector((state) => state.weather);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <Box>
      {data !== null && (
        <>
          <h2>{data.weather[0].main}</h2>
          <WeatherIcon icon={data.weather[0].icon} />
        </>
      )}
    </Box>
  );
};

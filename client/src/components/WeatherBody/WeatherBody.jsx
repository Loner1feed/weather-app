import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { style } from "./style/style";

export const WeatherBody = () => {
  const { data } = useSelector((state) => state.weather);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <Box sx={style.wrapper}>
      {data !== null && (
        <>
          <Box sx={style.plate}>
            <WeatherIcon icon={data.weather[0].icon} />
            <Box sx={style.info}>
              <Box component="h2">{data.name + ", " + data.sys.country}</Box>
              <Box component="span" sx={style.deg}>
                {Math.round(data.main.temp) + "°"}
              </Box>
              <Box component="span" sx={style.desc}>
                {data.weather[0].main}
              </Box>
            </Box>
          </Box>

          <Box sx={style.plateExtended}>
            <Box component="span">
              Feels like: {Math.round(data.main.feels_like)}°
            </Box>
            <Box component="span">Humidity: {data.main.humidity}%</Box>
            <Box component="span">Wind: {data.wind.speed}m/s</Box>
            <Box component="span">Pressure: {data.main.pressure}hPa</Box>
          </Box>
          <Box sx={style.plateExtended}></Box>
        </>
      )}
    </Box>
  );
};

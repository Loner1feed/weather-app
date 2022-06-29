import { Box, Fade, Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ErrorScreen } from "../ErrorScreen/ErrorScreen";
import { FavList } from "../FavList/FavList";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { style } from "./style/style";

export const WeatherBody = () => {
  const { data, status } = useSelector((state) => state.weather);

  return (
    <>
      {status === "fulfilled" && (
        <>
          <Fade in={status === "fulfilled"} timeout={500}>
            <Box sx={style.wrapper}>
              <Box sx={style.plate}>
                <WeatherIcon icon={data.weather[0].icon} />
                <Box sx={style.info}>
                  <Box component="h2">
                    {data.name + ", " + data.sys.country}
                  </Box>
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

              <Box sx={style.plateExtended}>
                <FavList />
              </Box>
            </Box>
          </Fade>
        </>
      )}

      {status === "pending" && (
        <Fade in={status === "pending"} timeout={500}>
          <Box sx={style.wrapper}>
            <Skeleton
              sx={{ bgcolor: "rgba(255,255,255,0.1)", gridColumn: "span 3" }}
              variant="rectangular"
              // width={210}
              height={280}
            />
          </Box>
        </Fade>
      )}

      {status === "rejected" && (
        <Fade in={status === "rejected"}>
          <Box>
            <ErrorScreen />
          </Box>
        </Fade>
      )}
    </>
  );
};

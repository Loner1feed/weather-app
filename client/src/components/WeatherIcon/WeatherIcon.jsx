import { Box } from "@mui/material";
import React from "react";
import { style } from "./style/style";

//icons
// import clearDay from "../../assets/icons/clear-day.svg";
// import clearNight from "../../assets/icons/clear-night.svg";
// import cloudy from "../../assets/icons/cloudy.svg";
// import fog from "../../assets/icons/fog.svg";
// import heavyShowers from "../../assets/icons/heavy-showers.svg";
// import heavySleet from "../../assets/icons/heavy-sleet.svg";
// import heavySnow from "../../assets/icons/heavy-snow.svg";
// import overcast from "../../assets/icons/overcast.svg";
// import partlyCloudyDay from "../../assets/icons/partly-cloudy-day.svg";
// import partlyCloudyNight from "../../assets/icons/partly-cloudy-night.svg";
// import showers from "../../assets/icons/showers.svg";
// import sleet from "../../assets/icons/sleet.svg";
// import snow from "../../assets/icons/snow.svg";
// import thunderstormShowers from "../../assets/icons/thunderstorm-showers.svg";
// import thunderstormSnow from "../../assets/icons/thunderstorm-snow.svg";
// import windy from "../../assets/icons/windy.svg";

export const WeatherIcon = ({ icon, size = "large" }) => {
  return (
    <Box sx={style.wrap}>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@${
          size === "large" ? 4 : 2
        }x.png`}
        alt=""
      />
    </Box>
  );
};

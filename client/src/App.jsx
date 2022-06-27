import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWeather } from "./redux/slices/weatherSlice";
import { Box } from "@mui/material";
import { Search } from "./components/Search/Search";
import { WeatherBody } from "./components/WeatherBody/WeatherBody";
import { RandomBg } from "./components/RandomBg/RandomBg";
import { overrideFavorite } from "./redux/slices/favoriteSlice";

// *** NOTE:
// *** App makes an extra qpi call when you select an item from favorites. Need to be fixed

function App() {
  const dispatch = useDispatch();
  const { coords } = useSelector((state) => state.geo);
  console.log(coords);

  const appStyles = {
    wrapper: {
      maxWidth: "700px",
      margin: "0 auto",
      width: "100%",
      padding: "20px",
      paddingTop: "20px",
      position: "relative",
      // zIndex: 10,
      /* From https://css.glass */
      // background: "rgba(255, 255, 255, 0.45)",

      background: "rgba(54,63,91, 0.8)",
      borderRadius: "5px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: " blur(6.6px)",
      "-webkit-backdrop-filter": "blur(6.6px)",
      border: "1px solid rgba(255, 255, 255, 0.14)",
    },

    app: {
      // height: "100vh",
      paddingTop: "100px",
    },
  };
  console.log("render");
  useEffect(() => {
    if (coords) {
      dispatch(getWeather());
    }
  }, [coords]);

  useEffect(() => {
    const ls = window.localStorage;
    const items = JSON.parse(ls.getItem("favorites"));
    console.log(items);
    if (items) {
      dispatch(overrideFavorite(items));
    }
  }, []);

  return (
    <Box sx={appStyles.app}>
      <RandomBg />
      <Box sx={appStyles.wrapper}>
        <Search />
        <WeatherBody />
      </Box>
    </Box>
  );
}

export default App;

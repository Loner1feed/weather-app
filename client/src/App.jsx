import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWeather } from "./redux/slices/weatherSlice";
import { Box } from "@mui/material";
import { Search } from "./components/Search/Search";
import { WeatherBody } from "./components/WeatherBody/WeatherBody";

const appStyles = {
  wrapper: {
    maxWidth: "700px",
    margin: "0 auto",
    width: "100%",
    padding: "100px 20px",
    paddingTop: "50px",
  },
};

function App() {
  const dispatch = useDispatch();
  const { coords } = useSelector((state) => state.geo);

  useEffect(() => {
    if (coords) {
      dispatch(getWeather());
    }
  }, [coords]);

  return (
    <Box sx={appStyles.wrapper}>
      <Search />
      <WeatherBody />
    </Box>
  );
}

export default App;

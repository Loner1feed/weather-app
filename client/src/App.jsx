import { weatherAPI } from "./api/weatherAPI";
import { useDispatch, useSelector } from "react-redux";
import { searchResults, setCurrentGeo } from "./redux/slices/geoSlice";
import { useEffect } from "react";
import { getWeather } from "./redux/slices/weatherSlice";

function App() {
  const dispatch = useDispatch();
  const { coords, results } = useSelector((state) => state.geo);

  useEffect(() => {
    // setCurrentCoords(coords);
    if (coords) {
      console.log(coords);
      dispatch(getWeather());
    }
  }, [coords]);

  useEffect(() => {
    if (results.length) {
      console.log(results);
    }
  }, [results]);

  const geoCall = async () => {
    dispatch(searchResults({ phrase: "Odesa", limit: 5 }));
  };

  const itemClickHandler = (lon, lat, name, country) => {
    // console.log(lon, lat);
    const geoObj = {
      coords: { lon: lon, lat: lat },
      name: name,
      country: country,
    };
    dispatch(setCurrentGeo(geoObj));
  };

  return (
    <div className="App">
      <button>click</button>
      <button onClick={geoCall}>another click</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {results.map((item) => (
          <a
            href="javascript://"
            onClick={() => {
              itemClickHandler(item.lon, item.lat, item.name, item.country);
            }}
          >
            {item.name + " " + item.country}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;

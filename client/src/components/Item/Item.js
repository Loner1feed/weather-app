import React from 'react'
import { useDispatch } from 'react-redux';
import { emptier, setCurrentGeo } from '../../redux/slices/geoSlice';

export const Item = ({ data }) => {

  const dispatch = useDispatch();
  const { lon, lat, name, country } = data;

  const itemClickHandler = (lon, lat, name, country) => {
    const geoObj = {
      coords: { lon: lon, lat: lat },
      name: name,
      country: country,
    };
    dispatch(setCurrentGeo(geoObj));
    dispatch(emptier())
  };

  return (
    <div onClick={() => { itemClickHandler(lon, lat, name, country) }}>{name + ' ' + country}</div>
  )
}

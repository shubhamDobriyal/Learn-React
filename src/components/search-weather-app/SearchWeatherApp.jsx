import React, { useEffect, useState } from "react";
import "./style.css";

export default function SearchWeatherApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d6461526365ff6c4a728674537af118a`;
      const res = await fetch(url);
      const data = await res.json();
      setCity(data.main);
    };
    fetchApi();
  });

  return (
    <>
      <div className="box">
        <div className="input-data">
          <input
            type="search"
            className="input-field"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
          />
        </div>
        {!city ? (
          <div className="info-div">
            <div className="info">
              <p> Data Not Found </p>
            </div>
          </div>
        ) : (
          <div className="info-div">
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"> {search}</i>
              </h2>
              <h1 className="temp">{city.temp} °C</h1>
              <h3 className="temp-min-max">
                Min : {city.temp_min} °C || Max : {city.temp_max} °C
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import { useState } from "react";
import "./styele.css"

export default function CovidTracker() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const apiData = await res.json();
    setData(apiData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1> State Wise Covid Tracker </h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <>
                  <tr>
                    <td>{value.state}</td>
                    <td>{value.active}</td>
                    <td>{value.confirmed}</td>
                    <td>{value.deaths}</td>
                    <td>{value.recovered}</td>
                    <td>{value.lastupdatedtime}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

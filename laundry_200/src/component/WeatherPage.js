import Navigation from "./NavigationBar.js";
import Weather from "./Weather.js";
import useWindowDimensions from "./WindowSize.js";
import { Grid, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

const circle = (e) => {
  return {
    display: "flex",
    width: e,
    height: e,
    backgroundColor: "#E9F7FF",
    borderRadius: "50%",
    marginRight: "30px",
  };
};

const bar = (percentage, color) => {
  return {
    display: "flex",
    width: percentage,
    height: "30px",
    background: color,
    borderRadius: "40px",
    marginBottom: "150px",
  };
};

const styles = {
  horizontal: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "40px",
    justifyContent: "space-between",
    paddingRight: "10%",
    paddingLeft: "10%",
    marginTop: "50px",
  },
  vertical: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};
// window.location.reload(false);

const WeatherPage = () => {
  // Get current geolocation through Geolocation API
  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  const [latitude, setLatitude] = useState("36");
  const [longitude, setLongitude] = useState("127");

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  const { height, width } = useWindowDimensions();
  const [arr, setarr] = useState([]);
  const [temp, setTemp] = useState("");
  const [hum, setHum] = useState("");
  const [d1, setd1] = useState([]);
  const [d2, setd2] = useState([]);
  const [d3, setd3] = useState([]);
  const [d4, setd4] = useState([]);
  const [d11, setd11] = useState([]);
  const [d22, setd22] = useState([]);
  const [d33, setd33] = useState([]);
  const [d44, setd44] = useState([]);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=3a3acc40ffe3a923536f1a5f132edcd6`;

  async function getWeather() {
    await axios.get(weatherUrl).then((response) => {
      const jsonArray = [];
      for (var i = 0; i < response.data.list.length; i++) {
        jsonArray.push(response.data.list[i]);
      }
      setTemp(jsonArray[0].main.temp);
      setHum(jsonArray[0].main.humidity);
      setd1([jsonArray[8].dt_txt, jsonArray[8].weather[0].main]);
      setd2([jsonArray[16].dt_txt, jsonArray[8].weather[0].main]);
      setd3([jsonArray[24].dt_txt, jsonArray[8].weather[0].main]);
      setd4([jsonArray[32].dt_txt, jsonArray[8].weather[0].main]);
      setd11([jsonArray[0].dt_txt, jsonArray[8].weather[0].main]);
      setd22([jsonArray[1].dt_txt, jsonArray[8].weather[0].main]);
      setd33([jsonArray[2].dt_txt, jsonArray[8].weather[0].main]);
      setd44([jsonArray[3].dt_txt, jsonArray[8].weather[0].main]);
    });
  }

  useEffect(() => {
    getWeather();
  }, []);
  // getWeather()

  return (
    <>
      <Navigation />
      <Toolbar />
      <div style={styles.horizontal}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography>Not Recommended</Typography>
          </Grid>
          <Grid item>
            <Typography>Recommended</Typography>
          </Grid>
        </Grid>
      </div>

      <div style={styles.horizontal}>
        <div style={bar(hum + "%", "skyblue")}></div>
        <div style={bar(100 - hum + "%", "red")}></div>
      </div>

      {/* weather forecast for the day */}
      <div style={styles.vertical}>
        <div>Weather Forecast for Today</div>
        <div style={styles.horizontal}>
          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginRight: "50px",
              }}
            >
              {temp}degrees
            </div>{" "}
            Celcius{" "}
          </div>

          <div style={circle("60px")} />

          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginRight: "50px",
              }}
            >
              {" "}
              60%{" "}
            </div>{" "}
            Humidity{" "}
          </div>
          <div style={circle("60px")} />

          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginRight: "50px",
            }}
          >
            {" "}
            Cloudy{" "}
          </div>
        </div>

        {/* weather forecast for the week */}
        <div style={{ marginTop: "60px" }}> Weather forecast for the week</div>
        <div style={styles.horizontal}>
          <Weather day={d1[0]} weather={d1[1]} />
          <Weather day={d2[0]} weather={d2[1]} />
          <Weather day={d3[0]} weather={d3[1]} />
          <Weather day={d4[0]} weather={d4[1]} />
        </div>

        <div style={{ marginTop: "60px" }}>
          {" "}
          Weather Forecast for today - by Time
        </div>
        <div style={styles.horizontal}>
          <Weather day={d11[0]} weather={d11[1]} />
          <Weather day={d22[0]} weather={d22[1]} />
          <Weather day={d33[0]} weather={d33[1]} />
          <Weather day={d44[0]} weather={d44[1]} />
        </div>
      </div>
    </>
  );
};

export default WeatherPage;

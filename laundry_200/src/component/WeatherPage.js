import Navigation from "./NavigationBar.js";
import Weather from "./Weather.js";
import useWindowDimensions from "./WindowSize.js";
import { Grid, Toolbar, Typography } from "@mui/material";

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

const WeatherPage = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Navigation />
      <Toolbar />

      <div style={styles.horizontal}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography>Recommended</Typography>
          </Grid>
          <Grid item>
            <Typography>Not Recommended</Typography>
          </Grid>
        </Grid>
      </div>

      <div style={styles.horizontal}>
        <div style={bar("40%", "skyblue")}></div>
        <div style={bar("60%", "red")}></div>
      </div>

      {/* weather forecast for the day */}
      <div style={styles.vertical}>
        <div> Weather Forecast for Today </div>
        <div style={styles.horizontal}>
          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginRight: "50px",
              }}
            >
              {" "}
              27 degrees{" "}
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
            humidity{" "}
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
        <div style={{ marginTop: "60px" }}> Weather Forecast for the week </div>
        <div style={styles.horizontal}>
          <Weather day="monday" weather="sunny" />
          <Weather day="monday" weather="sunny" />
          <Weather day="monday" weather="sunny" />
          <Weather day="monday" weather="sunny" />
          <Weather day="monday" weather="sunny" />
          <Weather day="monday" weather="sunny" />
          <Weather day="monday" weather="sunny" />
        </div>
      </div>
    </>
  );
};

export default WeatherPage;

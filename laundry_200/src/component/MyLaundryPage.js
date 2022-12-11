import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Toolbar, Typography, Grid } from "@mui/material";
import Navigation from "./NavigationBar";
import washingMachineImg from "../image/washing-machine.png";
import washingMachineCompImg from "../image/washing-machine-complete.png";
import moment from "moment";
import { useLocation } from "react-router-dom";
import axios from "axios";

const MyLaundryPage = () => {
  const { state } = useLocation();
  const { id, start, duration } = state;

  const expectedEnd = moment(start, "YYYY-MM-DDTHH:mm").add(duration, "m");

  // To calculate the time left between the current time and the expected time left
  const timeLeft = moment(expectedEnd, "YYYY-MM-DDTHH:mm").diff(
    moment(),
    "minutes"
  );

  // Formatted start time and end time
  const startTime = moment(start, "YYYY-MM-DDTHH:mm").format("LT");
  const endTime = moment(expectedEnd, "YYYY-MM-DDTHH:mm").format("LT");

  let [status, setStatus] = useState(true);

  if (status) {
    setTimeout(() => {
      axios.get("http://localhost:1234/req").then(function (response) {
        setStatus(response.data.state);
        console.log(response.data.state);
      });
    }, 10 * 1000);
  }

  // check whether the laundry is completed
  // const completed = moment() >= moment(expectedEnd, "YYYY-MM-DDTHH:mm");

  const completed = !status;

  return (
    <div>
      <Navigation />
      <Toolbar />
      <Box component="main" sx={{ p: 8 }} style={{ textAlign: "center" }}>
        <Typography variant="h5">
          Your Laundry is {completed ? "Completed" : "Running"}!
        </Typography>
        <Typography variant="caption">
          Note: It is possible that the laundry machine is still running when it
          reaches the expected end time / time left runs out.
        </Typography>
        <Box sx={{ p: 4 }}>
          <img
            src={completed ? washingMachineCompImg : washingMachineImg}
          ></img>
        </Box>
      </Box>
      <Grid container justifyContent="center">
        <Grid item minWidth={300}>
          <Grid item style={{ textAlign: "center" }}>
            <Typography>Machine ID: {id}</Typography>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography>Started Time</Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography>{startTime}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography>Expected Time Left</Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography>{timeLeft < 0 ? 0 : timeLeft}m</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography>Expected End Time</Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography>{endTime}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box component="main" sx={{ p: 4 }} style={{ textAlign: "center" }}>
        <Button variant="contained" href="/status">
          Start A New Laundry Session
        </Button>
      </Box>
    </div>
  );
};

export default MyLaundryPage;

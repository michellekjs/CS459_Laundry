import React from "react";
import Box from "@mui/material/Box";
import { Toolbar, Typography, Grid } from "@mui/material";
import Navigation from "./NavigationBar";
import washingMachineImg from "../image/washing-machine.png";
import washingMachineCompImg from "../image/washing-machine-complete.png";
import moment from "moment";

const MyLaundryPage = () => {
  let [ status, setStatus ] = useState(true);

  if(status) {
    setTimeout(()=> {
      axios.get('http://localhost:1234/req')
            .then(function(response) {
              setStatus(response.data.state);
              console.log(response.data.state);
            });
    }, 10*1000);
  }

  /**
   * API needed
   * {
   *  start: "2022-11-23T17:00:00"
   *  expectedEnd: "2022-11-23T18:30:00"
   * }
   */

  // dummy data
  const start = "2022-11-23T17:00:00";
  const expectedEnd = "2022-11-23T17:30:00";

  // check whether the laundry is completed
  // const completed = moment() >= moment(expectedEnd, "YYYY-MM-DDTHH:mm:ss");
  const completed = !status;

  // To calculate the time left between the current time and the expected time left
  const timeLeft = moment(expectedEnd, "YYYY-MM-DDTHH:mm:ss").diff(
    moment(),
    "minutes"
  );

  // Formatted start time and end time
  const startTime = moment(start, "YYYY-MM-DDTHH:mm:ss").format("LT");
  const endTime = moment(expectedEnd, "YYYY-MM-DDTHH:mm:ss").format("LT");

  return (
    <div>
      <Navigation />

      <Toolbar />
      <Box component="main" sx={{ p: 8 }} style={{ textAlign: "center" }}>
        <Typography variant="h5">
          Your Laundry is {completed ? "Completed" : "Running"}!
        </Typography>
        <Box sx={{ p: 4 }}>
          <img
            src={completed ? washingMachineCompImg : washingMachineImg}
          ></img>
        </Box>
      </Box>
      <Grid container justifyContent="center">
        <Grid item minWidth={300}>
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
              <Typography>Time Left</Typography>
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
    </div>
  );
};

export default MyLaundryPage;

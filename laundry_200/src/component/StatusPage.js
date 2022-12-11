import React, { useState } from "react";
import Navigation from "./NavigationBar";
import {
  Toolbar,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ImageList,
  ImageListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import washingMachineImg from "../image/washing-machine.png";
import washingMachineCompImg from "../image/washing-machine-complete.png";
import { useNavigate } from "react-router-dom";

const StatusPage = () => {
  // dummy data
  const laundryRooms = [
    {
      dorm: "Narae Hall",
      floors: [
        {
          floor: "3",
          rooms: [
            {
              id: "A",
              total: 2,
              idle: 1,
              occupied: 1,
            },
          ],
        },
        {
          floor: "5",
          rooms: [
            {
              id: "A",
              total: 2,
              idle: 2,
              occupied: 0,
            },
          ],
        },
        {
          floor: "7",
          rooms: [
            {
              id: "A",
              total: 2,
              idle: 0,
              occupied: 2,
            },
          ],
        },
        {
          floor: "9",
          rooms: [
            {
              id: "A",
              total: 2,
              idle: 1,
              occupied: 1,
            },
          ],
        },
      ],
    },
    {
      dorm: "Areum Hall",
      floors: [
        {
          floor: "1",
          rooms: [
            {
              id: "A",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "B",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "C",
              total: 1,
              idle: 1,
              occupied: 0,
            },
            {
              id: "D",
              total: 1,
              idle: 1,
              occupied: 0,
            },
          ],
        },
        {
          floor: "2",
          rooms: [
            {
              id: "A",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "B",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "C",
              total: 1,
              idle: 1,
              occupied: 0,
            },
            {
              id: "D",
              total: 1,
              idle: 1,
              occupied: 0,
            },
          ],
        },
        {
          floor: "3",
          rooms: [
            {
              id: "A",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "B",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "C",
              total: 1,
              idle: 1,
              occupied: 0,
            },
            {
              id: "D",
              total: 1,
              idle: 1,
              occupied: 0,
            },
          ],
        },
        {
          floor: "4",
          rooms: [
            {
              id: "A",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "B",
              total: 1,
              idle: 0,
              occupied: 1,
            },
            {
              id: "C",
              total: 1,
              idle: 1,
              occupied: 0,
            },
            {
              id: "D",
              total: 1,
              idle: 1,
              occupied: 0,
            },
          ],
        },
      ],
    },
    {
      dorm: "Dasom Hall",
      floors: [
        {
          floor: "1",
          rooms: [
            {
              id: "A",
              total: 9,
              idle: 5,
              occupied: 4,
            },
          ],
        },
      ],
    },
  ];

  const [dorm, setDorm] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");

  const [floors, setFloors] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [idle, setIdle] = useState(0);
  const [occupied, setOccupied] = useState(0);

  const handleDorm = (e) => {
    setDorm(e.target.value);
    setFloor("");
    setRoom("");

    const floorsArr = [];
    for (let item of laundryRooms) {
      if (item.dorm === e.target.value) {
        for (let floorItem of item.floors) {
          floorsArr.push(floorItem.floor);
        }
        setFloors(floorsArr);
        break;
      }
    }
  };

  const handleFloor = (e) => {
    setFloor(e.target.value);
    setRoom("");

    const roomsArr = [];
    for (let item of laundryRooms) {
      if (item.dorm === dorm) {
        for (let floorItem of item.floors) {
          if (floorItem.floor === e.target.value) {
            for (let roomItem of floorItem.rooms) {
              roomsArr.push(roomItem.id);
            }
            setRooms(roomsArr);
            break;
          }
        }
      }
    }
  };

  const handleRoom = (e) => {
    setRoom(e.target.value);

    for (let item of laundryRooms) {
      if (item.dorm === dorm) {
        for (let floorItem of item.floors) {
          if (floorItem.floor === floor) {
            for (let roomItem of floorItem.rooms) {
              if (roomItem.id === e.target.value) {
                setIdle(roomItem.idle);
                setOccupied(roomItem.occupied);
                break;
              }
            }
          }
        }
      }
    }
  };

  // clicking unoccupied laundry machine
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(0);

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  // // clicking occupied laundry machine
  // const [openDialogOcc, setOpenDialogOcc] = useState(false);

  // const handleOpenDialogOcc = () => {
  //   setOpenDialogOcc(true);
  // };

  // const handleCloseDialogOcc = () => {
  //   setOpenDialogOcc(false);
  // };

  const machineId = "1";

  const navigate = useNavigate();

  const handleStartLaundry = () => {
    setOpenDialog(false);
    if (startTime !== "" && duration !== 0) {
      navigate(`/my-laundry/${machineId}`, {
        state: { id: machineId, start: startTime, duration: duration },
      });
    }
  };

  return (
    <div>
      <Navigation />
      <Toolbar />
      <Box component="main" sx={{ p: 8 }}>
        <Dialog open={openDialog}>
          <DialogTitle>Start A New Laundry Session</DialogTitle>
          <DialogContent>
            <Box sx={{ p: 2 }}>
              <InputLabel>Start Time</InputLabel>
              <TextField
                autoFocus
                id="start"
                type="datetime-local"
                fullWidth
                variant="standard"
                onChange={handleStartTime}
              ></TextField>
            </Box>
            <Box sx={{ p: 2 }}>
              <InputLabel>Duration (minutes)</InputLabel>
              <TextField
                id="duration"
                type="number"
                fullWidth
                variant="standard"
                onChange={handleDuration}
              ></TextField>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleStartLaundry}>Start</Button>
          </DialogActions>
        </Dialog>
        {/* <Dialog open={openDialogOcc}>
          <DialogTitle>Occupied!</DialogTitle>
          <DialogContent>
            <Typography>
              Please choose another unoccupied laundry machine.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogOcc}>OK</Button>
          </DialogActions>
        </Dialog> */}
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">Select Your Laundry Room</Typography>
            <Grid container sx={{ py: 4 }} alignItems="center">
              <Grid item xs={6}>
                <Typography>Select Dormitory</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel>Dorm</InputLabel>
                  <Select value={dorm} label="Dorm" onChange={handleDorm}>
                    {laundryRooms.map((item, idx) => (
                      <MenuItem key={idx} name={item.dorm} value={item.dorm}>
                        {item.dorm}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container sx={{ py: 4 }} alignItems="center">
              <Grid item xs={6}>
                <Typography>Select Floor</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel>Floor</InputLabel>
                  <Select value={floor} label="Floor" onChange={handleFloor}>
                    {floors.map((item, idx) => (
                      <MenuItem key={idx} name={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container sx={{ py: 4 }} alignItems="center">
              <Grid item xs={6}>
                <Typography>Select Room</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel>Room</InputLabel>
                  <Select value={room} label="Room" onChange={handleRoom}>
                    {rooms.map((item, idx) => (
                      <MenuItem key={idx} name={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Laundry Room Status</Typography>
            <Typography variant="subtitle2">
              Select an empty laundry machine to start a new laundry session.
            </Typography>
            <Grid container sx={{ py: 2 }} alignItems="center">
              <ImageList cols={3} sx={{ width: 500 }}>
                {Array.from(Array(idle)).map((item, idx) => (
                  <ImageListItem key={idx} sx={{ p: 2 }}>
                    <img
                      src={washingMachineCompImg}
                      onClick={handleOpenDialog}
                    ></img>
                  </ImageListItem>
                ))}
                {Array.from(Array(occupied)).map((item, idx) => (
                  <ImageListItem key={idx} sx={{ p: 2 }}>
                    <img
                      src={washingMachineImg}
                      onClick={handleOpenDialog}
                    ></img>
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StatusPage;

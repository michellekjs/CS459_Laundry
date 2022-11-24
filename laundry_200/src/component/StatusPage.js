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
} from "@mui/material";
import washingMachineImg from "../image/washing-machine.png";
import washingMachineCompImg from "../image/washing-machine-complete.png";

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

  const [idle, setIdle] = useState([]);
  const [occupied, setOccupied] = useState([]);

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

  return (
    <div>
      <Navigation />
      <Toolbar />
      <Box component="main" sx={{ p: 8 }}>
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
            <Grid container sx={{ py: 2 }} alignItems="center">
              <ImageList cols={3} sx={{ width: 500 }}>
                {Array.from(Array(idle)).map((item, idx) => (
                  <ImageListItem key={idx} sx={{ p: 2 }}>
                    <img src={washingMachineCompImg}></img>
                  </ImageListItem>
                ))}
                {Array.from(Array(occupied)).map((item, idx) => (
                  <ImageListItem key={idx} sx={{ p: 2 }}>
                    <img src={washingMachineImg}></img>
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

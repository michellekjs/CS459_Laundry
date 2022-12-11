import React from "react";
import Box from "@mui/material/Box";
import { Button, Toolbar, Typography } from "@mui/material";
import Navigation from "./NavigationBar";

const MyLaundryPage = () => {
  return (
    <div>
      <Navigation />
      <Toolbar />
      <Box
        component="main"
        sx={{ pt: 8, pb: 4 }}
        style={{ textAlign: "center" }}
      >
        <Typography variant="h5">
          No laundry machine session recorded.
        </Typography>
        <Typography variant="h6">
          Please select an unoccupied laundry machine to start your laundry
          session.
        </Typography>
      </Box>
      <Box component="main" sx={{ p: 4 }} style={{ textAlign: "center" }}>
        <Button variant="contained" href="/status">
          Start Your Laundry Session
        </Button>
      </Box>
    </div>
  );
};

export default MyLaundryPage;

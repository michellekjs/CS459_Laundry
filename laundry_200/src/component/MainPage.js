import Navigation from "./NavigationBar.js";
import Button from '@mui/material/Button';
import {  Toolbar } from "@mui/material";
import cover from "../image/cover_img.jpg"
import useWindowDimensions from "./WindowSize.js";

const MainPage = () => {
  const { height, width } = useWindowDimensions();
  const buttonStyle = {backgroundColor:"lightgray", color:"black", width:"400px", height:"100px",    marginTop:"30px"};
  return (
    <>
    <Navigation />
    <Toolbar />
    <img src = {cover} style={{height:height*2/5, width:width, objectFit:"cover", marginBottom:"30px"}}/>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          }}>
          <Button style={buttonStyle} href="/weather"> Is it a good day to do laundry? </Button>
          <Button style={buttonStyle} href="/my-laundry" > How is your laundry going on? </Button>
          <Button style={buttonStyle} href="/status"> What laundry machine is empty </Button>
        </div>
    </> 
  )
}

export default MainPage;

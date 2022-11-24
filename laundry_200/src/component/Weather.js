//get input from the weather
import rainy from "../image/rainy.png"
import sunny from "../image/sunny.png"
import snowy from "../image/snowy.png"

function Weather(props) {
  return (
    <div style={{	display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column", margin:"20px"}}>
      <div> {props.day} </div>
      <div> {props.weather} </div>
      <img src= {snowy} />
    </div>
  ) 
}

export default Weather;
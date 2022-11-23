import Navigation from "./NavBar.js";
import Weather from "./Weather.js"
import rainy from "../image/rainy.png"
import sunny from "../image/sunny.png"
import snowy from "../image/snowy.png"
import useWindowDimensions from './WindowSize.js'


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
	return (
		{display: "flex",
		width: percentage,
		height: "30px",
		background: color,
		borderRadius: "40px",
    marginBottom:"150px"}
  )
}

const styles = {
	horizontal: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
    marginBottom:"40px"
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
      <div style={Object.assign(styles.horizontal, { justifyContent:"space-between", paddingRight:"10%",paddingLeft:"10%", marginTop:"50px"})}>
        <div>Recommended </div>
        <div> Not recommended </div>
      </div>
      <div style={styles.horizontal}>
        <div style={bar("40%", "skyblue")}></div>
        <div style={bar("60%", "red")}></div>
      </div>

{/* weather forecast for the day */}
			<div style={styles.vertical}>
				<div> Weather Forecast for today </div>
				<div style={styles.horizontal}>

          <div > 
          <div style={{fontSize:"30px", fontWeight:'bold', marginRight:"50px"}}> 27 degrees </div> Celcius </div>

					<div style={circle("60px")} />

          <div>
          <div style={{fontSize:"30px", fontWeight:'bold',marginRight:"50px"}}> 60% </div> humidity </div> 
					<div style={circle("60px")} />

          <div style={{fontSize:"30px", fontWeight:'bold',marginRight:"50px"}}> Cloudy </div>
				</div>

{/* weather forecast for the week */}
				<div style={{marginTop:"60px"}}> Weather Forecast for the week </div>
        <div style={styles.horizontal}>
          <Weather day="monday" weather="sunny"/>
          <Weather day="monday" weather="sunny"/>
          <Weather day="monday" weather="sunny"/>
          <Weather day="monday" weather="sunny"/>
          <Weather day="monday" weather="sunny"/>
          <Weather day="monday" weather="sunny"/>
          <Weather day="monday" weather="sunny"/>
        </div>
			</div>
		</>
	);
};

export default WeatherPage;

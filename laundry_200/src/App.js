import logo from "./logo.svg";
import "./App.css";
import MainPage from "./component/MainPage";
import LoginPage from "./component/LoginPage";
import WeatherPage from "./component/WeatherPage";
import StatusPage from "./component/StatusPage";
import MyLaundryPage from "./component/MyLaundryPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Laundry-200">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/my-laundry" element={<MyLaundryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

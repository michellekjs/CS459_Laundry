import logo from './logo.svg';
import './App.css';
import MainPage from './component/MainPage';
import LoginPage from './component/LoginPage';
import WeatherPage from './component/WeatherPage';

import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="Laundry-200">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import { Information } from './pages/information';
import { WeatherContext } from './components/context/Context';
import {useState} from 'react';


function App() {
  const [weatherData, setWeatherData] = useState({});
  return (
    <WeatherContext.Provider value={{weatherData, setWeatherData}}>
      <Router>
        <Routes>
          <Route path="/information" element={<Information />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </WeatherContext.Provider>
  );
}

export default App;
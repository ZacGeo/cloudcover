import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import { Information } from './pages/information';
import { WeatherProvider} from './components/context/Context';


function App() {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/information" element={<Information />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
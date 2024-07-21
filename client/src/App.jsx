import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import { Information } from './pages/information';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/information" element={<Information />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
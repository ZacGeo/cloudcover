import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import { Information } from './pages/information';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/information">
          <Information />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
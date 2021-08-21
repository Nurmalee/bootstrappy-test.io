import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Land'
import Admin from './pages/Admin'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Landing" component={Landing} />
        <Route path="/Admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;

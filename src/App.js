import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Club from "./pages/Club/Club";
// Components
import Login from "./pages/Login/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Club">
            <Club />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import EventsFeedback from "./pages/EventsFeedback/EventsFeedback";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/EventsFeedback" component={EventsFeedback} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

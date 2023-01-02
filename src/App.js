import {Navbar} from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Data
import data from "./data/Navbar.json"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar data={data}/>
      </Router>
    </div>
  );
}

export default App;

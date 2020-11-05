import Jumbotron from "react-bootstrap/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Easy from "./pages/Easy";
import Hard from "./pages/Hard";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Jumbotron className="container py-5 my-5 justify-content-center">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Easy} />
            <Route exact path="/Hard" component={Hard} />
          </Switch>
        </Jumbotron>
      </div>
    </Router>
  );
}

export default App;

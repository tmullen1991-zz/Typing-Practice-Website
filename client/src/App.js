import Jumbotron from "react-bootstrap/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Easy from "./pages/Easy";
import Hard from "./pages/Hard";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Jumbotron className="container py-5 my-5 justify-content-center">
        <Navbar />
        <Router exact path="/">
          <Switch>
            <Route exact path="/easy" component={Easy} />
            <Route exact path="/hard" component={Hard} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Jumbotron>
    </div>
  );
}

export default App;

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Easy from "./pages/Easy";
import Hard from "./pages/Hard";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router exact path="/">
      <Navbar />
      <div className="App">
        <Jumbotron className="container py-5 my-5 justify-content-center" fluid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/easy" component={Easy} />
            <Route exact path="/hard" component={Hard} />
            <Route component={NotFound} />
          </Switch>
        </Jumbotron>
      </div>
    </Router>
  );
}

export default App;

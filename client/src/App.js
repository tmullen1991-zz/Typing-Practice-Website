import Jumbotron from "react-bootstrap/Jumbotron";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Easy from "./pages/Easy";
import Hard from "./pages/Hard";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Jumbotron className="container py-5 my-5 justify-content-center">
        <Navbar />
        <Router path="/">
          <Route path="/easy" component={Easy} />
          <Route path="/hard" component={Hard} />
        </Router>
      </Jumbotron>
    </div>
  );
}

export default App;

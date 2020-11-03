import Jumbotron from "react-bootstrap/Jumbotron";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Jumbotron className="container py-5 my-5 justify-content-center">
        <Navbar />
        <Main />
      </Jumbotron>
    </div>
  );
}

export default App;
